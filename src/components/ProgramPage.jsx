import React from 'react';
import { Link } from 'react-router-dom';
import { PROGRAMS, FAQS, ORGANIZATION } from '../data/siteInfo';
import { PROGRAM_META } from '../utils/seoMeta';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { WhatsappBanner } from './WhatsappCta';

export function ProgramPage() {
  useDocumentMeta(PROGRAM_META);
  return (
    <div className="handbook-container seo-page">
      <nav className="seo-breadcrumb" aria-label="Navigasi">
        <Link to="/">Beranda</Link> › <span>Program Bimbel</span>
      </nav>

      <section className="info-hero">
        <h1>Program Bimbingan Belajar {ORGANIZATION.name}</h1>
        <p style={{ margin: 0 }}>
          {ORGANIZATION.legalName} ({ORGANIZATION.shortAddress}) menyelenggarakan kelas tatap muka dan daring untuk
          mata pelajaran sekolah (Matematika, IPA, Fisika) serta pembinaan Olimpiade Matematika &amp; Fisika.
        </p>
      </section>

      <div className="info-grid">
        {PROGRAMS.map((prog) => (
          <article key={prog.id} className="info-card">
            <span className="badge badge-cat-pas" style={{ marginBottom: '0.5rem' }}>{prog.audience}</span>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{prog.title}</h2>
            <p style={{ fontSize: '0.9rem' }}>{prog.summary}</p>
            <ul style={{ paddingLeft: '1.1rem', fontSize: '0.88rem', margin: '0.5rem 0 0' }}>
              {prog.points.map((pt) => (
                <li key={pt} style={{ marginBottom: '0.3rem' }}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h2>Pertanyaan Umum (FAQ)</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {FAQS.map((item) => (
          <article key={item.question} className="info-card" style={{ padding: '1rem 1.2rem' }}>
            <h3 style={{ fontSize: '0.98rem', color: 'var(--brand-navy)', marginBottom: '0.35rem' }}>{item.question}</h3>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>{item.answer}</p>
          </article>
        ))}
      </div>

      <WhatsappBanner
        title="Siap Bergabung atau Konsultasi Penentuan Kelas?"
        subtitle={`Hubungi admin ${ORGANIZATION.name} melalui WhatsApp ${ORGANIZATION.whatsappDisplay} untuk jadwal terbaru dan uji coba gratis.`}
      />
    </div>
  );
}

export default ProgramPage;
