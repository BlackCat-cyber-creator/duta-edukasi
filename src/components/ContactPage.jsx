import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { ORGANIZATION, FOUNDER } from '../data/siteInfo';
import { CONTACT_META } from '../utils/seoMeta';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ContactPage() {
  useDocumentMeta(CONTACT_META);
  return (
    <div className="handbook-container seo-page">
      <nav className="seo-breadcrumb" aria-label="Navigasi">
        <Link to="/">Beranda</Link> › <span>Kontak &amp; Lokasi</span>
      </nav>

      <section className="info-hero">
        <h1>Kontak &amp; Lokasi {ORGANIZATION.legalName}</h1>
        <p style={{ margin: 0 }}>
          Hubungi kami untuk konsultasi jadwal kelas reguler, les privat Matematika &amp; Fisika, atau program
          pembinaan Olimpiade Matematika/Fisika di Pontianak maupun daring.
        </p>
      </section>

      <div className="info-grid">
        <article className="info-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem', color: 'var(--brand-crimson)' }}>
            <MapPin size={20} />
            <h2 style={{ fontSize: '1.08rem', margin: 0 }}>Alamat Bimbel</h2>
          </div>
          <p style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>{ORGANIZATION.legalName}</p>
          <p style={{ fontSize: '0.92rem', marginBottom: '0.75rem' }}>{ORGANIZATION.fullAddress}</p>
          <a
            href={ORGANIZATION.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ fontSize: '0.85rem', textDecoration: 'none' }}
          >
            Buka di Google Maps <ExternalLink size={14} />
          </a>
        </article>

        <article className="info-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem', color: '#15803D' }}>
            <Phone size={20} />
            <h2 style={{ fontSize: '1.08rem', margin: 0 }}>WhatsApp &amp; Telepon Resmi</h2>
          </div>
          <p style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-navy)', marginBottom: '0.35rem' }}>
            {ORGANIZATION.whatsappDisplay}
          </p>
          <p style={{ fontSize: '0.9rem', marginBottom: '0.85rem' }}>
            Pendiri &amp; Pembina: <Link to="/pendiri">{FOUNDER.name}</Link> ({FOUNDER.instagramHandle})
          </p>
          <a
            href={ORGANIZATION.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={17} />
            Chat via WhatsApp Sekarang
          </a>
        </article>
      </div>

      <h2>Peta Lokasi Google Maps</h2>
      <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-subtle)', background: '#fff' }}>
        <iframe
          title={`Lokasi ${ORGANIZATION.legalName}`}
          src={`https://maps.google.com/maps?q=${ORGANIZATION.mapsEmbedQuery}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="360"
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default ContactPage;
