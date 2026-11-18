import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ExternalLink } from 'lucide-react';
import { FOUNDER, ORGANIZATION, PRESTASI_DATA } from '../data/siteInfo';
import { FOUNDER_META } from '../utils/seoMeta';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { WhatsappBanner } from './WhatsappCta';

export function FounderPage() {
  useDocumentMeta(FOUNDER_META);
  return (
    <div className="handbook-container seo-page">
      <nav className="seo-breadcrumb" aria-label="Navigasi">
        <Link to="/">Beranda</Link> › <span>Profil Pendiri</span>
      </nav>

      <section className="info-hero">
        <span className="badge badge-cat-uh" style={{ marginBottom: '0.45rem' }}>Pendiri {ORGANIZATION.name}</span>
        <h1>{FOUNDER.name} ({FOUNDER.formalName})</h1>
        <p style={{ margin: 0 }}>{FOUNDER.role}</p>
      </section>

      <h2>Profil Singkat &amp; Rekam Jejak Terverifikasi</h2>
      <ul>
        {FOUNDER.bioHighlights.map((item) => (
          <li key={item} style={{ marginBottom: '0.45rem' }}>{item}</li>
        ))}
      </ul>

      <h2>Rekam Jejak Kompetisi &amp; Sertifikasi Guru</h2>
      <div className="info-grid">
        {FOUNDER.credentials.map((cred) => (
          <article key={cred.title} className="info-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.45rem' }}>
              <Award size={18} color="var(--brand-crimson)" />
              <span className="badge badge-medal-gold">{cred.year}</span>
            </div>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>{cred.title}</h3>
            <p style={{ fontSize: '0.88rem', marginBottom: '0.5rem' }}>{cred.detail}</p>
            <a href={cred.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              Sumber profil resmi <ExternalLink size={13} />
            </a>
          </article>
        ))}
      </div>

      <h2>Tautan Resmi</h2>
      <ul>
        <li>
          Instagram Pendiri:{' '}
          <a href={FOUNDER.instagramUrl} target="_blank" rel="noopener noreferrer">{FOUNDER.instagramHandle}</a>
        </li>
        {FOUNDER.youtubeUrl && (
          <li>
            Video / Profil Pendidik:{' '}
            <a href={FOUNDER.youtubeUrl} target="_blank" rel="noopener noreferrer">{FOUNDER.youtubeUrl}</a>
          </li>
        )}
        <li>
          <Link to="/prestasi">Lihat Daftar Prestasi Siswa Binaan ({PRESTASI_DATA.length} catatan terverifikasi)</Link>
        </li>
      </ul>

      <WhatsappBanner />
    </div>
  );
}

export default FounderPage;
