import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileCheck2, Trophy, Sigma, ClipboardCheck, Home } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { SITE_NAME } from '../utils/seoRoutes';

const NOT_FOUND_META = {
  title: `Halaman Tidak Ditemukan (404) | ${SITE_NAME}`,
  description: `Halaman yang Anda cari tidak ditemukan di ${SITE_NAME}. Jelajahi materi sekolah, paket soal, rumus, TKA, dan olimpiade gratis.`,
  path: '',
  noindex: true
};

export function NotFoundPage() {
  useDocumentMeta(NOT_FOUND_META);
  return (
    <div className="handbook-container seo-page">
      <section className="info-hero">
        <span className="badge badge-cat-uh" style={{ marginBottom: '0.5rem' }}>404 · Halaman Tidak Ditemukan</span>
        <h1>Alamat Halaman Tidak Tersedia</h1>
        <p style={{ margin: '0 0 1rem' }}>
          Halaman yang Anda tuju mungkin telah dipindahkan atau alamatnya keliru. Silakan pilih bagian belajar di bawah ini:
        </p>
        <Link to="/" className="btn btn-royal" style={{ color: '#fff', textDecoration: 'none' }}>
          <Home size={15} /> Kembali ke Beranda
        </Link>
      </section>

      <div className="hub-ref-grid">
        <Link to="/matematika" className="hub-ref-card">
          <BookOpen size={16} />
          <div>
            <strong>Materi Matematika &amp; Sains</strong>
            <span>Kelas 4 SD – 12 SMA (Kurikulum Merdeka)</span>
          </div>
        </Link>
        <Link to="/paket-soal" className="hub-ref-card">
          <FileCheck2 size={16} />
          <div>
            <strong>Paket Soal Terstruktur</strong>
            <span>Kunci jawaban, pembahasan &amp; rubrik</span>
          </div>
        </Link>
        <Link to="/olimpiade" className="hub-ref-card">
          <Trophy size={16} />
          <div>
            <strong>Pusat Olimpiade</strong>
            <span>OSN, AMC 8/10/12, SASMO, SMO, HKIMO</span>
          </div>
        </Link>
        <Link to="/tka" className="hub-ref-card">
          <ClipboardCheck size={16} />
          <div>
            <strong>Latihan TKA</strong>
            <span>Matematika SD/SMP, IPA SMP &amp; Fisika SMA</span>
          </div>
        </Link>
        <Link to="/rumus" className="hub-ref-card">
          <Sigma size={16} />
          <div>
            <strong>Kumpulan Rumus</strong>
            <span>Referensi cepat KaTeX Kelas 4–12 &amp; AMC</span>
          </div>
        </Link>
        <Link to="/daftar-isi" className="hub-ref-card">
          <BookOpen size={16} />
          <div>
            <strong>Daftar Isi Topik</strong>
            <span>Indeks seluruh bab lintas jenjang</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
