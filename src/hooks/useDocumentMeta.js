import { useEffect } from 'react';
import { SITE_URL } from '../utils/seoRoutes';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Menyamakan judul, deskripsi, canonical, bahasa dokumen, dan tag Open Graph dengan halaman
 * yang sedang dibuka (navigasi di dalam aplikasi tidak memuat ulang HTML).
 */
export function useDocumentMeta(meta) {
  const { title, description, path, lang, ogImage } = meta || {};
  useEffect(() => {
    if (!title || typeof document === 'undefined') return;
    const docLang = lang || 'id';
    const url = `${SITE_URL}${path || '/'}`;
    const imgUrl = `${SITE_URL}${ogImage || '/brand/og/default.png'}`;
    document.title = title;
    document.documentElement.lang = docLang;
    setMeta('name', 'description', description || '');
    setMeta('property', 'og:locale', docLang === 'en' ? 'en_US' : 'id_ID');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description || '');
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', imgUrl);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description || '');
    setMeta('name', 'twitter:image', imgUrl);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, path, lang, ogImage]);
}

export default useDocumentMeta;
