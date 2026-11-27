import { useEffect } from 'react';
import { SITE_URL } from '../utils/seoRoutes';
import { trackPageView } from '../utils/analytics';

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
 * Menyamakan judul, deskripsi, robots, canonical, hreflang, bahasa dokumen,
 * dan tag Open Graph / Twitter dengan halaman yang sedang dibuka.
 */
export function useDocumentMeta(meta) {
  const { title, description, path, lang, ogImage, ogType, noindex, alternates } = meta || {};
  const alternatesKey = Array.isArray(alternates)
    ? alternates.map((a) => `${a.hreflang}:${a.path}`).join('|')
    : '';

  useEffect(() => {
    if (!title || typeof document === 'undefined') return;
    const docLang = lang || 'id';
    const hasPath = typeof path === 'string' && path.length > 0;
    const url = hasPath ? `${SITE_URL}${path === '/' ? '/' : path}` : (typeof window !== 'undefined' ? window.location.href : SITE_URL);
    const imgUrl = `${SITE_URL}${ogImage || '/brand/og/default.png'}`;

    document.title = title;
    document.documentElement.lang = docLang;

    setMeta('name', 'description', description || '');
    setMeta(
      'name',
      'robots',
      noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
    setMeta('property', 'og:type', ogType || 'website');
    setMeta('property', 'og:locale', docLang === 'en' ? 'en_US' : 'id_ID');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description || '');
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', imgUrl);
    setMeta('property', 'og:image:alt', title);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description || '');
    setMeta('name', 'twitter:image', imgUrl);
    setMeta('name', 'twitter:image:alt', title);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (noindex && !hasPath) {
      if (canonical) canonical.remove();
    } else {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', url);
    }

    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    if (!noindex && hasPath) {
      const altList = Array.isArray(alternates) && alternates.length
        ? alternates
        : [
            { hreflang: docLang, path },
            { hreflang: 'x-default', path }
          ];
      for (const alt of altList) {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', alt.hreflang);
        link.setAttribute('href', `${SITE_URL}${alt.path === '/' ? '/' : alt.path}`);
        document.head.appendChild(link);
      }
    }

    const currentPath = typeof window !== 'undefined'
      ? `${window.location.pathname}${window.location.search}`
      : (path || '/');
    trackPageView(currentPath, title);
  }, [title, description, path, lang, ogImage, ogType, noindex, alternatesKey, alternates]);
}

export default useDocumentMeta;
