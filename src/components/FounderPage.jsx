import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ExternalLink } from 'lucide-react';
import { AUTHOR, FOUNDER, ORGANIZATION, PRESTASI_DATA } from '../data/siteInfo';
import { FOUNDER_META } from '../utils/seoMeta';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function FounderPage() {
  useDocumentMeta(FOUNDER_META);
  return (
    <div className="handbook-container seo-page">
      <nav className="seo-breadcrumb" aria-label="Navigasi">
        <Link to="/">Beranda</Link> › <span>Profil Pendiri</span>
      </nav>

      <section className="info-hero founder-hero">
        {FOUNDER.photo && (
          <img className="person-avatar founder-avatar" src={FOUNDER.photo} alt={`Foto ${FOUNDER.name}`} width={112} height={112} />
        )}
        <div>
          <span className="badge badge-cat-uh" style={{ marginBottom: '0.45rem' }}>Pendiri {ORGANIZATION.name}</span>
          <h1>{FOUNDER.name} ({FOUNDER.formalName})</h1>
          <p style={{ margin: 0 }}>{FOUNDER.role}</p>
          {FOUNDER.family && <p className="person-family" style={{ margin: '0.4rem 0 0' }}>{FOUNDER.family}</p>}
        </div>
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
          <Link to="/tentang#prestasi">Lihat Daftar Prestasi Siswa Binaan ({PRESTASI_DATA.length} catatan)</Link>
        </li>
      </ul>

      <h2>Tim Pengajar &amp; Lead Developer Portal Digital</h2>
      <div className="info-card" style={{ marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>{AUTHOR.name}</h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{AUTHOR.jobTitle}</p>
        {AUTHOR.family && <p className="person-family">{AUTHOR.family}</p>}
        <ul style={{ fontSize: '0.9rem', marginBottom: '0.55rem' }}>
          {(AUTHOR.bioHighlights || []).map((item) => (
            <li key={item} style={{ marginBottom: '0.35rem' }}>{item}</li>
          ))}
        </ul>
        <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>
          {AUTHOR.instagramUrl && (
            <>
              Instagram:{' '}
              <a href={AUTHOR.instagramUrl} target="_blank" rel="noopener noreferrer">{AUTHOR.instagramHandle}</a>
            </>
          )}
          {AUTHOR.githubUrl && (
            <>
              {' '}· GitHub:{' '}
              <a href={AUTHOR.githubUrl} target="_blank" rel="noopener noreferrer">BlackCat-cyber-creator</a>
            </>
          )}
          {AUTHOR.websiteUrl && (
            <>
              {' '}· Portfolio:{' '}
              <a href={AUTHOR.websiteUrl} target="_blank" rel="noopener noreferrer">jevon-one.vercel.app</a>
            </>
          )}
          {' '}· <Link to="/tentang">Tentang Platform Duta e-dukasi</Link>
        </p>
      </div>
    </div>
  );
}

export default FounderPage;
