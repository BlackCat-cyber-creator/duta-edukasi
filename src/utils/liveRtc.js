import {
  addIceCandidate,
  clearCandidates,
  subscribeIceCandidates,
  updateLiveRoom
} from '../firebase/liveRooms';
import { DEFAULT_ICE_SERVERS } from './liveConfig';

const DATA_CHUNK_MAX_CHARS = 12000;

export async function fetchIceConfiguration(getIdToken) {
  try {
    const token = typeof getIdToken === 'function' ? await getIdToken() : null;
    if (!token) {
      return { iceServers: DEFAULT_ICE_SERVERS, provider: 'stun-only' };
    }
    const res = await fetch('/api/turn-credentials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    if (!res.ok) {
      return { iceServers: DEFAULT_ICE_SERVERS, provider: 'stun-only' };
    }
    const data = await res.json();
    if (Array.isArray(data?.iceServers) && data.iceServers.length > 0) {
      return {
        iceServers: data.iceServers,
        provider: data.provider || 'stun-only'
      };
    }
  } catch {
    // Fallback ke STUN bawaan bila endpoint tidak terjangkau (mis. vite dev tanpa serverless)
  }
  return { iceServers: DEFAULT_ICE_SERVERS, provider: 'stun-only' };
}

export async function enumerateMediaDevices() {
  if (typeof navigator === 'undefined' || !navigator.mediaDevices?.enumerateDevices) {
    return { cameras: [], microphones: [] };
  }
  try {
    const list = await navigator.mediaDevices.enumerateDevices();
    return {
      cameras: list.filter((d) => d.kind === 'videoinput'),
      microphones: list.filter((d) => d.kind === 'audioinput')
    };
  } catch {
    return { cameras: [], microphones: [] };
  }
}

export function formatMediaError(err) {
  const name = String(err?.name || '');
  if (name === 'NotAllowedError' || name === 'PermissionDeniedError' || name === 'SecurityError') {
    return 'Izin kamera/mikrofon ditolak browser. Klik ikon gembok di samping alamat situs, pilih "Izinkan" untuk Kamera & Mikrofon, lalu muat ulang halaman.';
  }
  if (name === 'NotFoundError' || name === 'DevicesNotFoundError') {
    return 'Kamera atau mikrofon tidak ditemukan di perangkat ini. Pastikan webcam/mic terpasang.';
  }
  if (name === 'NotReadableError' || name === 'TrackStartError') {
    return 'Kamera/mikrofon sedang dipakai aplikasi lain (Zoom, Meet, OBS, dll). Tutup aplikasi tersebut lalu coba lagi.';
  }
  if (name === 'OverconstrainedError') {
    return 'Perangkat kamera/mikrofon yang dipilih tidak tersedia. Pilih perangkat lain.';
  }
  return 'Kamera dan mikrofon belum aktif. Klik "Coba Aktifkan Kamera & Mic" atau izinkan lewat ikon gembok browser.';
}

export async function requestSingleTrack(kind, deviceId = '') {
  if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
    return { track: null, error: 'Browser tidak mendukung akses kamera dan mikrofon.' };
  }
  const constraints =
    kind === 'video'
      ? {
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            frameRate: { ideal: 24, max: 30 },
            ...(deviceId ? { deviceId: { ideal: deviceId } } : {})
          },
          audio: false
        }
      : {
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
            ...(deviceId ? { deviceId: { ideal: deviceId } } : {})
          },
          video: false
        };
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const track = kind === 'video' ? stream.getVideoTracks()[0] : stream.getAudioTracks()[0];
    return { track: track || null, error: track ? '' : formatMediaError(null) };
  } catch (err) {
    return { track: null, error: formatMediaError(err) };
  }
}

export async function acquireLocalMedia({
  video = true,
  audio = true,
  videoDeviceId = '',
  audioDeviceId = ''
} = {}) {
  if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
    return {
      stream: typeof MediaStream !== 'undefined' ? new MediaStream() : null,
      hasAudio: false,
      hasVideo: false,
      warning: 'Browser tidak mendukung akses kamera dan mikrofon.'
    };
  }

  const audioConstraint = audio
    ? {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
        ...(audioDeviceId ? { deviceId: { exact: audioDeviceId } } : {})
      }
    : false;
  const videoConstraint = video
    ? {
        width: { ideal: 1280 },
        height: { ideal: 720 },
        frameRate: { ideal: 24, max: 30 },
        ...(videoDeviceId ? { deviceId: { exact: videoDeviceId } } : {})
      }
    : false;

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: audioConstraint,
      video: videoConstraint
    });
    return {
      stream,
      hasAudio: stream.getAudioTracks().length > 0,
      hasVideo: stream.getVideoTracks().length > 0,
      warning: '',
      errorName: ''
    };
  } catch (err) {
    const errorName = String(err?.name || '');
    const isPermission = errorName === 'NotAllowedError' || errorName === 'PermissionDeniedError';
    if (audio && video && !isPermission) {
      try {
        const audioOnly = await navigator.mediaDevices.getUserMedia({
          audio: audioConstraint,
          video: false
        });
        return {
          stream: audioOnly,
          hasAudio: audioOnly.getAudioTracks().length > 0,
          hasVideo: false,
          warning: `${formatMediaError(err)} (Mikrofon tetap aktif.)`,
          errorName
        };
      } catch {
        // lanjut fallback kosong
      }
    }
    return {
      stream: new MediaStream(),
      hasAudio: false,
      hasVideo: false,
      warning: formatMediaError(err),
      errorName
    };
  }
}

export class LiveRtcSession {
  constructor({
    roomId,
    role,
    iceServers,
    localStream,
    studentUid = null,
    onRemoteStream,
    onConnectionState,
    onDataMessage,
    onDataChannelState,
    onError
  }) {
    this.roomId = roomId;
    this.role = role;
    this.iceServers = iceServers?.length ? iceServers : DEFAULT_ICE_SERVERS;
    this.localStream = localStream || new MediaStream();
    this.studentUid = studentUid;
    this.onRemoteStream = onRemoteStream || (() => {});
    this.onConnectionState = onConnectionState || (() => {});
    this.onDataMessage = onDataMessage || (() => {});
    this.onDataChannelState = onDataChannelState || (() => {});
    this.onError = onError || (() => {});

    this.pc = null;
    this.dc = null;
    this.audioSender = null;
    this.videoSender = null;
    this.cameraTrack = this.localStream.getVideoTracks()[0] || null;
    this.audioTrack = this.localStream.getAudioTracks()[0] || null;
    if (this.cameraTrack && 'contentHint' in this.cameraTrack) {
      this.cameraTrack.contentHint = 'motion';
    }
    this.screenStream = null;
    this.remoteStream = new MediaStream();

    this.destroyed = false;
    this.currentEpoch = 1;
    this.lastHandledOfferEpoch = 0;
    this.lastHandledAnswerEpoch = 0;
    this.lastStudentJoinedAt = null;
    this.pendingRemoteCandidates = [];
    this.seenCandidateIds = new Set();
    this.incomingChunks = new Map();
    this.disconnectTimer = null;
    this.iceRestartCount = 0;
    this.unsubCandidates = () => {};

    this.initPeerConnection();
  }

  initPeerConnection() {
    this.pc = new RTCPeerConnection({
      iceServers: this.iceServers,
      iceCandidatePoolSize: 8
    });

    const audioTransceiver = this.pc.addTransceiver('audio', { direction: 'sendrecv' });
    const videoTransceiver = this.pc.addTransceiver('video', { direction: 'sendrecv' });
    this.audioSender = audioTransceiver.sender;
    this.videoSender = videoTransceiver.sender;

    if (this.audioTrack) {
      this.audioSender.replaceTrack(this.audioTrack).catch(() => {});
    }
    if (this.cameraTrack) {
      this.videoSender.replaceTrack(this.cameraTrack).catch(() => {});
    }

    this.pc.ontrack = (event) => {
      const track = event.track;
      if (!track) return;
      const existing = this.remoteStream.getTracks().find((t) => t.kind === track.kind);
      if (existing && existing.id !== track.id) {
        this.remoteStream.removeTrack(existing);
      }
      if (!this.remoteStream.getTracks().some((t) => t.id === track.id)) {
        this.remoteStream.addTrack(track);
      }
      this.onRemoteStream(new MediaStream(this.remoteStream.getTracks()));
    };

    const candidateCol = this.role === 'teacher' ? 'offerCandidates' : 'answerCandidates';
    const remoteCandidateCol = this.role === 'teacher' ? 'answerCandidates' : 'offerCandidates';

    this.pc.onicecandidate = (event) => {
      if (!event.candidate || this.destroyed) return;
      addIceCandidate(this.roomId, candidateCol, event.candidate.toJSON(), this.currentEpoch).catch(
        () => {}
      );
    };

    this.unsubCandidates = subscribeIceCandidates(this.roomId, remoteCandidateCol, (cand) => {
      if (this.destroyed || !cand?.candidate) return;
      if (this.seenCandidateIds.has(cand.id)) return;
      this.seenCandidateIds.add(cand.id);
      if (Number(cand.epoch || 1) !== this.currentEpoch) return;

      const rtcCand = new RTCIceCandidate({
        candidate: cand.candidate,
        sdpMid: cand.sdpMid,
        sdpMLineIndex: cand.sdpMLineIndex
      });

      if (this.pc?.remoteDescription) {
        this.pc.addIceCandidate(rtcCand).catch(() => {});
      } else {
        this.pendingRemoteCandidates.push(rtcCand);
      }
    });

    this.pc.onconnectionstatechange = () => {
      const state = this.pc?.connectionState || 'new';
      this.onConnectionState(state);
      if (state === 'connected') {
        this.iceRestartCount = 0;
        if (this.disconnectTimer) {
          clearTimeout(this.disconnectTimer);
          this.disconnectTimer = null;
        }
      } else if (state === 'disconnected') {
        if (!this.disconnectTimer && this.role === 'teacher') {
          this.disconnectTimer = setTimeout(() => {
            this.disconnectTimer = null;
            if (!this.destroyed && this.pc?.connectionState !== 'connected') {
              this.restartIce().catch(() => {});
            }
          }, 4500);
        }
      } else if (state === 'failed' && this.role === 'teacher' && this.iceRestartCount < 3) {
        this.iceRestartCount += 1;
        this.restartIce().catch(() => {});
      }
    };

    this.pc.oniceconnectionstatechange = () => {
      const iceState = this.pc?.iceConnectionState;
      if (iceState === 'failed' && this.role === 'teacher' && this.iceRestartCount < 3) {
        this.iceRestartCount += 1;
        this.restartIce().catch(() => {});
      }
    };

    if (this.role === 'teacher') {
      const dc = this.pc.createDataChannel('classroom', { ordered: true });
      this.bindDataChannel(dc);
    } else {
      this.pc.ondatachannel = (event) => {
        if (event.channel) this.bindDataChannel(event.channel);
      };
    }
  }

  bindDataChannel(dc) {
    this.dc = dc;
    dc.onopen = () => {
      this.onDataChannelState('open');
    };
    dc.onclose = () => {
      this.onDataChannelState('closed');
    };
    dc.onerror = () => {
      this.onDataChannelState('error');
    };
    dc.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg?.__dutaChunk) {
          const { id, idx, total, data } = msg.__dutaChunk;
          const entry = this.incomingChunks.get(id) || { parts: new Array(total), received: 0 };
          if (entry.parts[idx] === undefined) {
            entry.parts[idx] = data;
            entry.received += 1;
          }
          this.incomingChunks.set(id, entry);
          if (entry.received === total) {
            this.incomingChunks.delete(id);
            const full = JSON.parse(entry.parts.join(''));
            this.onDataMessage(full);
          }
          return;
        }
        this.onDataMessage(msg);
      } catch {
        // Abaikan pesan yang tidak valid
      }
    };
  }

  async flushPendingCandidates() {
    const queue = this.pendingRemoteCandidates;
    this.pendingRemoteCandidates = [];
    for (const c of queue) {
      try {
        await this.pc.addIceCandidate(c);
      } catch {
        // Abaikan kandidat kadaluarsa
      }
    }
  }

  async startTeacherCall({ epoch = 1, iceRestart = false } = {}) {
    if (this.destroyed || this.role !== 'teacher' || !this.pc) return;
    this.currentEpoch = epoch;
    this.pendingRemoteCandidates = [];

    if (iceRestart) {
      await clearCandidates(this.roomId, 'offerCandidates');
      await clearCandidates(this.roomId, 'answerCandidates');
    }

    const offer = await this.pc.createOffer({ iceRestart });
    await this.pc.setLocalDescription(offer);

    await updateLiveRoom(this.roomId, {
      callEpoch: epoch,
      offer: {
        type: offer.type,
        sdp: offer.sdp,
        epoch
      },
      answer: null
    });
  }

  async restartIce() {
    if (this.destroyed || !this.pc) return;
    if (this.role === 'teacher') {
      const nextEpoch = this.currentEpoch + 1;
      await this.startTeacherCall({ epoch: nextEpoch, iceRestart: true });
    } else {
      await updateLiveRoom(this.roomId, {
        studentJoinedAt: new Date().toISOString()
      });
    }
  }

  async announceStudentJoined() {
    if (this.destroyed || this.role !== 'student') return;
    await updateLiveRoom(this.roomId, {
      status: 'active',
      studentUid: this.studentUid || null,
      studentJoinedAt: new Date().toISOString()
    });
  }

  async handleRoomSnapshot(room) {
    if (!room || this.destroyed || !this.pc) return;

    if (this.role === 'teacher') {
      if (room.studentJoinedAt && room.studentJoinedAt !== this.lastStudentJoinedAt) {
        const isInitial = this.lastStudentJoinedAt === null;
        this.lastStudentJoinedAt = room.studentJoinedAt;
        if (!isInitial || !room.offer) {
          const nextEpoch = Math.max(this.currentEpoch + 1, Number(room.callEpoch || 1) + 1);
          await this.startTeacherCall({ epoch: nextEpoch, iceRestart: true }).catch((err) =>
            this.onError(err?.message || 'Gagal memulai ulang koneksi.')
          );
          return;
        }
      }

      const ans = room.answer;
      if (
        ans?.sdp &&
        Number(ans.epoch || 1) === this.currentEpoch &&
        this.lastHandledAnswerEpoch !== this.currentEpoch &&
        this.pc.signalingState === 'have-local-offer'
      ) {
        this.lastHandledAnswerEpoch = this.currentEpoch;
        await this.pc.setRemoteDescription(new RTCSessionDescription({ type: ans.type, sdp: ans.sdp }));
        await this.flushPendingCandidates();
      }
      return;
    }

    // Student role
    const offer = room.offer;
    const offerEpoch = Number(offer?.epoch || 1);
    if (offer?.sdp && offerEpoch > this.lastHandledOfferEpoch) {
      this.lastHandledOfferEpoch = offerEpoch;
      this.currentEpoch = offerEpoch;
      this.pendingRemoteCandidates = [];

      await this.pc.setRemoteDescription(new RTCSessionDescription({ type: offer.type, sdp: offer.sdp }));
      await this.flushPendingCandidates();

      const answer = await this.pc.createAnswer();
      await this.pc.setLocalDescription(answer);

      await updateLiveRoom(this.roomId, {
        status: 'active',
        studentUid: this.studentUid || null,
        answer: {
          type: answer.type,
          sdp: answer.sdp,
          epoch: offerEpoch
        }
      });
    }
  }

  setMicEnabled(enabled) {
    if (this.audioTrack) {
      this.audioTrack.enabled = Boolean(enabled);
    }
    this.sendData({ type: 'media-state', micOn: Boolean(enabled) });
  }

  setCamEnabled(enabled) {
    if (this.cameraTrack) {
      this.cameraTrack.enabled = Boolean(enabled);
    }
    this.sendData({ type: 'media-state', camOn: Boolean(enabled) });
  }

  async attachTrack(track) {
    if (!track) return;
    if (track.kind === 'video') {
      if ('contentHint' in track) track.contentHint = 'motion';
      if (this.cameraTrack && this.cameraTrack !== track) {
        this.localStream.removeTrack(this.cameraTrack);
        this.cameraTrack.stop();
      }
      this.cameraTrack = track;
      if (!this.localStream.getTracks().includes(track)) this.localStream.addTrack(track);
      if (!this.screenStream && this.videoSender) {
        await this.videoSender.replaceTrack(track).catch(() => {});
      }
      this.sendData({ type: 'media-state', camOn: true });
    } else if (track.kind === 'audio') {
      if (this.audioTrack && this.audioTrack !== track) {
        this.localStream.removeTrack(this.audioTrack);
        this.audioTrack.stop();
      }
      this.audioTrack = track;
      if (!this.localStream.getTracks().includes(track)) this.localStream.addTrack(track);
      if (this.audioSender) {
        await this.audioSender.replaceTrack(track).catch(() => {});
      }
      this.sendData({ type: 'media-state', micOn: true });
    }
  }

  async switchDevice({ videoDeviceId, audioDeviceId } = {}) {
    if (videoDeviceId && navigator.mediaDevices?.getUserMedia) {
      const vStream = await navigator.mediaDevices.getUserMedia({
        video: { deviceId: { exact: videoDeviceId }, width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      const newTrack = vStream.getVideoTracks()[0];
      if (newTrack) {
        const wasEnabled = this.cameraTrack ? this.cameraTrack.enabled : true;
        newTrack.enabled = wasEnabled;
        if ('contentHint' in newTrack) newTrack.contentHint = 'motion';
        if (this.cameraTrack) {
          this.localStream.removeTrack(this.cameraTrack);
          this.cameraTrack.stop();
        }
        this.cameraTrack = newTrack;
        this.localStream.addTrack(newTrack);
        if (!this.screenStream && this.videoSender) {
          await this.videoSender.replaceTrack(newTrack);
        }
      }
    }

    if (audioDeviceId && navigator.mediaDevices?.getUserMedia) {
      const aStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          deviceId: { exact: audioDeviceId },
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });
      const newAudio = aStream.getAudioTracks()[0];
      if (newAudio) {
        const wasEnabled = this.audioTrack ? this.audioTrack.enabled : true;
        newAudio.enabled = wasEnabled;
        if (this.audioTrack) {
          this.localStream.removeTrack(this.audioTrack);
          this.audioTrack.stop();
        }
        this.audioTrack = newAudio;
        this.localStream.addTrack(newAudio);
        if (this.audioSender) {
          await this.audioSender.replaceTrack(newAudio);
        }
      }
    }

    return this.localStream;
  }

  async startScreenShare(onEndedCallback) {
    if (!navigator.mediaDevices?.getDisplayMedia) {
      throw new Error('Perangkat atau browser ini belum mendukung berbagi layar.');
    }
    const screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: { cursor: 'always' },
      audio: false
    });
    const screenTrack = screenStream.getVideoTracks()[0];
    if (!screenTrack) {
      throw new Error('Tidak ada layar yang dipilih.');
    }
    if ('contentHint' in screenTrack) {
      screenTrack.contentHint = 'detail';
    }
    this.screenStream = screenStream;
    if (this.videoSender) {
      await this.videoSender.replaceTrack(screenTrack);
    }
    screenTrack.onended = () => {
      this.stopScreenShare().finally(() => {
        if (onEndedCallback) onEndedCallback();
      });
    };
    this.sendData({ type: 'media-state', screenSharing: true });
    return screenStream;
  }

  async stopScreenShare() {
    if (this.screenStream) {
      this.screenStream.getTracks().forEach((t) => t.stop());
      this.screenStream = null;
    }
    if (this.videoSender) {
      await this.videoSender.replaceTrack(this.cameraTrack || null).catch(() => {});
    }
    this.sendData({ type: 'media-state', screenSharing: false });
  }

  sendData(payload) {
    if (!this.dc || this.dc.readyState !== 'open') return false;
    try {
      const encoded = JSON.stringify(payload);
      if (encoded.length <= DATA_CHUNK_MAX_CHARS) {
        this.dc.send(encoded);
        return true;
      }
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const total = Math.ceil(encoded.length / DATA_CHUNK_MAX_CHARS);
      for (let idx = 0; idx < total; idx++) {
        const chunk = encoded.slice(idx * DATA_CHUNK_MAX_CHARS, (idx + 1) * DATA_CHUNK_MAX_CHARS);
        this.dc.send(JSON.stringify({ __dutaChunk: { id, idx, total, data: chunk } }));
      }
      return true;
    } catch {
      return false;
    }
  }

  destroy() {
    this.destroyed = true;
    if (this.disconnectTimer) {
      clearTimeout(this.disconnectTimer);
      this.disconnectTimer = null;
    }
    this.unsubCandidates();
    if (this.screenStream) {
      this.screenStream.getTracks().forEach((t) => t.stop());
      this.screenStream = null;
    }
    if (this.dc) {
      try {
        this.dc.close();
      } catch {
        // ignore
      }
      this.dc = null;
    }
    if (this.pc) {
      try {
        this.pc.close();
      } catch {
        // ignore
      }
      this.pc = null;
    }
  }
}
