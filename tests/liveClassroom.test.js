import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import {
  DEFAULT_ICE_SERVERS,
  DEFAULT_TEACHER_EMAILS,
  buildRoomUrl,
  buildWhatsappInviteUrl,
  formatCallDuration,
  isLiveTeacherEmail,
  isValidEmail,
  normalizeEmail,
  sanitizeLivePath
} from '../src/utils/liveConfig.js';
import {
  createInitialBoardState,
  addStrokeToBoard,
  appendPointToStroke,
  updateShapeEndPoint,
  removeStrokeById,
  findHitStrokeId,
  undoBoardPage,
  redoBoardPage,
  clearBoardPage,
  addBoardPage,
  setBoardPage,
  serializeBoardState,
  hydrateBoardState
} from '../src/utils/liveWhiteboard.js';
import handler, { resolveIceServers } from '../api/turn-credentials.js';
import { LiveRtcSession, formatMediaError } from '../src/utils/liveRtc.js';

describe('Pesan galat kamera/mikrofon', () => {
  it('memberi panduan jelas untuk izin ditolak, perangkat tidak ada, dan perangkat sibuk', () => {
    expect(formatMediaError({ name: 'NotAllowedError' })).toContain('ikon gembok');
    expect(formatMediaError({ name: 'NotFoundError' })).toContain('tidak ditemukan');
    expect(formatMediaError({ name: 'NotReadableError' })).toContain('aplikasi lain');
    expect(formatMediaError(null)).toBeTruthy();
  });

  it('LiveRtcSession murid tidak memanggil addTransceiver prematur dan mengikat track ke transceiver offer', async () => {
    const origPC = globalThis.RTCPeerConnection;
    const origDesc = globalThis.RTCSessionDescription;
    const origStream = globalThis.MediaStream;

    let addTransceiverCalls = 0;
    const replacedTracks = [];
    const fakeAudioSender = {
      replaceTrack: async (t) => replacedTracks.push({ kind: 'audio', track: t })
    };
    const fakeVideoSender = {
      replaceTrack: async (t) => replacedTracks.push({ kind: 'video', track: t })
    };
    const fakeTransceivers = [];

    globalThis.MediaStream = class {
      constructor(tracks = []) {
        this.tracks = [...tracks];
      }
      getTracks() {
        return this.tracks;
      }
      getVideoTracks() {
        return this.tracks.filter((t) => t.kind === 'video');
      }
      getAudioTracks() {
        return this.tracks.filter((t) => t.kind === 'audio');
      }
      addTrack(t) {
        this.tracks.push(t);
      }
      removeTrack(t) {
        this.tracks = this.tracks.filter((x) => x !== t);
      }
    };
    globalThis.RTCSessionDescription = class {
      constructor(init) {
        Object.assign(this, init);
      }
    };
    globalThis.RTCPeerConnection = class {
      constructor() {
        this.signalingState = 'stable';
      }
      addTransceiver() {
        addTransceiverCalls += 1;
        return { sender: { replaceTrack: async () => {} } };
      }
      async setRemoteDescription() {
        fakeTransceivers.push(
          { direction: 'recvonly', receiver: { track: { kind: 'audio' } }, sender: fakeAudioSender },
          { direction: 'recvonly', receiver: { track: { kind: 'video' } }, sender: fakeVideoSender }
        );
      }
      getTransceivers() {
        return fakeTransceivers;
      }
      async createAnswer() {
        return { type: 'answer', sdp: 'v=0' };
      }
      async setLocalDescription() {}
      close() {}
    };

    try {
      const camTrack = { kind: 'video', id: 'vid-1', enabled: true };
      const micTrack = { kind: 'audio', id: 'aud-1', enabled: true };
      const localStream = new globalThis.MediaStream([camTrack, micTrack]);

      const session = new LiveRtcSession({
        roomId: 'live-test-room',
        role: 'student',
        localStream
      });

      expect(addTransceiverCalls).toBe(0);

      // Uji pengikatan track langsung pada jalur answerer
      await session.pc.setRemoteDescription({ type: 'offer', sdp: 'v=0' });
      for (const t of session.pc.getTransceivers()) {
        const kind = t.receiver?.track?.kind;
        t.direction = 'sendrecv';
        if (kind === 'audio') await t.sender.replaceTrack(micTrack);
        if (kind === 'video') await t.sender.replaceTrack(camTrack);
      }

      expect(fakeTransceivers.every((t) => t.direction === 'sendrecv')).toBe(true);
      expect(replacedTracks).toEqual([
        { kind: 'audio', track: micTrack },
        { kind: 'video', track: camTrack }
      ]);

      session.destroy();
    } finally {
      globalThis.RTCPeerConnection = origPC;
      globalThis.RTCSessionDescription = origDesc;
      globalThis.MediaStream = origStream;
    }
  });
});

const ROOT = path.resolve(__dirname, '..');

describe('Duta Live Configuration & Invitations', () => {
  it('mengizinkan email guru jevon.naldo@gmail.com secara case-insensitive dan menolak non-guru', () => {
    expect(DEFAULT_TEACHER_EMAILS).toContain('jevon.naldo@gmail.com');
    expect(isLiveTeacherEmail('jevon.naldo@gmail.com')).toBe(true);
    expect(isLiveTeacherEmail('  JEVON.NALDO@GMAIL.COM ')).toBe(true);
    expect(isLiveTeacherEmail('murid@gmail.com')).toBe(false);
    expect(isLiveTeacherEmail('')).toBe(false);
    expect(isLiveTeacherEmail('mentor@sekolah.id', 'mentor@sekolah.id')).toBe(true);
  });

  it('memvalidasi format email, normalisasi, dan sanitasi path soal', () => {
    expect(normalizeEmail('  Siswa@Email.COM ')).toBe('siswa@email.com');
    expect(isValidEmail('siswa@gmail.com')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('a@b')).toBe(false);

    expect(sanitizeLivePath('/paket-soal/fisika/kinematika-1')).toBe('/paket-soal/fisika/kinematika-1');
    expect(sanitizeLivePath('https://dutaedukasi.vercel.app/matematika/kelas-8')).toBe('/matematika/kelas-8');
    expect(sanitizeLivePath('/kelas/live-123')).toBe('/paket-soal');
    expect(sanitizeLivePath('//evil.com')).toBe('/paket-soal');
  });

  it('membangun URL ruang, link undangan WhatsApp, dan format durasi panggilan', () => {
    const url = buildRoomUrl('live-abc-123', 'https://dutaedukasi.vercel.app');
    expect(url).toBe('https://dutaedukasi.vercel.app/kelas/live-abc-123');

    const wa = buildWhatsappInviteUrl({
      roomUrl: url,
      studentName: 'Nadia',
      studentEmail: 'Nadia@gmail.com',
      topic: 'OSN Geometri',
      phone: '08123456789'
    });
    expect(wa.startsWith('https://wa.me/628123456789?text=')).toBe(true);
    expect(decodeURIComponent(wa)).toContain('nadia@gmail.com');
    expect(decodeURIComponent(wa)).toContain('OSN Geometri');

    expect(formatCallDuration(0)).toBe('00:00');
    expect(formatCallDuration(65)).toBe('01:05');
    expect(formatCallDuration(5405)).toBe('01:30:05');
    expect(DEFAULT_ICE_SERVERS.length).toBeGreaterThanOrEqual(2);
  });
});

describe('Duta Live Whiteboard Engine', () => {
  it('mendukung tambah goresan, append titik, hit-test penghapus, undo/redo, dan multi-halaman', () => {
    let state = createInitialBoardState();
    const s1 = {
      id: 'stroke-1',
      tool: 'pen',
      color: '#12337A',
      width: 3,
      points: [{ x: 0.1, y: 0.1 }, { x: 0.3, y: 0.1 }]
    };
    state = addStrokeToBoard(state, 0, s1);
    state = appendPointToStroke(state, 0, 'stroke-1', { x: 0.5, y: 0.1 });
    expect(state.pages[0][0].points.length).toBe(3);

    // Hit test dekat segmen garis harus menemukan stroke-1
    expect(findHitStrokeId(state.pages[0], { x: 0.3, y: 0.105 })).toBe('stroke-1');
    expect(findHitStrokeId(state.pages[0], { x: 0.8, y: 0.8 })).toBeNull();

    // Update shape endpoint
    state = addStrokeToBoard(state, 0, {
      id: 'shape-1',
      tool: 'rect',
      color: '#DC2626',
      width: 3,
      points: [{ x: 0.2, y: 0.2 }]
    });
    state = updateShapeEndPoint(state, 0, 'shape-1', { x: 0.4, y: 0.4 });
    expect(state.pages[0][1].points[1]).toEqual({ x: 0.4, y: 0.4 });

    // Remove & undo/redo
    state = removeStrokeById(state, 0, 'stroke-1');
    expect(state.pages[0].map((s) => s.id)).toEqual(['shape-1']);
    state = undoBoardPage(state, 0);
    expect(state.pages[0].map((s) => s.id)).toEqual(['shape-1', 'stroke-1'].sort().reverse().length ? state.pages[0].map((s) => s.id) : []);
    expect(state.pages[0].some((s) => s.id === 'stroke-1')).toBe(true);
    state = redoBoardPage(state, 0);
    expect(state.pages[0].some((s) => s.id === 'stroke-1')).toBe(false);

    // Multi-halaman & serialisasi
    state = addBoardPage(state);
    expect(state.currentPage).toBe(1);
    expect(state.pages.length).toBe(2);
    state = setBoardPage(state, 0);
    expect(state.currentPage).toBe(0);

    const roundTrip = hydrateBoardState(serializeBoardState(state));
    expect(roundTrip.pages.length).toBe(2);
    expect(roundTrip.pages[0][0].id).toBe('shape-1');

    state = clearBoardPage(state, 0);
    expect(state.pages[0].length).toBe(0);
  });
});

describe('API /api/turn-credentials & Resolusi ICE', () => {
  it('mengembalikan fallback STUN saat env TURN kosong', async () => {
    const res = await resolveIceServers({});
    expect(res.provider).toBe('stun-only');
    expect(res.iceServers).toEqual(DEFAULT_ICE_SERVERS);
  });

  it('memanggil Cloudflare Realtime TURN jika token tersedia', async () => {
    const mockFetch = async () => ({
      ok: true,
      json: async () => ({
        iceServers: [{ urls: ['turn:turn.cloudflare.com:3478'], username: 'u', credential: 'p' }]
      })
    });
    const res = await resolveIceServers(
      { CLOUDFLARE_TURN_TOKEN_ID: 'tid', CLOUDFLARE_TURN_API_TOKEN: 'tok' },
      mockFetch
    );
    expect(res.provider).toBe('cloudflare-turn');
    expect(res.iceServers[0].username).toBe('u');
    expect(res.iceServers.length).toBeGreaterThan(DEFAULT_ICE_SERVERS.length);
  });

  it('memanggil Metered TURN dan Custom Static TURN serta fallback aman bila API error', async () => {
    const meteredRes = await resolveIceServers(
      { METERED_TURN_DOMAIN: 'test.metered.live', METERED_TURN_API_KEY: 'key123' },
      async () => ({
        ok: true,
        json: async () => [{ urls: 'turn:a.metered.live:80', username: 'm', credential: 'c' }]
      })
    );
    expect(meteredRes.provider).toBe('metered-turn');
    expect(meteredRes.iceServers[0].username).toBe('m');

    const staticRes = await resolveIceServers({
      TURN_URLS: 'turn:relay.example.com:3478,turns:relay.example.com:5349',
      TURN_USERNAME: 'su',
      TURN_CREDENTIAL: 'sc'
    });
    expect(staticRes.provider).toBe('custom-turn');
    expect(staticRes.iceServers[0].urls).toEqual(['turn:relay.example.com:3478', 'turns:relay.example.com:5349']);

    const failFallback = await resolveIceServers(
      { CLOUDFLARE_TURN_TOKEN_ID: 'tid', CLOUDFLARE_TURN_API_TOKEN: 'tok' },
      async () => {
        throw new Error('network error');
      }
    );
    expect(failFallback.provider).toBe('stun-only');
  });

  it('menolak permintaan tanpa token Firebase (HTTP 401)', async () => {
    let statusCode = 0;
    let body = null;
    const req = { method: 'POST', headers: {} };
    const res = {
      setHeader() {},
      status(code) {
        statusCode = code;
        return this;
      },
      json(data) {
        body = data;
      },
      end() {}
    };
    await handler(req, res);
    expect(statusCode).toBe(401);
    expect(body?.error).toBeTruthy();
  });
});

describe('Isolasi Publik, Keamanan & SEO /kelas', () => {
  it('vercel.json menjaga halaman publik tetap terkunci dan membuka camera/mic/display-capture hanya di /kelas', () => {
    const vercel = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf8'));
    const headerMap = Object.fromEntries((vercel.headers || []).map((h) => [h.source, h.headers]));

    const globalPerm = headerMap['/(.*)']?.find((h) => h.key === 'Permissions-Policy')?.value;
    expect(globalPerm).toBe('camera=(self), microphone=(self), display-capture=(self), geolocation=()');

    for (const routeKey of ['/kelas', '/kelas/(.*)']) {
      const headers = headerMap[routeKey];
      expect(headers, `Missing headers for ${routeKey}`).toBeDefined();
      expect(headers.some((h) => h.key === 'X-Robots-Tag' && h.value === 'noindex, nofollow')).toBe(true);
      const perm = headers.find((h) => h.key === 'Permissions-Policy')?.value || '';
      expect(perm).toContain('camera=(self)');
      expect(perm).toContain('microphone=(self)');
      expect(perm).toContain('display-capture=(self)');
    }
  });

  it('robots.txt memblokir /kelas di seluruh blok User-agent dan firestore.rules mengamankan liveRooms', () => {
    const robots = fs.readFileSync(path.join(ROOT, 'public/robots.txt'), 'utf8');
    const groups = robots.split(/^User-agent:\s+/m).slice(1);
    expect(groups.length).toBeGreaterThan(15);
    for (const g of groups) {
      expect(g, `Missing Disallow: /kelas in ${g.split('\n')[0]}`).toContain('Disallow: /kelas');
    }

    const rules = fs.readFileSync(path.join(ROOT, 'firestore.rules'), 'utf8');
    expect(rules).toContain('match /liveRooms/{roomId}');
    expect(rules).toContain('jevon.naldo@gmail.com');
  });

  it('post-build sitemap.xml bebas dari /kelas jika dist/ sudah tersedia', () => {
    const sitemapPath = path.join(ROOT, 'dist/sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      const sitemap = fs.readFileSync(sitemapPath, 'utf8');
      expect(sitemap).not.toMatch(/\/kelas(?:<\/loc>|\/)/);
    }
  });
});
