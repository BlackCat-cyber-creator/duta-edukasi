import React from 'react';
import { Trophy, ExternalLink, Lock } from 'lucide-react';
import { PRESTASI_DATA, parseInstagramPost, isPublicInstagramUrl } from '../../data/siteInfo';
import { InstagramEmbed } from './InstagramEmbed';

function medalClass(award) {
  const s = String(award || '').toLowerCase();
  if (s.includes('emas') || s.includes('gold') || s.includes('winner') || s.includes('champion') || s.includes('juara 1')) return 'badge-medal-gold';
  if (s.includes('perak') || s.includes('silver') || s.includes('juara 2')) return 'badge-medal-silver';
  return 'badge-medal-bronze';
}

const LEVEL_ORDER = ['Internasional', 'Nasional', 'Provinsi'];

/** Foto prestasi: file lokal (`photo`) bila ada, jika tidak foto dari unggahan Instagram publik. */
function PrestasiMedia({ item }) {
  if (item.photo) {
    return (
      <img
        className="prestasi-photo"
        src={item.photo}
        alt={`${item.studentName} — ${item.award}`}
        loading="lazy"
        decoding="async"
      />
    );
  }
  const post = parseInstagramPost(item.sourceUrl);
  if (post && isPublicInstagramUrl(item.sourceUrl)) {
    return <InstagramEmbed shortcode={post.shortcode} label={`Foto ${item.studentName} di Instagram`} />;
  }
  return null;
}

function PrestasiSource({ item }) {
  if (!item.sourceUrl) return null;
  if (!isPublicInstagramUrl(item.sourceUrl)) {
    // Akun privat: tautan hanya terbuka bagi pengikut, jadi tampilkan sebagai keterangan
    return (
      <span className="prestasi-source prestasi-source-private" title="Unggahan ini ada di akun Instagram privat">
        <Lock size={12} /> Dokumentasi: @{parseInstagramPost(item.sourceUrl)?.account || 'instagram'} (akun Instagram privat)
      </span>
    );
  }
  return (
    <a className="prestasi-source" href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
      Sumber: {item.sourceLabel} <ExternalLink size={12} />
    </a>
  );
}

export function PrestasiCard({ item }) {
  return (
    <article className="info-card prestasi-card">
      <PrestasiMedia item={item} />
      <div className="prestasi-card-badges">
        <span className={`badge ${medalClass(item.award)}`}>
          <Trophy size={13} /> {item.award}
        </span>
        <span className="badge badge-subtle">{item.year} · {item.level}</span>
      </div>
      <h3 className="prestasi-name">
        {item.studentName}
        {item.relation && <span className="prestasi-relation">{item.relation}</span>}
      </h3>
      <p className="prestasi-school">{item.school}</p>
      <p className="prestasi-competition">{item.competition}</p>
      {item.notes && <p className="prestasi-notes">{item.notes}</p>}
      <PrestasiSource item={item} />
    </article>
  );
}

/** Daftar prestasi siswa (bagian dari halaman /tentang). */
export function PrestasiSection({ items = PRESTASI_DATA }) {
  const counts = LEVEL_ORDER.map((level) => [level, items.filter((i) => i.level === level).length]).filter(([, n]) => n > 0);
  return (
    <section id="prestasi" className="about-section" aria-labelledby="prestasi-heading">
      <h2 id="prestasi-heading">Prestasi Siswa &amp; Alumni</h2>
      <p>
        Catatan pencapaian siswa binaan di bidang Matematika dan Sains. Setiap entri memuat rujukan dokumentasi
        publik atau arsip pembinaan.
      </p>
      <div className="prestasi-summary" aria-label="Ringkasan prestasi">
        <span className="badge badge-subtle">{items.length} catatan</span>
        {counts.map(([level, n]) => (
          <span key={level} className="badge badge-subtle">{n} {level}</span>
        ))}
      </div>
      <div className="info-grid prestasi-grid">
        {items.map((item) => <PrestasiCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}

export default PrestasiSection;
