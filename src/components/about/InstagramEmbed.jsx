import React, { useEffect, useRef } from 'react';

const EMBED_SCRIPT_SRC = 'https://www.instagram.com/embed.js';
let scriptPromise = null;

/** Memuat skrip resmi embed Instagram sekali saja, hanya ketika ada foto yang perlu ditampilkan. */
function loadEmbedScript() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.instgrm?.Embeds) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.async = true;
      script.src = EMBED_SCRIPT_SRC;
      script.onload = resolve;
      script.onerror = () => {
        scriptPromise = null;
        reject(new Error('embed.js gagal dimuat'));
      };
      document.body.appendChild(script);
    });
  }
  return scriptPromise;
}

const escapeAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/**
 * Foto unggahan Instagram publik (embed resmi). Skrip Instagram baru dimuat ketika kartu
 * mendekati layar, dan isinya diganti oleh skrip itu sendiri, jadi markup ditulis lewat
 * dangerouslySetInnerHTML agar React tidak ikut mengelola simpul yang sudah diganti.
 */
export function InstagramEmbed({ shortcode, label = 'Lihat foto di Instagram' }) {
  const ref = useRef(null);
  const permalink = `https://www.instagram.com/p/${shortcode}/`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let cancelled = false;
    const run = () =>
      loadEmbedScript()
        .then(() => {
          if (!cancelled) window.instgrm?.Embeds?.process();
        })
        .catch(() => {});

    if (typeof IntersectionObserver === 'undefined') {
      run();
      return () => { cancelled = true; };
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          run();
        }
      },
      { rootMargin: '400px' }
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, [shortcode]);

  const html = `<blockquote class="instagram-media" data-instgrm-permalink="${escapeAttr(permalink)}" data-instgrm-version="14"><a href="${escapeAttr(permalink)}" target="_blank" rel="noopener noreferrer">${escapeAttr(label)}</a></blockquote>`;

  return <div ref={ref} className="ig-embed" dangerouslySetInnerHTML={{ __html: html }} />;
}

export default InstagramEmbed;
