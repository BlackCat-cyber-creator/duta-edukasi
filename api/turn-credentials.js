import { DEFAULT_ICE_SERVERS } from '../src/utils/liveConfig.js';

const DEFAULT_FIREBASE_WEB_API_KEY =
  process.env.FIREBASE_WEB_API_KEY ||
  process.env.VITE_FIREBASE_API_KEY ||
  'AIzaSyAYoJsUL0x7dBAGNX69psNZpmquqaoTnjM';

const RATE_LIMIT_MAX = 30;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const rateBuckets = new Map();

function checkRateLimit(uid) {
  const now = Date.now();
  const bucket = (rateBuckets.get(uid) || []).filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  if (bucket.length >= RATE_LIMIT_MAX) return false;
  bucket.push(now);
  rateBuckets.set(uid, bucket);
  return true;
}

async function verifyFirebaseIdToken(idToken, fetchImpl = fetch) {
  if (!idToken) return null;
  try {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(DEFAULT_FIREBASE_WEB_API_KEY)}`;
    const res = await fetchImpl(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken })
    });
    if (!res.ok) return null;
    const data = await res.json();
    const u = data?.users?.[0];
    return u?.localId ? { uid: u.localId, email: u.email || '', displayName: u.displayName || '' } : null;
  } catch {
    return null;
  }
}

export async function resolveIceServers(env = process.env, fetchImpl = fetch) {
  const cfTokenId = String(env.CLOUDFLARE_TURN_TOKEN_ID || '').trim();
  const cfApiToken = String(env.CLOUDFLARE_TURN_API_TOKEN || '').trim();
  if (cfTokenId && cfApiToken) {
    try {
      const cfRes = await fetchImpl(
        `https://rtc.live.cloudflare.com/v1/turn/keys/${encodeURIComponent(cfTokenId)}/credentials/generate-ice-servers`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${cfApiToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ttl: 14400 })
        }
      );
      if (cfRes.ok) {
        const cfData = await cfRes.json();
        const cfList = Array.isArray(cfData?.iceServers)
          ? cfData.iceServers
          : cfData?.iceServers
            ? [cfData.iceServers]
            : [];
        if (cfList.length > 0) {
          return {
            iceServers: [...cfList, ...DEFAULT_ICE_SERVERS],
            provider: 'cloudflare-turn'
          };
        }
      }
    } catch (err) {
      console.warn('Cloudflare TURN fetch failed, falling back:', err?.message || err);
    }
  }

  const meteredDomain = String(env.METERED_TURN_DOMAIN || '').trim().replace(/^https?:\/\//i, '').replace(/\/+$/, '');
  const meteredKey = String(env.METERED_TURN_API_KEY || '').trim();
  if (meteredDomain && meteredKey) {
    try {
      const mRes = await fetchImpl(
        `https://${meteredDomain}/api/v1/turn/credentials?apiKey=${encodeURIComponent(meteredKey)}`,
        { method: 'GET' }
      );
      if (mRes.ok) {
        const mList = await mRes.json();
        if (Array.isArray(mList) && mList.length > 0) {
          return {
            iceServers: [...mList, ...DEFAULT_ICE_SERVERS],
            provider: 'metered-turn'
          };
        }
      }
    } catch (err) {
      console.warn('Metered TURN fetch failed, falling back:', err?.message || err);
    }
  }

  const staticUrls = String(env.TURN_URLS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const staticUser = String(env.TURN_USERNAME || '').trim();
  const staticCred = String(env.TURN_CREDENTIAL || '').trim();
  if (staticUrls.length > 0 && staticUser && staticCred) {
    return {
      iceServers: [
        {
          urls: staticUrls.length === 1 ? staticUrls[0] : staticUrls,
          username: staticUser,
          credential: staticCred
        },
        ...DEFAULT_ICE_SERVERS
      ],
      provider: 'custom-turn'
    };
  }

  return {
    iceServers: DEFAULT_ICE_SERVERS,
    provider: 'stun-only'
  };
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Metode tidak diizinkan.' });
    return;
  }

  const authHeader = String(req.headers.authorization || '');
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
  const verifiedUser = await verifyFirebaseIdToken(token);
  if (!verifiedUser) {
    res.status(401).json({ error: 'Autentikasi diperlukan untuk mengakses sesi kelas privat.' });
    return;
  }

  if (!checkRateLimit(verifiedUser.uid)) {
    res.status(429).json({ error: 'Permintaan kredensial terlalu sering. Coba beberapa saat lagi.' });
    return;
  }

  const result = await resolveIceServers(process.env, fetch);
  res.status(200).json(result);
}
