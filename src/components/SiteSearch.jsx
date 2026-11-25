import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { searchSite } from '../utils/siteSearch';

/** Kotak pencarian terpadu lintas materi bab, Paket Soal, Olimpiade, TKA, dan Rumus. */
export function SiteSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(-1);
  const results = useMemo(() => (query.trim().length >= 2 ? searchSite(query, 10) : []), [query]);
  const showEmpty = query.trim().length >= 2 && results.length === 0;

  const handleKeyDown = (e) => {
    if (!query.trim()) return;
    if (e.key === 'Escape') {
      setQuery('');
      setActiveIdx(-1);
      return;
    }
    if (!results.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((prev) => (prev <= 0 ? results.length - 1 : prev - 1));
    } else if (e.key === 'Enter' && activeIdx >= 0 && results[activeIdx]) {
      e.preventDefault();
      const target = results[activeIdx];
      setQuery('');
      setActiveIdx(-1);
      navigate(target.path);
    }
  };

  return (
    <div className="site-search" role="search">
      <label className="site-search-box">
        <Search size={16} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setActiveIdx(-1); }}
          onKeyDown={handleKeyDown}
          placeholder="Cari materi, paket soal, atau olimpiade (mis. OSN 2025, SASMO, pecahan)"
          aria-label="Cari materi, paket soal, dan olimpiade"
          aria-autocomplete="list"
        />
        {query && (
          <button type="button" className="site-search-clear" onClick={() => { setQuery(''); setActiveIdx(-1); }} aria-label="Hapus pencarian">
            <X size={14} />
          </button>
        )}
      </label>
      {results.length > 0 && (
        <ul className="site-search-results" role="listbox">
          {results.map((r, idx) => (
            <li key={r.id} className={idx === activeIdx ? 'is-focused' : ''}>
              <Link to={r.path} onClick={() => { setQuery(''); setActiveIdx(-1); }}>
                <span className="site-search-label">{r.label}</span>
                <span className="site-search-main">
                  <strong>{r.title}</strong>
                  {r.meta && <small>{r.meta}</small>}
                </span>
                <span className="site-search-cat">{r.category}</span>
              </Link>
            </li>
          ))}
          <li className="site-search-footer">
            <Link
              to={`/paket-soal?q=${encodeURIComponent(query.trim())}`}
              onClick={() => { setQuery(''); setActiveIdx(-1); }}
            >
              <span>Cari &ldquo;{query.trim()}&rdquo; di semua Paket Soal</span>
              <ArrowRight size={14} />
            </Link>
          </li>
        </ul>
      )}
      {showEmpty && <p className="site-search-empty">Belum ada materi atau paket yang cocok dengan &ldquo;{query.trim()}&rdquo;.</p>}
    </div>
  );
}

export default SiteSearch;
