import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ExternalLink } from 'lucide-react';
import { PRESTASI_DATA, ORGANIZATION } from '../data/siteInfo';
import { PRESTASI_META } from '../utils/seoMeta';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

function medalClass(award) {
  const s = String(award || '').toLowerCase();
  if (s.includes('emas') || s.includes('gold') || s.includes('winner') || s.includes('champion') || s.includes('juara 1')) return 'badge-medal-gold';
  if (s.includes('perak') || s.includes('silver') || s.includes('juara 2')) return 'badge-medal-silver';
  return 'badge-medal-bronze';
}

export function PrestasiPage() {
  useDocumentMeta(PRESTASI_META);
  return (
    <div className="handbook-container seo-page">
      <nav className="seo-breadcrumb" aria-label="Navigasi">
        <Link to="/">Beranda</Link> › <span>Prestasi Siswa</span>
      </nav>

      <section className="info-hero">
        <h1>Prestasi Siswa &amp; Alumni {ORGANIZATION.name}</h1>
        <p style={{ margin: 0 }}>
          Catatan pencapaian siswa di bidang Matematika dan Sains yang bersumber terverifikasi. Setiap entri memuat
          rujukan sumber publik atau dokumentasi pembinaan.
        </p>
      </section>

      <div className="info-grid">
        {PRESTASI_DATA.map((item) => (
          <article key={item.id} className="info-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <span className={`badge ${medalClass(item.award)}`}>
                <Trophy size={13} /> {item.award}
              </span>
              <span className="badge badge-subtle">{item.year} · {item.level}</span>
            </div>
            <h2 style={{ fontSize: '1.08rem', marginBottom: '0.25rem' }}>{item.studentName}</h2>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '0.45rem' }}>{item.school}</p>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>{item.competition}</p>
            {item.notes && <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>{item.notes}</p>}
            {item.sourceUrl && (
              <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                Sumber: {item.sourceLabel} <ExternalLink size={12} />
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export default PrestasiPage;
