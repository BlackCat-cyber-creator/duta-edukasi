export const GA_MEASUREMENT_ID = 'G-G2BZYXCEFM';

let lastTracked = '';

/**
 * Mengirim event `page_view` GA4 pada navigasi SPA di produksi (`dutaedukasi.vercel.app`).
 */
export function trackPageView(pagePath, pageTitle) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  if (window.location.hostname !== 'dutaedukasi.vercel.app') return;
  const key = `${pagePath}::${pageTitle}`;
  if (lastTracked === key) return;
  lastTracked = key;
  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href
  });
}
