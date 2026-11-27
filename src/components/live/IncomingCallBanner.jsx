import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhoneIncoming, Video, X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { subscribeStudentIncomingRooms } from '../../firebase/liveRooms';

function playRingChime() {
  if (typeof window === 'undefined') return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  try {
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    const playTone = (freq, start, dur) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.001, start);
      gain.gain.exponentialRampToValueAtTime(0.09, start + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, start + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + dur);
    };
    playTone(587.33, now, 0.22);
    playTone(880, now + 0.24, 0.34);
    setTimeout(() => {
      ctx.close().catch(() => {});
    }, 800);
  } catch {
    // Abaikan jika browser memblokir autoplay audio
  }
}

export function IncomingCallBanner() {
  const { isAuthenticated, email } = useAuth();
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [dismissedKey, setDismissedKey] = useState('');
  const lastChimeKeyRef = useRef('');

  useEffect(() => {
    if (!isAuthenticated || !email) {
      return undefined;
    }
    return subscribeStudentIncomingRooms(email, (list) => {
      setRooms(list);
    });
  }, [isAuthenticated, email]);

  const topRoom = isAuthenticated && email ? (rooms[0] || null) : null;
  const roomKey = topRoom ? `${topRoom.id}:${topRoom.ringingAt || topRoom.status}` : '';

  useEffect(() => {
    if (!topRoom || topRoom.status !== 'ringing') return;
    if (lastChimeKeyRef.current === roomKey) return;
    lastChimeKeyRef.current = roomKey;
    playRingChime();
  }, [topRoom, roomKey]);

  if (!topRoom || dismissedKey === roomKey) return null;

  const isRinging = topRoom.status === 'ringing';

  return (
    <aside
      role="dialog"
      aria-label="Panggilan kelas privat masuk"
      style={{
        position: 'fixed',
        right: '1rem',
        bottom: '1rem',
        zIndex: 1200,
        width: 'min(92vw, 350px)',
        background: '#111827',
        color: '#F8FAFC',
        border: `1px solid ${isRinging ? '#22C55E' : '#3B82F6'}`,
        borderRadius: '14px',
        padding: '0.95rem 1rem',
        boxShadow: '0 18px 40px rgba(0, 0, 0, 0.35)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.65rem'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: '999px',
              background: isRinging ? 'rgba(34, 197, 94, 0.18)' : 'rgba(59, 130, 246, 0.2)',
              color: isRinging ? '#4ADE80' : '#60A5FA',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            {isRinging ? <PhoneIncoming size={18} /> : <Video size={18} />}
          </span>
          <div>
            <strong style={{ display: 'block', fontSize: '0.9rem', color: '#FFFFFF' }}>
              {isRinging ? 'Panggilan Kelas Privat' : 'Sesi Kelas Berlangsung'}
            </strong>
            <span style={{ fontSize: '0.78rem', color: '#CBD5E1' }}>
              {topRoom.teacherName || 'Pengajar Duta e-dukasi'}
              {topRoom.topic ? ` · ${topRoom.topic}` : ''}
            </span>
          </div>
        </div>
        <button
          type="button"
          aria-label="Tutup pemberitahuan"
          onClick={() => setDismissedKey(roomKey)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#94A3B8',
            cursor: 'pointer',
            padding: '0.15rem'
          }}
        >
          <X size={16} />
        </button>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          type="button"
          onClick={() => navigate(`/kelas/${encodeURIComponent(topRoom.id)}`)}
          style={{
            flex: 1,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            border: 'none',
            background: isRinging ? '#16A34A' : '#2563EB',
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: '0.84rem',
            padding: '0.55rem 0.8rem',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          <Video size={15} />
          <span>{isRinging ? 'Angkat & Masuk Kelas' : 'Gabung Kembali'}</span>
        </button>
      </div>
    </aside>
  );
}
