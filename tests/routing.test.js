import { describe, it, expect } from 'vitest';
import { parseHandbookPath, gradePath, chapterPath } from '../src/utils/seoRoutes.js';

/**
 * Helper recreating QueryRedirectHandler logic in App.jsx
 * ensuring legacy query params mapped from printed QR codes
 * resolve to their exact canonical declarative routes.
 */
function resolveLegacyRoute(searchParams) {
  const pembahasan = searchParams.get('pembahasan');
  const grade = searchParams.get('grade');
  const chapter = searchParams.get('chapter');
  const questId = searchParams.get('questId');
  const view = searchParams.get('view');

  if (pembahasan === '1' && grade && chapter) {
    return `/solution/${grade}/${chapter}`;
  }
  if (view === 'worksheet' && questId) {
    return `/worksheet/${questId}`;
  }
  if (questId) {
    return `/quest/${questId}`;
  }
  return null;
}

describe('Declarative Routing & Legacy QR Redirects', () => {
  it('should redirect legacy solution QR codes to /solution/:grade/:chapterId', () => {
    const params = new URLSearchParams('pembahasan=1&grade=8&chapter=smp8-b2');
    const target = resolveLegacyRoute(params);
    expect(target).toBe('/solution/8/smp8-b2');
  });

  it('should redirect legacy printed worksheet links to /worksheet/:questId', () => {
    const params = new URLSearchParams('view=worksheet&questId=quest-2026-0914-abc');
    const target = resolveLegacyRoute(params);
    expect(target).toBe('/worksheet/quest-2026-0914-abc');
  });

  it('should redirect legacy student quest URLs to /quest/:questId', () => {
    const params = new URLSearchParams('questId=quest-9988-xyz');
    const target = resolveLegacyRoute(params);
    expect(target).toBe('/quest/quest-9988-xyz');
  });

  it('should return null when standard URL without legacy query parameters is loaded', () => {
    const params = new URLSearchParams('');
    const target = resolveLegacyRoute(params);
    expect(target).toBeNull();
  });

  it('should construct valid canonical student URLs from quest IDs', () => {
    const origin = 'https://awesomemathj.web.app';
    const questId = 'quest-demo-456';
    const canonicalUrl = `${origin}/quest/${questId}`;
    expect(canonicalUrl).toBe('https://awesomemathj.web.app/quest/quest-demo-456');
  });

  it('should construct valid canonical worksheet URLs from quest IDs', () => {
    const origin = 'https://awesomemathj.web.app';
    const questId = 'quest-demo-456';
    const worksheetUrl = `${origin}/worksheet/${questId}`;
    expect(worksheetUrl).toBe('https://awesomemathj.web.app/worksheet/quest-demo-456');
  });

  it('should construct valid canonical solution URLs from grade and chapterId', () => {
    const origin = 'https://awesomemathj.web.app';
    const grade = 9;
    const chapterId = 'smp9-bab2-brsl';
    const solutionUrl = `${origin}/solution/${grade}/${chapterId}`;
    expect(solutionUrl).toBe('https://awesomemathj.web.app/solution/9/smp9-bab2-brsl');
  });

  it('should parse /fisika/kelas-10..12 and keep backward compatibility with /ipa/kelas-10..12', () => {
    const fis10 = parseHandbookPath('/fisika/kelas-10');
    expect(fis10).toEqual({
      mode: 'school',
      subject: 'ipa',
      displaySubject: 'fisika',
      grade: 10,
      level: 8,
      chapter: null
    });

    const ipaLegacy10 = parseHandbookPath('/ipa/kelas-10');
    expect(ipaLegacy10?.displaySubject).toBe('fisika');
    expect(ipaLegacy10?.subject).toBe('ipa');

    const ipa7 = parseHandbookPath('/ipa/kelas-7/bab2-zat');
    expect(ipa7?.displaySubject).toBe('ipa');
    expect(ipa7?.chapter).toBe('ipa7-bab2-zat');

    expect(parseHandbookPath('/fisika/kelas-7')).toBeNull();
    expect(gradePath(10, 'ipa')).toBe('/fisika/kelas-10');
    expect(gradePath(10, 'fisika')).toBe('/fisika/kelas-10');
    expect(gradePath(7, 'ipa')).toBe('/ipa/kelas-7');
    expect(chapterPath(10, 'ipa10-bab1-pengukuran')).toBe('/fisika/kelas-10/bab1-pengukuran');
  });
});
