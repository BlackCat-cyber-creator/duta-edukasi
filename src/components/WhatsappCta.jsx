import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { ORGANIZATION } from '../data/siteInfo';

export function WhatsappBanner({
  title = 'Butuh Bimbingan Matematika, Fisika, atau Persiapan Olimpiade?',
  subtitle = `Konsultasi kelas reguler, privat, atau pembinaan OSN / AMC bersama tim ${ORGANIZATION.name} (${ORGANIZATION.shortAddress}).`
}) {
  return (
    <aside className="cta-banner no-print" aria-label="Konsultasi Duta e-dukasi">
      <div style={{ flex: '1 1 280px' }}>
        <div style={{ fontWeight: 800, color: 'var(--brand-navy)', fontSize: '1.02rem' }}>{title}</div>
        <p style={{ margin: '0.25rem 0 0', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{subtitle}</p>
      </div>
      <div style={{ display: 'flex', gap: '0.55rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Link className="btn btn-outline" to="/program" style={{ fontSize: '0.84rem' }}>
          Lihat Program
        </Link>
        <a
          className="btn-whatsapp"
          href={ORGANIZATION.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={16} />
          Daftar / Tanya via WhatsApp
        </a>
      </div>
    </aside>
  );
}

export function FloatingWhatsappButton() {
  return (
    <a
      className="wa-float-btn no-print"
      href={ORGANIZATION.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Tanya atau daftar via WhatsApp ${ORGANIZATION.whatsappDisplay}`}
      title={`WhatsApp ${ORGANIZATION.name}: ${ORGANIZATION.whatsappDisplay}`}
    >
      <MessageCircle size={18} />
      <span className="wa-float-label">Daftar / Tanya WA</span>
    </a>
  );
}
