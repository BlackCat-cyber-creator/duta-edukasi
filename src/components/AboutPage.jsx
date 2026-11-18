import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT, AUTHOR, FOUNDER, ORGANIZATION } from '../data/siteInfo';
import { ABOUT_META } from '../utils/seoMeta';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { gradePath, amcLevelPath } from '../utils/seoRoutes';
import { WhatsappBanner } from './WhatsappCta';

/** Halaman /tentang: profil Duta e-dukasi, pendiri, pembuat, dan lisensi. */
export function AboutPage() {
  useDocumentMeta(ABOUT_META);
  return (
    <div className="handbook-container seo-page">
      <nav className="seo-breadcrumb" aria-label="Navigasi">
        <Link to="/">Beranda</Link> › <span>Tentang</span>
      </nav>
      <section className="info-hero">
        <h1>{ABOUT.title}</h1>
        <p style={{ margin: 0 }}><strong>{ABOUT.intro}</strong></p>
      </section>

      {ABOUT.paragraphs.map((p) => <p key={p}>{p}</p>)}

      <div className="info-grid">
        <div className="info-card">
          <h2>Pendiri &amp; Pembina Utama</h2>
          <p>
            <strong>{FOUNDER.name}</strong> ({FOUNDER.formalName}) — {FOUNDER.role}.
          </p>
          <p style={{ fontSize: '0.88rem', marginBottom: 0 }}>
            <Link to="/pendiri">Baca profil lengkap Pendiri</Link> ·{' '}
            <Link to="/prestasi">Lihat Prestasi Siswa</Link>
          </p>
        </div>

        <div className="info-card">
          <h2>Lead Developer &amp; Penyusun Portal Digital</h2>
          <p><strong>{AUTHOR.name}</strong> — {AUTHOR.jobTitle}.</p>
          {(AUTHOR.bioHighlights || []).length > 0 && (
            <ul style={{ fontSize: '0.88rem', paddingLeft: '1.15rem', marginBottom: '0.6rem' }}>
              {AUTHOR.bioHighlights.map((item) => (
                <li key={item} style={{ marginBottom: '0.3rem' }}>{item}</li>
              ))}
            </ul>
          )}
          <p style={{ fontSize: '0.88rem', marginBottom: 0 }}>
            {AUTHOR.instagramUrl && (
              <>
                Instagram:{' '}
                <a href={AUTHOR.instagramUrl} target="_blank" rel="noopener noreferrer">
                  {AUTHOR.instagramHandle}
                </a>{' '}
                ·{' '}
              </>
            )}
            {AUTHOR.githubUrl && (
              <>
                GitHub:{' '}
                <a href={AUTHOR.githubUrl} target="_blank" rel="noopener noreferrer">
                  BlackCat-cyber-creator
                </a>{' '}
                ·{' '}
              </>
            )}
            {AUTHOR.websiteUrl && (
              <>
                Portfolio:{' '}
                <a href={AUTHOR.websiteUrl} target="_blank" rel="noopener noreferrer">
                  jevon-one.vercel.app
                </a>{' '}
                ·{' '}
              </>
            )}
            WhatsApp:{' '}
            <a href={ORGANIZATION.whatsappUrl} target="_blank" rel="noopener noreferrer">
              {ORGANIZATION.whatsappDisplay}
            </a>
          </p>
        </div>
      </div>

      <h2>Lisensi &amp; Hak Cipta Terbuka</h2>
      <p>
        Seluruh materi dan Paket Soal di portal ini dibagikan di bawah lisensi{' '}
        <a href={ORGANIZATION.licenseUrl} target="_blank" rel="noopener noreferrer">
          Creative Commons Attribution 4.0 International ({ORGANIZATION.licenseName})
        </a>{' '}
        dengan atribusi kepada <strong>{ORGANIZATION.name}</strong> (serta sumber kompetisi asli bila tercantum).
      </p>

      <h2>Mulai Belajar</h2>
      <ul>
        <li><Link to="/paket-soal">Arsip Paket Soal Terstruktur (dengan Kunci &amp; Rubrik)</Link></li>
        {[4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => (
          <li key={g}><Link to={gradePath(g)}>Matematika Kelas {g}</Link></li>
        ))}
        {[4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => (
          <li key={`ipa${g}`}><Link to={gradePath(g, 'ipa')}>{g >= 10 ? `Fisika Kelas ${g}` : `IPA Kelas ${g}`}</Link></li>
        ))}
        {[8, 10, 12].map((l) => (
          <li key={`amc${l}`}><Link to={amcLevelPath(l)}>Olimpiade AMC {l}</Link></li>
        ))}
        <li><Link to="/rumus">Kumpulan Rumus Matematika &amp; Fisika</Link></li>
        <li><Link to="/daftar-isi">Daftar Isi per Topik</Link></li>
        <li><Link to="/tka">Latihan TKA</Link></li>
      </ul>

      <WhatsappBanner />
    </div>
  );
}

export default AboutPage;
