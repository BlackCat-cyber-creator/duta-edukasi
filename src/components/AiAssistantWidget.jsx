import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, X, Send, ArrowRight, Lock, Loader2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { getStudyState } from '../utils/progress';
import { MathText } from './MathRenderer';

function renderInlineMarkdown(text, onNavigate) {
  const parts = String(text || '').split(/(\[[^\]]+\]\(\/[^)\s]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\((\/[^)\s]+)\)$/);
    if (linkMatch) {
      return (
        <Link key={idx} to={linkMatch[2]} className="ai-inline-link" onClick={onNavigate}>
          {linkMatch[1]}
        </Link>
      );
    }
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return <strong key={idx}><MathText text={boldMatch[1]} /></strong>;
    }
    return <MathText key={idx} text={part} />;
  });
}

function FormattedAiMessage({ text, onNavigate }) {
  const lines = String(text || '').split('\n');
  return (
    <div className="ai-msg-formatted">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} style={{ height: '0.35rem' }} />;
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          return (
            <div key={i} className="ai-msg-bullet">
              <span>•</span>
              <div>{renderInlineMarkdown(trimmed.slice(2), onNavigate)}</div>
            </div>
          );
        }
        return <p key={i} className="ai-msg-line">{renderInlineMarkdown(line, onNavigate)}</p>;
      })}
    </div>
  );
}

function starterPromptsFor(pathname) {
  if (pathname.startsWith('/olimpiade')) {
    return [
      'Rekomendasikan latihan OSN dari tingkat dasar ke lanjut',
      'Apa bedanya AMC 8, AMC 10, dan SASMO?',
      'Paket olimpiade berbahasa Inggris apa yang cocok untuk SMP?'
    ];
  }
  if (pathname.startsWith('/paket-soal')) {
    return [
      'Carikan paket soal Fisika atau Kimia SMA',
      'Paket soal OSN Matematika terbaru ada apa saja?',
      'Rekomendasikan paket latihan lanjutan setelah ini'
    ];
  }
  return [
    'Buatkan jalur belajar Matematika SMP menuju OSN',
    'Di mana kumpulan rumus Fisika & Kimia SMA?',
    'Carikan latihan TKA dan pembahasan lengkap'
  ];
}

export function AiAssistantPanel({ embedded = false, onClose }) {
  const location = useLocation();
  const { isAuthenticated, displayName, getIdToken } = useAuth();
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: `Halo${isAuthenticated ? ` ${displayName}` : ''}! Saya Asisten Belajar **Duta e-dukasi**. Tanyakan materi, rumus, atau paket soal olimpiade yang ingin kamu pelajari.`,
      recommendations: []
    }
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, busy]);

  if (!isAuthenticated) {
    return (
      <div className={`ai-panel ${embedded ? 'is-embedded' : ''}`}>
        <div className="ai-panel-head">
          <div className="ai-panel-title">
            <Sparkles size={16} />
            <strong>Asisten Belajar AI</strong>
          </div>
          {onClose && (
            <button type="button" className="btn btn-ghost" onClick={onClose} aria-label="Tutup asisten AI">
              <X size={16} />
            </button>
          )}
        </div>
        <div className="ai-gate-box">
          <Lock size={26} style={{ color: 'var(--brand-navy)' }} />
          <h3>Masuk untuk Chat dengan Asisten AI</h3>
          <p>
            Daftar atau masuk gratis agar asisten AI dapat membaca target jenjangmu, melacak progres belajar,
            dan merekomendasikan materi serta paket soal yang paling pas.
          </p>
          <Link to="/akun" className="btn btn-royal" onClick={onClose} style={{ textDecoration: 'none', color: '#fff' }}>
            Masuk / Daftar Gratis <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    );
  }

  const sendMessage = async (textToSend) => {
    const clean = String(textToSend || '').trim();
    if (!clean || busy) return;
    setError('');
    const nextHistory = [...messages, { role: 'user', text: clean }];
    setMessages(nextHistory);
    setInput('');
    setBusy(true);

    try {
      const token = await getIdToken();
      const study = getStudyState();
      const completedPaperIds = Object.entries(study.papers || {})
        .filter(([, v]) => v?.completed)
        .map(([id]) => id);

      const { sendFirebaseAiChat } = await import('../firebase/aiChat');
      const data = await sendFirebaseAiChat({
        messages: nextHistory.map((m) => ({ role: m.role, text: m.text })),
        userContext: {
          currentPath: location.pathname,
          targetLevel: study.profile?.targetLevel || '',
          targetCompetitions: study.profile?.targetCompetitions || [],
          completedPaperIds
        },
        displayName,
        idToken: token || ''
      });

      if (!data.ok) {
        setError(data?.error || 'Asisten AI sedang sibuk. Coba sesaat lagi.');
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            text: data.reply || 'Silakan jelajahi materi di portal.',
            recommendations: data.recommendations || []
          }
        ]);
      }
    } catch {
      setError('Gagal terhubung ke layanan AI. Periksa koneksi internet Anda.');
    } finally {
      setBusy(false);
    }
  };

  const starters = starterPromptsFor(location.pathname);

  return (
    <div className={`ai-panel ${embedded ? 'is-embedded' : ''}`}>
      <div className="ai-panel-head">
        <div className="ai-panel-title">
          <Sparkles size={16} />
          <strong>Asisten Belajar AI</strong>
        </div>
        {onClose && (
          <button type="button" className="btn btn-ghost" onClick={onClose} aria-label="Tutup asisten AI">
            <X size={16} />
          </button>
        )}
      </div>

      <div className="ai-messages" ref={listRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`ai-bubble ${msg.role === 'user' ? 'is-user' : 'is-bot'}`}>
            {msg.role === 'user' ? (
              <span>{msg.text}</span>
            ) : (
              <>
                <FormattedAiMessage text={msg.text} onNavigate={onClose} />
                {msg.recommendations?.length > 0 && (
                  <div className="ai-rec-list">
                    {msg.recommendations.slice(0, 3).map((rec) => (
                      <Link key={rec.path} to={rec.path} className="ai-rec-chip" onClick={onClose}>
                        <span>{rec.title}</span>
                        <ArrowRight size={12} />
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
        {busy && (
          <div className="ai-bubble is-bot">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Loader2 size={14} className="spinner" /> Menyiapkan rekomendasi...
            </span>
          </div>
        )}
      </div>

      {messages.length <= 2 && (
        <div className="ai-starters">
          {starters.map((prompt) => (
            <button key={prompt} type="button" className="ai-starter-chip" onClick={() => sendMessage(prompt)}>
              {prompt}
            </button>
          ))}
        </div>
      )}

      {error && <p className="ai-error">{error}</p>}

      <form
        className="ai-input-row"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(input);
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tanya materi, rumus, atau paket soal..."
          maxLength={500}
          disabled={busy}
        />
        <button type="submit" className="btn btn-royal" disabled={busy || !input.trim()} aria-label="Kirim">
          <Send size={15} />
        </button>
      </form>
    </div>
  );
}

export function AiAssistantWidget() {
  const [open, setOpen] = useState(false);
  const { ensureAuthReady } = useAuth();

  const handleOpen = () => {
    ensureAuthReady();
    setOpen((prev) => !prev);
  };

  return (
    <div className="ai-widget-root no-print">
      {open && (
        <div className="ai-widget-drawer">
          <AiAssistantPanel onClose={() => setOpen(false)} />
        </div>
      )}
      <button
        type="button"
        className="ai-widget-fab"
        onClick={handleOpen}
        aria-expanded={open}
        aria-label="Buka Asisten Belajar AI"
      >
        <Sparkles size={17} />
        <span>Tanya AI</span>
      </button>
    </div>
  );
}

export default AiAssistantWidget;
