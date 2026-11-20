import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ABOUT, AUTHOR, FOUNDER, ORGANIZATION } from '../data/siteInfo';
import { ABOUT_META } from '../utils/seoMeta';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PersonCard } from './about/PersonCard';
import { PrestasiSection } from './about/PrestasiSection';

const SECTION_LINKS = [
  { href: '#profil', label: 'Profil' },
  { href: '#tim', label: 'Pendiri & tim' },
  { href: '#prestasi', label: 'Prestasi siswa' },
  { href: '#lisensi', label: 'Lisensi' }
];

/**
 * Halaman /tentang: profil Duta e-dukasi, pendiri & tim, prestasi siswa, dan lisensi.
 * Alamat lama /prestasi diarahkan ke /tentang#prestasi.
 */
export function AboutPage() {
  useDocumentMeta(ABOUT_META);
  const { hash } = useLocation();

  // Lompat ke bagian yang diminta (#prestasi, #tim, ...) setelah halaman dirender
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  }, [hash]);

  return (
    <div className="handbook-container seo-page about-page">
      <nav className="seo-breadcrumb" aria-label="Navigasi">
        <Link to="/">Beranda</Link> › <span>Tentang</span>
      </nav>

      <section className="info-hero">
        <h1>{ABOUT.title}</h1>
        <p style={{ margin: 0 }}><strong>{ABOUT.intro}</strong></p>
      </section>

      <nav className="about-subnav" aria-label="Bagian halaman Tentang">
        {SECTION_LINKS.map((s) => (
          <a key={s.href} href={s.href} className="hub-grade-chip">{s.label}</a>
        ))}
        <Link to="/program" className="hub-grade-chip">Program bimbel</Link>
        <Link to="/kontak" className="hub-grade-chip">Kontak &amp; lokasi</Link>
      </nav>

      <section id="profil" className="about-section">
        {ABOUT.paragraphs.map((p) => <p key={p}>{p}</p>)}
      </section>

      <section id="tim" className="about-section" aria-labelledby="tim-heading">
        <h2 id="tim-heading">Pendiri &amp; Tim</h2>
        <div className="info-grid">
          <PersonCard
            name={FOUNDER.name}
            subtitle={FOUNDER.formalName}
            role={FOUNDER.role}
            photo={FOUNDER.photo}
            family={FOUNDER.family}
            links={[
              { href: '/pendiri', internal: true, node: <Link to="/pendiri">Profil lengkap pendiri</Link> },
              { href: FOUNDER.instagramUrl, label: `Instagram ${FOUNDER.instagramHandle}` }
            ]}
          />
          <PersonCard
            name={AUTHOR.name}
            subtitle="Lead Developer & penyusun portal"
            role={AUTHOR.jobTitle}
            photo={AUTHOR.photo}
            family={AUTHOR.family}
            links={[
              AUTHOR.instagramUrl && { href: AUTHOR.instagramUrl, label: `Instagram ${AUTHOR.instagramHandle}` },
              AUTHOR.githubUrl && { href: AUTHOR.githubUrl, label: 'GitHub' },
              AUTHOR.websiteUrl && { href: AUTHOR.websiteUrl, label: 'Portfolio' },
              AUTHOR.whatsappUrl && { href: AUTHOR.whatsappUrl, label: `WhatsApp ${AUTHOR.whatsappDisplay}` }
            ].filter(Boolean)}
          >
            {(AUTHOR.bioHighlights || []).length > 0 && (
              <ul className="person-highlights">
                {AUTHOR.bioHighlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </PersonCard>
        </div>
      </section>

      <PrestasiSection />

      <section id="lisensi" className="about-section">
        <h2>Lisensi &amp; Hak Cipta Terbuka</h2>
        <p>
          Seluruh materi dan Paket Soal di portal ini dibagikan di bawah lisensi{' '}
          <a href={ORGANIZATION.licenseUrl} target="_blank" rel="noopener noreferrer">
            Creative Commons Attribution 4.0 International ({ORGANIZATION.licenseName})
          </a>{' '}
          dengan atribusi kepada <strong>{ORGANIZATION.name}</strong> (serta sumber kompetisi asli bila tercantum).
        </p>
      </section>

      <section className="about-section">
        <h2>Mulai Belajar</h2>
        <div className="home-about-links">
          <Link to="/" className="hub-grade-chip">Materi per kelas</Link>
          <Link to="/daftar-isi" className="hub-grade-chip">Daftar isi per topik</Link>
          <Link to="/rumus" className="hub-grade-chip">Kumpulan rumus</Link>
          <Link to="/tka" className="hub-grade-chip">Latihan TKA</Link>
          <Link to="/olimpiade" className="hub-grade-chip">Olimpiade</Link>
          <Link to="/paket-soal" className="hub-grade-chip">Paket soal</Link>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
