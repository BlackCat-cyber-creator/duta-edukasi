import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  MonitorUp,
  MonitorOff,
  BookOpen,
  PenTool,
  LayoutGrid,
  Copy,
  Check,
  MessageCircle,
  PhoneCall,
  RefreshCw,
  Settings,
  PhoneOff,
  PanelRightClose,
  PanelRightOpen,
  Send,
  Loader2,
  ShieldAlert,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import {
  buildRoomUrl,
  buildWhatsappInviteUrl,
  formatCallDuration,
  isLiveTeacherEmail,
  normalizeEmail,
  sanitizeLivePath
} from '../../utils/liveConfig';
import {
  endLiveRoom,
  ringLiveRoom,
  subscribeLiveRoom,
  updateLiveRoom
} from '../../firebase/liveRooms';
import {
  LiveRtcSession,
  acquireLocalMedia,
  enumerateMediaDevices,
  fetchIceConfiguration,
  requestSingleTrack
} from '../../utils/liveRtc';
import { LiveWhiteboard } from './LiveWhiteboard';
import { LiveSoalPanel } from './LiveSoalPanel';
import '../../styles/13-live-classroom.css';

const ROOM_META = {
  title: 'Sesi Kelas Privat | Duta e-dukasi',
  description: 'Sesi bimbingan daring privat 1-on-1 Duta e-dukasi.',
  path: '',
  noindex: true
};

function RoomLoginCard({ auth }) {
  const [tab, setTab] = useState('login');
  const [name, setName] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const handleGoogle = async () => {
    setError('');
    setBusy(true);
    const res = await auth.loginGoogle();
    setBusy(false);
    if (!res.success) setError(res.error || 'Gagal masuk dengan Google.');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    const res =
      tab === 'login'
        ? await auth.login(emailInput, passInput)
        : await auth.register(emailInput, passInput, name || emailInput.split('@')[0]);
    setBusy(false);
    if (!res.success) setError(res.error || 'Gagal masuk.');
  };

  return (
    <div className="live-lobby-shell" style={{ maxWidth: 480 }}>
      <section className="info-card">
        <h1 style={{ fontSize: '1.35rem', marginBottom: '0.35rem' }}>Masuk ke Sesi Kelas Privat</h1>
        <p style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>
          Gunakan akun Google atau email yang didaftarkan oleh pengajar Anda untuk bergabung.
        </p>

        <button type="button" className="btn-google-signin" onClick={handleGoogle} disabled={busy}>
          <span>Lanjutkan dengan Google</span>
        </button>

        <div className="account-divider">
          <span>atau gunakan email</span>
        </div>

        <div className="nav-pill-group" role="tablist" style={{ marginBottom: '0.9rem' }}>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'login'}
            className={`nav-pill ${tab === 'login' ? 'active' : ''}`}
            onClick={() => {
              setTab('login');
              setError('');
            }}
          >
            Masuk
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'register'}
            className={`nav-pill ${tab === 'register' ? 'active' : ''}`}
            onClick={() => {
              setTab('register');
              setError('');
            }}
          >
            Daftar Baru
          </button>
        </div>

        <form onSubmit={handleSubmit} className="account-form">
          {tab === 'register' && (
            <label className="account-field">
              <span>Nama Lengkap</span>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama Anda" />
            </label>
          )}
          <label className="account-field">
            <span>Email</span>
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="nama@email.com"
            />
          </label>
          <label className="account-field">
            <span>Kata Sandi</span>
            <input
              type="password"
              required
              minLength={6}
              value={passInput}
              onChange={(e) => setPassInput(e.target.value)}
              placeholder="Minimal 6 karakter"
            />
          </label>
          {error && <p className="account-error">{error}</p>}
          <button type="submit" className="btn btn-royal" disabled={busy} style={{ width: '100%', justifyContent: 'center' }}>
            {busy ? 'Memproses...' : tab === 'login' ? 'Masuk & Buka Kelas' : 'Daftar & Buka Kelas'}
          </button>
        </form>
      </section>
    </div>
  );
}

export function LiveClassroomRoom() {
  useDocumentMeta(ROOM_META);
  const { roomId } = useParams();
  const navigate = useNavigate();
  const auth = useAuth();

  const [room, setRoom] = useState(null);
  const [loadedRoomKey, setLoadedRoomKey] = useState('');
  const [roomError, setRoomError] = useState('');

  const [joined, setJoined] = useState(false);
  const [joining, setJoining] = useState(false);
  const [mediaWarning, setMediaWarning] = useState('');
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);

  const [devices, setDevices] = useState({ cameras: [], microphones: [] });
  const [selectedCamId, setSelectedCamId] = useState('');
  const [selectedMicId, setSelectedMicId] = useState('');
  const [showDevices, setShowDevices] = useState(false);

  const [iceProvider, setIceProvider] = useState('stun-only');
  const [connState, setConnState] = useState('new');
  const [dcOpen, setDcOpen] = useState(false);
  const [remoteMedia, setRemoteMedia] = useState({ micOn: true, camOn: true, screenSharing: false });

  const [workspaceMode, setWorkspaceMode] = useState('soal'); // 'soal' | 'whiteboard' | 'video'
  const [soalPath, setSoalPath] = useState('/paket-soal');
  const [allowStudentDraw, setAllowStudentDraw] = useState(true);
  const [dockCollapsed, setDockCollapsed] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showTeacherExitMenu, setShowTeacherExitMenu] = useState(false);

  const [elapsedSec, setElapsedSec] = useState(0);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');

  const localStreamRef = useRef(null);
  const screenStreamRef = useRef(null);
  const remoteStreamRef = useRef(null);
  const sessionRef = useRef(null);
  const roomRef = useRef(null);

  const prejoinVideoRef = useRef(null);
  const dockLocalVideoRef = useRef(null);
  const dockRemoteVideoRef = useRef(null);
  const stageRemoteVideoRef = useRef(null);
  const stagePipVideoRef = useRef(null);

  const whiteboardRef = useRef(null);
  const soalRef = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    roomRef.current = room;
  }, [room]);

  const roomLoading = Boolean(auth.isAuthenticated && roomId && loadedRoomKey !== roomId);

  const isTeacher = Boolean(
    auth.isAuthenticated &&
      room &&
      (normalizeEmail(auth.email) === normalizeEmail(room.teacherEmail) || isLiveTeacherEmail(auth.email))
  );
  const isInvitedStudent = Boolean(
    auth.isAuthenticated && room && normalizeEmail(auth.email) === normalizeEmail(room.studentEmail)
  );
  const isAuthorized = Boolean(room && (isTeacher || isInvitedStudent));

  // Subscribe dokumen room di Firestore
  useEffect(() => {
    if (!auth.isAuthenticated || !roomId) {
      return undefined;
    }
    const unsub = subscribeLiveRoom(
      roomId,
      (docData) => {
        setLoadedRoomKey(roomId);
        setRoomError('');
        setRoom(docData);
        if (docData?.sharedPath && !joined) {
          setSoalPath(sanitizeLivePath(docData.sharedPath, '/paket-soal'));
        }
        if (typeof docData?.allowStudentDraw === 'boolean') {
          setAllowStudentDraw(docData.allowStudentDraw);
        }
        if (sessionRef.current && docData) {
          sessionRef.current.handleRoomSnapshot(docData).catch(() => {});
        }
      },
      (err) => {
        setLoadedRoomKey(roomId);
        setRoomError(
          err?.code === 'permission-denied'
            ? 'Akun Anda tidak memiliki akses ke ruang kelas ini.'
            : 'Gagal memuat ruang kelas.'
        );
      }
    );
    return () => unsub();
  }, [auth.isAuthenticated, roomId, joined]);

  // Siapkan preview kamera & daftar perangkat sebelum masuk
  useEffect(() => {
    if (!isAuthorized || room?.status === 'ended' || joined) return undefined;
    let cancelled = false;

    acquireLocalMedia({ video: true, audio: true }).then(async ({ stream, hasAudio, hasVideo, warning }) => {
      if (cancelled) {
        stream?.getTracks().forEach((t) => t.stop());
        return;
      }
      localStreamRef.current = stream;
      setMicOn(hasAudio);
      setCamOn(hasVideo);
      if (warning) setMediaWarning(warning);
      if (prejoinVideoRef.current) {
        prejoinVideoRef.current.srcObject = stream;
        prejoinVideoRef.current.play?.()?.catch?.(() => {});
      }
      const devList = await enumerateMediaDevices();
      if (!cancelled) {
        setDevices(devList);
        const vTrack = stream?.getVideoTracks()[0];
        const aTrack = stream?.getAudioTracks()[0];
        if (vTrack?.getSettings()?.deviceId) setSelectedCamId(vTrack.getSettings().deviceId);
        if (aTrack?.getSettings()?.deviceId) setSelectedMicId(aTrack.getSettings().deviceId);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [isAuthorized, room?.status, joined]);

  // Sinkronkan srcObject video ke elemen aktif setiap ganti layout/mode
  const attachStreams = useCallback(() => {
    const localDisplay = screenStreamRef.current || localStreamRef.current;
    const remote = remoteStreamRef.current;

    if (dockLocalVideoRef.current && dockLocalVideoRef.current.srcObject !== localDisplay) {
      dockLocalVideoRef.current.srcObject = localDisplay || null;
    }
    if (stagePipVideoRef.current && stagePipVideoRef.current.srcObject !== localDisplay) {
      stagePipVideoRef.current.srcObject = localDisplay || null;
    }
    if (dockRemoteVideoRef.current && dockRemoteVideoRef.current.srcObject !== remote) {
      dockRemoteVideoRef.current.srcObject = remote || null;
    }
    if (stageRemoteVideoRef.current && stageRemoteVideoRef.current.srcObject !== remote) {
      stageRemoteVideoRef.current.srcObject = remote || null;
    }
  }, []);

  useEffect(() => {
    if (joined) attachStreams();
  }, [joined, workspaceMode, dockCollapsed, screenSharing, attachStreams]);

  // Timer durasi sesi
  useEffect(() => {
    if (!joined) return undefined;
    const id = setInterval(() => {
      setElapsedSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [joined]);

  // Screen Wake Lock agar layar tablet/HP murid tidak mati saat belajar 90-120 menit
  useEffect(() => {
    if (!joined || typeof navigator === 'undefined' || !navigator.wakeLock?.request) return undefined;
    let sentinel = null;
    let active = true;

    const acquireLock = async () => {
      try {
        if (active && document.visibilityState === 'visible') {
          sentinel = await navigator.wakeLock.request('screen');
        }
      } catch {
        // Abaikan jika browser menolak wake lock
      }
    };

    acquireLock();
    const onVis = () => {
      if (document.visibilityState === 'visible') acquireLock();
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      active = false;
      document.removeEventListener('visibilitychange', onVis);
      if (sentinel) {
        sentinel.release().catch(() => {});
      }
    };
  }, [joined]);

  // Bersihkan seluruh media & sesi saat keluar halaman
  useEffect(() => {
    return () => {
      sessionRef.current?.destroy();
      sessionRef.current = null;
      screenStreamRef.current?.getTracks().forEach((t) => t.stop());
      localStreamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const sendData = useCallback((payload) => {
    return sessionRef.current?.sendData(payload) || false;
  }, []);

  const handleJoinCall = async () => {
    if (!room || joining) return;
    setJoining(true);
    try {
      let localStream = localStreamRef.current;
      if (!localStream) {
        const res = await acquireLocalMedia({ video: camOn, audio: micOn });
        localStream = res.stream;
        localStreamRef.current = localStream;
        if (res.warning) setMediaWarning(res.warning);
      }

      localStream?.getAudioTracks().forEach((t) => {
        t.enabled = micOn;
      });
      localStream?.getVideoTracks().forEach((t) => {
        t.enabled = camOn;
      });

      const iceConfig = await fetchIceConfiguration(auth.getIdToken);
      setIceProvider(iceConfig.provider);

      const session = new LiveRtcSession({
        roomId: room.id,
        role: isTeacher ? 'teacher' : 'student',
        iceServers: iceConfig.iceServers,
        localStream,
        studentUid: auth.uid,
        onRemoteStream: (stream) => {
          remoteStreamRef.current = stream;
          attachStreams();
        },
        onConnectionState: (state) => {
          setConnState(state);
        },
        onDataChannelState: (state) => {
          const open = state === 'open';
          setDcOpen(open);
          if (open) {
            session.sendData({ type: 'media-state', micOn, camOn, screenSharing });
            if (isTeacher) {
              session.sendData({ type: 'wb-permission', allowStudentDraw });
              whiteboardRef.current?.sendFullSync();
            } else {
              session.sendData({ type: 'wb-sync-request' });
            }
          }
        },
        onDataMessage: (msg) => {
          if (!msg || typeof msg !== 'object') return;
          if (msg.type === 'mode-change' && ['soal', 'whiteboard', 'video'].includes(msg.mode)) {
            setWorkspaceMode(msg.mode);
            return;
          }
          if (msg.type === 'wb-permission') {
            setAllowStudentDraw(Boolean(msg.allowStudentDraw));
            return;
          }
          if (msg.type === 'media-state') {
            setRemoteMedia((prev) => ({
              micOn: typeof msg.micOn === 'boolean' ? msg.micOn : prev.micOn,
              camOn: typeof msg.camOn === 'boolean' ? msg.camOn : prev.camOn,
              screenSharing:
                typeof msg.screenSharing === 'boolean' ? msg.screenSharing : prev.screenSharing
            }));
            if (msg.screenSharing === true) {
              setWorkspaceMode('video');
            }
            return;
          }
          if (msg.type === 'chat' && msg.text) {
            setChatMessages((prev) => [...prev.slice(-80), msg]);
            return;
          }
          if (msg.type?.startsWith('wb-')) {
            whiteboardRef.current?.handleRemoteMessage(msg);
            return;
          }
          if (msg.type?.startsWith('soal-')) {
            soalRef.current?.handleRemoteMessage(msg);
          }
        },
        onError: (errMsg) => setMediaWarning(errMsg)
      });

      sessionRef.current = session;
      setJoined(true);

      if (isTeacher) {
        const epoch = Math.max(1, Number(room.callEpoch || 1));
        await session.startTeacherCall({ epoch });
      } else {
        await session.announceStudentJoined();
      }
      if (roomRef.current?.offer && !isTeacher) {
        await session.handleRoomSnapshot(roomRef.current);
      }
    } catch (err) {
      setMediaWarning(err?.message || 'Gagal memulai koneksi panggilan.');
    } finally {
      setJoining(false);
    }
  };

  const bindPrejoinPreview = useCallback((stream) => {
    const el = prejoinVideoRef.current;
    if (!el) return;
    el.srcObject = stream || null;
    el.play?.()?.catch?.(() => {});
  }, []);

  const retryAcquireMedia = useCallback(async () => {
    localStreamRef.current?.getTracks().forEach((t) => t.stop());
    const res = await acquireLocalMedia({ video: true, audio: true });
    localStreamRef.current = res.stream;
    setMicOn(res.hasAudio);
    setCamOn(res.hasVideo);
    setMediaWarning(res.warning || '');
    if (sessionRef.current && res.stream) {
      for (const t of res.stream.getTracks()) {
        await sessionRef.current.attachTrack(t);
      }
      attachStreams();
    } else {
      bindPrejoinPreview(res.stream);
    }
    const devList = await enumerateMediaDevices();
    setDevices(devList);
  }, [attachStreams, bindPrejoinPreview]);

  const ensureTrack = useCallback(
    async (kind) => {
      const stream = localStreamRef.current;
      const existing =
        kind === 'video' ? stream?.getVideoTracks?.()[0] : stream?.getAudioTracks?.()[0];
      if (existing && existing.readyState === 'live') return existing;

      const { track, error } = await requestSingleTrack(
        kind,
        kind === 'video' ? selectedCamId : selectedMicId
      );
      if (!track) {
        setMediaWarning(error);
        return null;
      }
      let target = localStreamRef.current;
      if (!target) {
        target = new MediaStream();
        localStreamRef.current = target;
      }
      if (existing) target.removeTrack(existing);
      target.addTrack(track);
      if (sessionRef.current) {
        await sessionRef.current.attachTrack(track);
        attachStreams();
      } else {
        bindPrejoinPreview(target);
      }
      setMediaWarning('');
      enumerateMediaDevices().then(setDevices).catch(() => {});
      return track;
    },
    [selectedCamId, selectedMicId, attachStreams, bindPrejoinPreview]
  );

  const toggleMic = useCallback(async () => {
    const next = !micOn;
    if (next) {
      const track = await ensureTrack('audio');
      if (!track) {
        setMicOn(false);
        return;
      }
      track.enabled = true;
    }
    setMicOn(next);
    if (sessionRef.current) {
      sessionRef.current.setMicEnabled(next);
    } else {
      localStreamRef.current?.getAudioTracks().forEach((t) => {
        t.enabled = next;
      });
    }
  }, [micOn, ensureTrack]);

  const toggleCam = useCallback(async () => {
    const next = !camOn;
    if (next) {
      const track = await ensureTrack('video');
      if (!track) {
        setCamOn(false);
        return;
      }
      track.enabled = true;
    }
    setCamOn(next);
    if (sessionRef.current) {
      sessionRef.current.setCamEnabled(next);
    } else {
      localStreamRef.current?.getVideoTracks().forEach((t) => {
        t.enabled = next;
      });
    }
  }, [camOn, ensureTrack]);

  const toggleScreenShare = async () => {
    const session = sessionRef.current;
    if (!session) return;
    if (screenSharing) {
      await session.stopScreenShare();
      screenStreamRef.current = null;
      setScreenSharing(false);
      attachStreams();
      return;
    }
    try {
      const sStream = await session.startScreenShare(() => {
        screenStreamRef.current = null;
        setScreenSharing(false);
        attachStreams();
      });
      screenStreamRef.current = sStream;
      setScreenSharing(true);
      setWorkspaceMode('video');
      sendData({ type: 'mode-change', mode: 'video' });
      attachStreams();
    } catch (err) {
      setMediaWarning(err?.message || 'Berbagi layar dibatalkan.');
    }
  };

  // Pintasan keyboard Zoom: M (Mic), V (Kamera)
  useEffect(() => {
    if (!joined) return undefined;
    const onKeyDown = (e) => {
      const tag = e.target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (e.key === 'm' || e.key === 'M') toggleMic();
      if (e.key === 'v' || e.key === 'V') toggleCam();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [joined, toggleMic, toggleCam]);

  const handleModeSwitch = (mode) => {
    setWorkspaceMode(mode);
    sendData({ type: 'mode-change', mode });
  };

  const handleToggleStudentDraw = () => {
    const next = !allowStudentDraw;
    setAllowStudentDraw(next);
    sendData({ type: 'wb-permission', allowStudentDraw: next });
    if (room?.id && isTeacher) {
      updateLiveRoom(room.id, { allowStudentDraw: next }).catch(() => {});
    }
  };

  const handleSoalPathChange = (nextPath) => {
    setSoalPath(nextPath);
    if (room?.id) {
      updateLiveRoom(room.id, { sharedPath: nextPath }).catch(() => {});
    }
  };

  const handleDeviceChange = async ({ videoDeviceId, audioDeviceId }) => {
    try {
      if (sessionRef.current) {
        await sessionRef.current.switchDevice({ videoDeviceId, audioDeviceId });
      } else {
        localStreamRef.current?.getTracks().forEach((t) => t.stop());
        const res = await acquireLocalMedia({
          video: true,
          audio: true,
          videoDeviceId: videoDeviceId || selectedCamId,
          audioDeviceId: audioDeviceId || selectedMicId
        });
        localStreamRef.current = res.stream;
        bindPrejoinPreview(res.stream);
      }
      if (videoDeviceId) setSelectedCamId(videoDeviceId);
      if (audioDeviceId) setSelectedMicId(audioDeviceId);
      attachStreams();
    } catch {
      setMediaWarning('Gagal mengganti perangkat kamera/mikrofon.');
    }
  };

  const handleCopyRoomLink = async () => {
    const url = buildRoomUrl(roomId);
    try {
      await navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      window.prompt('Salin link kelas privat:', url);
    }
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    const text = chatInput.trim();
    if (!text) return;
    const msg = {
      type: 'chat',
      id: `${Date.now()}`,
      senderEmail: auth.email,
      senderName: auth.displayName || (isTeacher ? 'Pengajar' : 'Murid'),
      text,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };
    setChatMessages((prev) => [...prev.slice(-80), msg]);
    sendData(msg);
    setChatInput('');
  };

  const handleLeaveTemporary = () => {
    sessionRef.current?.destroy();
    sessionRef.current = null;
    screenStreamRef.current?.getTracks().forEach((t) => t.stop());
    localStreamRef.current?.getTracks().forEach((t) => t.stop());
    navigate(isTeacher ? '/kelas' : '/');
  };

  const handleEndForAll = async () => {
    sessionRef.current?.destroy();
    sessionRef.current = null;
    screenStreamRef.current?.getTracks().forEach((t) => t.stop());
    localStreamRef.current?.getTracks().forEach((t) => t.stop());
    if (room?.id) {
      await endLiveRoom(room.id).catch(() => {});
    }
    navigate('/kelas');
  };

  if (auth.isLoading || roomLoading) {
    return (
      <div className="live-lobby-shell">
        <div className="route-fallback" role="status" style={{ minHeight: '50vh' }}>
          <Loader2 size={32} className="spinner route-fallback-icon" />
          <span>Menyiapkan ruang kelas privat...</span>
        </div>
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return <RoomLoginCard auth={auth} />;
  }

  if (roomError || !room || !isAuthorized) {
    return (
      <div className="live-lobby-shell" style={{ maxWidth: 540 }}>
        <section className="info-card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
          <ShieldAlert size={36} style={{ color: 'var(--status-brick)', marginBottom: '0.6rem' }} />
          <h1 style={{ fontSize: '1.3rem', marginBottom: '0.45rem' }}>Akses Ruang Kelas Ditolak</h1>
          <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
            {roomError ||
              `Email Anda (${auth.email}) tidak terdaftar pada undangan sesi kelas ini, atau ruang kelas sudah dihapus.`}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-royal" onClick={auth.logout}>
              <LogOut size={14} /> Ganti Akun Email
            </button>
            <Link to="/" className="btn btn-outline">
              Ke Portal Utama
            </Link>
          </div>
        </section>
      </div>
    );
  }

  if (room.status === 'ended') {
    return (
      <div className="live-lobby-shell" style={{ maxWidth: 540 }}>
        <section className="info-card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
          <h1 style={{ fontSize: '1.35rem', marginBottom: '0.45rem' }}>Sesi Kelas Telah Berakhir</h1>
          <p style={{ fontSize: '0.9rem', marginBottom: '1.1rem' }}>
            {room.topic ? `Topik: ${room.topic}. ` : ''}Terima kasih telah mengikuti sesi belajar bersama Duta e-dukasi.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            {isTeacher ? (
              <Link to="/kelas" className="btn btn-royal">
                Kembali ke Daftar Kelas
              </Link>
            ) : (
              <Link to="/paket-soal" className="btn btn-royal">
                Lanjut Latihan Paket Soal
              </Link>
            )}
            <Link to="/" className="btn btn-outline">
              Beranda
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const roomUrl = buildRoomUrl(room.id);
  const waInviteUrl = buildWhatsappInviteUrl({
    roomUrl,
    studentName: room.studentName,
    studentEmail: room.studentEmail,
    topic: room.topic
  });
  const counterpartLabel = isTeacher
    ? room.studentName || room.studentEmail
    : room.teacherName || 'Pengajar Duta e-dukasi';

  // Layar Persiapan (Pre-Join)
  if (!joined) {
    return (
      <div className="live-prejoin-shell">
        <div className="live-prejoin-card">
          <div>
            <div className="live-prejoin-preview">
              <video ref={prejoinVideoRef} autoPlay playsInline muted className="live-mirrored" />
              {!camOn && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#CBD5E1',
                    fontSize: '0.88rem'
                  }}
                >
                  Kamera dimatikan
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '0.75rem' }}>
              <button
                type="button"
                className={`live-ctrl-btn ${!micOn ? 'is-off' : ''}`}
                onClick={toggleMic}
              >
                {micOn ? <Mic size={15} /> : <MicOff size={15} />}
                <span>{micOn ? 'Mic Nyala' : 'Mic Mati'}</span>
              </button>
              <button
                type="button"
                className={`live-ctrl-btn ${!camOn ? 'is-off' : ''}`}
                onClick={toggleCam}
              >
                {camOn ? <Video size={15} /> : <VideoOff size={15} />}
                <span>{camOn ? 'Kamera Nyala' : 'Kamera Mati'}</span>
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div>
              <span className="live-status-pill is-active">Ruang Kelas Privat 1-on-1</span>
              <h1 style={{ fontSize: '1.35rem', marginTop: '0.45rem', marginBottom: '0.2rem' }}>
                {room.topic || 'Sesi Bimbingan Online'}
              </h1>
              <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                {isTeacher ? `Murid: ${room.studentName || room.studentEmail}` : `Pengajar: ${counterpartLabel}`}
              </p>
            </div>

            {mediaWarning && (
              <div style={{ margin: 0, fontSize: '0.8rem', color: '#B45309', background: '#FFFBEB', padding: '0.5rem 0.65rem', borderRadius: '8px', border: '1px solid #FDE68A', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                <span>{mediaWarning}</span>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={retryAcquireMedia}
                  style={{ alignSelf: 'flex-start', fontSize: '0.78rem', padding: '0.3rem 0.65rem' }}
                >
                  <RefreshCw size={13} /> Coba Aktifkan Kamera &amp; Mic
                </button>
              </div>
            )}

            <button
              type="button"
              className="btn btn-royal"
              onClick={handleJoinCall}
              disabled={joining}
              style={{ width: '100%', justifyContent: 'center', padding: '0.7rem 1rem' }}
            >
              <Video size={16} />
              <span>{joining ? 'Menghubungkan...' : 'Gabung ke Kelas Sekarang'}</span>
            </button>

            {isTeacher && (
              <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                <button type="button" className="btn btn-outline" onClick={handleCopyRoomLink} style={{ flex: 1, justifyContent: 'center', fontSize: '0.8rem' }}>
                  {copiedLink ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedLink ? 'Tersalin' : 'Salin Link'}</span>
                </button>
                <a
                  href={waInviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.8rem', textDecoration: 'none' }}
                >
                  <MessageCircle size={14} />
                  <span>Kirim WA</span>
                </a>
              </div>
            )}

            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Masuk sebagai <strong>{auth.email}</strong> ·{' '}
              <Link to={isTeacher ? '/kelas' : '/'}>Kembali</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const connLabel =
    connState === 'connected'
      ? `Terhubung · ${iceProvider === 'stun-only' ? 'P2P' : 'TURN'}`
      : connState === 'connecting'
        ? 'Menghubungkan...'
        : connState === 'failed' || connState === 'disconnected'
          ? 'Koneksi terganggu'
          : isTeacher
            ? 'Menunggu murid...'
            : 'Menyambung...';

  const connClass =
    connState === 'connected'
      ? 'is-connected'
      : connState === 'failed' || connState === 'disconnected'
        ? 'is-failed'
        : '';

  return (
    <div className="live-studio">
      {/* Top Bar */}
      <header className="live-topbar">
        <div className="live-topbar-brand">
          <div className="live-topbar-title">
            <strong>{room.topic || 'Duta Live · Kelas 1-on-1'}</strong>
            <span>{counterpartLabel}</span>
          </div>
          <span className={`live-conn-badge ${connClass}`}>
            <span className="live-conn-dot" />
            {connLabel}
          </span>
          <span className={`live-timer-badge ${elapsedSec >= 5400 ? 'is-long' : ''}`} title="Durasi sesi berjalan">
            {formatCallDuration(elapsedSec)}
          </span>
        </div>

        <div className="live-mode-tabs" role="tablist" aria-label="Mode area kerja">
          <button
            type="button"
            role="tab"
            aria-selected={workspaceMode === 'soal'}
            className={`live-mode-tab ${workspaceMode === 'soal' ? 'active' : ''}`}
            onClick={() => handleModeSwitch('soal')}
          >
            <BookOpen size={14} />
            <span>Soal &amp; Materi</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={workspaceMode === 'whiteboard'}
            className={`live-mode-tab ${workspaceMode === 'whiteboard' ? 'active' : ''}`}
            onClick={() => handleModeSwitch('whiteboard')}
          >
            <PenTool size={14} />
            <span>Whiteboard</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={workspaceMode === 'video'}
            className={`live-mode-tab ${workspaceMode === 'video' ? 'active' : ''}`}
            onClick={() => handleModeSwitch('video')}
          >
            <LayoutGrid size={14} />
            <span>Video &amp; Layar</span>
          </button>
        </div>

        <div className="live-topbar-right">
          {isTeacher && (
            <>
              <button type="button" className="live-top-btn" onClick={handleCopyRoomLink}>
                {copiedLink ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedLink ? 'Tersalin' : 'Link'}</span>
              </button>
              <a href={waInviteUrl} target="_blank" rel="noopener noreferrer" className="live-top-btn">
                <MessageCircle size={13} />
                <span>WA</span>
              </a>
              <button
                type="button"
                className="live-top-btn"
                onClick={() => ringLiveRoom(room.id)}
                title="Kirim dering panggilan ulang ke layar murid"
              >
                <PhoneCall size={13} />
                <span>Panggil</span>
              </button>
            </>
          )}
          <button
            type="button"
            className="live-top-btn"
            onClick={() => setDockCollapsed((c) => !c)}
            title={dockCollapsed ? 'Tampilkan panel kamera & chat' : 'Sembunyikan panel kamera agar papan lebih luas'}
          >
            {dockCollapsed ? <PanelRightOpen size={14} /> : <PanelRightClose size={14} />}
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="live-body">
        <section className={`live-stage ${workspaceMode === 'video' ? 'is-video-mode' : ''}`}>
          {/* Panel Soal (tetap ter-mount agar jawaban & scroll tidak hilang saat pindah ke whiteboard) */}
          <div className={`live-stage-pane ${workspaceMode === 'soal' ? '' : 'is-hidden'}`}>
            <LiveSoalPanel
              ref={soalRef}
              currentPath={soalPath}
              onPathChange={handleSoalPathChange}
              onSendData={sendData}
            />
          </div>

          {/* Panel Whiteboard */}
          <div className={`live-stage-pane ${workspaceMode === 'whiteboard' ? '' : 'is-hidden'}`}>
            <LiveWhiteboard
              ref={whiteboardRef}
              role={isTeacher ? 'teacher' : 'student'}
              allowStudentDraw={allowStudentDraw}
              onToggleStudentDraw={handleToggleStudentDraw}
              onSendData={sendData}
            />
          </div>

          {/* Panel Video & Screen Share Besar */}
          {workspaceMode === 'video' && (
            <div className="live-video-stage">
              <video ref={stageRemoteVideoRef} autoPlay playsInline className="live-video-main" />
              {connState !== 'connected' && (
                <div className="live-video-placeholder" style={{ position: 'absolute' }}>
                  <Video size={36} />
                  <span>Menunggu video / screen share dari {counterpartLabel}...</span>
                </div>
              )}
              <div className="live-video-pip">
                <video
                  ref={stagePipVideoRef}
                  autoPlay
                  playsInline
                  muted
                  className={screenSharing ? '' : 'live-mirrored'}
                />
                <span className="live-video-card-label">
                  {screenSharing ? 'Layar Anda' : 'Anda'}
                </span>
              </div>
            </div>
          )}
        </section>

        {/* Side Dock: Video 1-on-1 + Quick Chat */}
        <aside className={`live-dock ${dockCollapsed ? 'is-collapsed' : ''}`}>
          {workspaceMode !== 'video' && (
            <>
              <div className="live-video-card" onClick={() => handleModeSwitch('video')} style={{ cursor: 'pointer' }} title="Klik untuk perbesar video/layar">
                <video ref={dockRemoteVideoRef} autoPlay playsInline />
                <span className="live-video-card-label">
                  {remoteMedia.micOn ? <Mic size={11} /> : <MicOff size={11} style={{ color: '#F87171' }} />}
                  <span>{counterpartLabel}</span>
                </span>
              </div>
              <div className="live-video-card">
                <video
                  ref={dockLocalVideoRef}
                  autoPlay
                  playsInline
                  muted
                  className={screenSharing ? '' : 'live-mirrored'}
                />
                <span className="live-video-card-label">
                  {micOn ? <Mic size={11} /> : <MicOff size={11} style={{ color: '#F87171' }} />}
                  <span>{screenSharing ? 'Berbagi Layar' : 'Anda'}</span>
                </span>
              </div>
            </>
          )}

          <div className="live-chat-box">
            <div className="live-chat-header">
              <span>Catatan &amp; Chat Sesi</span>
              <span style={{ fontSize: '0.68rem', color: dcOpen ? '#4ADE80' : '#94A3B8' }}>
                {dcOpen ? 'Sinkron Aktif' : 'Menunggu'}
              </span>
            </div>
            <div className="live-chat-messages">
              {chatMessages.length === 0 ? (
                <span style={{ fontSize: '0.74rem', color: '#64748B' }}>
                  Kirim link soal, rumus, atau pesan singkat di sini.
                </span>
              ) : (
                chatMessages.map((m) => {
                  const mine = normalizeEmail(m.senderEmail) === normalizeEmail(auth.email);
                  return (
                    <div key={m.id} className={`live-chat-msg ${mine ? 'is-mine' : ''}`}>
                      <small>
                        {m.senderName} · {m.time}
                      </small>
                      {m.text}
                    </div>
                  );
                })
              )}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleSendChat} className="live-chat-form">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ketik pesan..."
              />
              <button type="submit" className="live-top-btn" aria-label="Kirim pesan">
                <Send size={13} />
              </button>
            </form>
          </div>
        </aside>
      </div>

      {/* Popover Pemilihan Kamera/Mic */}
      {showDevices && (
        <div className="live-device-popover">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong style={{ fontSize: '0.88rem' }}>Pengaturan Perangkat</strong>
            <button type="button" className="live-top-btn" onClick={() => setShowDevices(false)}>
              Tutup
            </button>
          </div>
          <label>
            <span>Mikrofon</span>
            <select
              value={selectedMicId}
              onChange={(e) => handleDeviceChange({ audioDeviceId: e.target.value })}
            >
              {devices.microphones.map((d, i) => (
                <option key={d.deviceId || i} value={d.deviceId}>
                  {d.label || `Mikrofon ${i + 1}`}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Kamera</span>
            <select
              value={selectedCamId}
              onChange={(e) => handleDeviceChange({ videoDeviceId: e.target.value })}
            >
              {devices.cameras.map((d, i) => (
                <option key={d.deviceId || i} value={d.deviceId}>
                  {d.label || `Kamera ${i + 1}`}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {/* Bottom Controls Bar */}
      <footer className="live-controls-bar">
        <button
          type="button"
          className={`live-ctrl-btn ${!micOn ? 'is-off' : ''}`}
          onClick={toggleMic}
          title="Pintasan keyboard: M"
        >
          {micOn ? <Mic size={16} /> : <MicOff size={16} />}
          <span>{micOn ? 'Mic' : 'Mic Mati'}</span>
        </button>

        <button
          type="button"
          className={`live-ctrl-btn ${!camOn ? 'is-off' : ''}`}
          onClick={toggleCam}
          title="Pintasan keyboard: V"
        >
          {camOn ? <Video size={16} /> : <VideoOff size={16} />}
          <span>{camOn ? 'Kamera' : 'Kamera Mati'}</span>
        </button>

        <button
          type="button"
          className={`live-ctrl-btn ${screenSharing ? 'is-sharing' : ''}`}
          onClick={toggleScreenShare}
        >
          {screenSharing ? <MonitorOff size={16} /> : <MonitorUp size={16} />}
          <span>{screenSharing ? 'Stop Share' : 'Share Screen'}</span>
        </button>

        <button
          type="button"
          className="live-ctrl-btn"
          onClick={() => setShowDevices((s) => !s)}
          title="Pilih kamera & mikrofon"
        >
          <Settings size={16} />
          <span>Perangkat</span>
        </button>

        <button
          type="button"
          className="live-ctrl-btn"
          onClick={() => sessionRef.current?.restartIce().catch(() => {})}
          title="Segarkan koneksi audio/video bila jaringan sempat putus"
        >
          <RefreshCw size={15} />
          <span>Hubungkan Ulang</span>
        </button>

        {isTeacher ? (
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              className="live-ctrl-btn is-danger"
              onClick={() => setShowTeacherExitMenu((v) => !v)}
            >
              <PhoneOff size={16} />
              <span>Akhiri / Keluar</span>
            </button>
            {showTeacherExitMenu && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '3rem',
                  right: 0,
                  background: '#1E293B',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '10px',
                  padding: '0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  width: 220,
                  zIndex: 70
                }}
              >
                <button type="button" className="live-top-btn" onClick={handleLeaveTemporary}>
                  Keluar Sementara (Ruang Tetap Buka)
                </button>
                <button
                  type="button"
                  className="live-top-btn"
                  style={{ background: '#B91C1C', borderColor: '#DC2626', color: '#FFFFFF' }}
                  onClick={handleEndForAll}
                >
                  Akhiri Kelas untuk Semua
                </button>
              </div>
            )}
          </div>
        ) : (
          <button type="button" className="live-ctrl-btn is-danger" onClick={handleLeaveTemporary}>
            <PhoneOff size={16} />
            <span>Keluar Sesi</span>
          </button>
        )}
      </footer>
    </div>
  );
}
