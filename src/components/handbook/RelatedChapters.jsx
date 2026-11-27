import React from 'react';
import { Link } from 'react-router-dom';
import { relatedChapters } from '../../utils/relatedChapters';
import { topicOfChapter } from '../../data/topics';
import { getRelatedPapersForChapter, paperPath, formatPaperMeta } from '../../data/papers/manifest';

/** "Materi terkait": bab lain dengan topik yang sama serta Paket Soal Duta e-dukasi terkait. */
export function RelatedChapters({ chapterId }) {
  const items = relatedChapters(chapterId);
  const papers = getRelatedPapersForChapter(chapterId);
  if (items.length === 0 && papers.length === 0) return null;
  const topic = topicOfChapter(chapterId);
  return (
    <aside className="related-chapters" aria-label="Materi terkait">
      {papers.length > 0 && (
        <div style={{ marginBottom: items.length > 0 ? '0.85rem' : 0 }}>
          <strong>Paket Soal Terstruktur Terkait</strong>
          <ul>
            {papers.map((p) => {
              const info = formatPaperMeta(p);
              return (
                <li key={p.id}>
                  <Link to={paperPath(p)}>{p.title}</Link>{' '}
                  <span className="topic-meta">({p.lang === 'en' ? 'English' : 'Indonesia'} · {info.itemsLabel}{info.score ? ` · ${info.score}` : ''})</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {items.length > 0 && (
        <>
          <strong>Materi terkait</strong>
          <ul>
            {items.map((c) => (
              <li key={c.id}>
                <Link to={c.path}>{c.title}</Link> <span className="topic-meta">({c.label})</span>
              </li>
            ))}
          </ul>
          <Link className="related-all" to={`/daftar-isi#topik-${topic.id}`}>Semua materi {topic.name} →</Link>
        </>
      )}
    </aside>
  );
}

export default RelatedChapters;
