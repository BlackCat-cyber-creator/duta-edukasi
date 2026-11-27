import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/** Navigasi "Bab sebelumnya / Bab berikutnya" di akhir setiap bab. */
export function ChapterNav({ chapters = [], currentId, onSelect, toPath }) {
  const idx = chapters.findIndex((c) => c.id === currentId);
  if (idx === -1) return null;
  const prev = chapters[idx - 1];
  const next = chapters[idx + 1];
  if (!prev && !next) return null;

  return (
    <nav className="chapter-nav" aria-label="Navigasi bab">
      {prev ? (
        toPath ? (
          <Link to={toPath(prev)} className="chapter-nav-btn" onClick={() => onSelect?.(prev.id)} style={{ textDecoration: 'none' }}>
            <ChevronLeft size={16} />
            <span>
              <small>Bab sebelumnya</small>
              {prev.title}
            </span>
          </Link>
        ) : (
          <button type="button" className="chapter-nav-btn" onClick={() => onSelect?.(prev.id)}>
            <ChevronLeft size={16} />
            <span>
              <small>Bab sebelumnya</small>
              {prev.title}
            </span>
          </button>
        )
      ) : <span />}
      {next ? (
        toPath ? (
          <Link to={toPath(next)} className="chapter-nav-btn chapter-nav-next" onClick={() => onSelect?.(next.id)} style={{ textDecoration: 'none' }}>
            <span>
              <small>Bab berikutnya</small>
              {next.title}
            </span>
            <ChevronRight size={16} />
          </Link>
        ) : (
          <button type="button" className="chapter-nav-btn chapter-nav-next" onClick={() => onSelect?.(next.id)}>
            <span>
              <small>Bab berikutnya</small>
              {next.title}
            </span>
            <ChevronRight size={16} />
          </button>
        )
      ) : <span />}
    </nav>
  );
}

export default ChapterNav;
