/**
 * progress:
 * Progres belajar mandiri pengunjung publik, disimpan di perangkat (localStorage).
 * Tanpa akun: siapa pun bisa belajar dan progres tetap tersimpan di browser yang sama.
 * Jika pengguna masuk di /akun, progres ini disinkronkan dua arah dengan Firestore `users/{uid}`.
 */
const PROGRESS_KEY = 'awesomemathj_progress_v1';
export const PROGRESS_EVENT = 'awesomemathj:progress';

export const STUDY_STATE_KEY = 'duta_study_state_v1';
export const STUDY_STATE_EVENT = 'duta:study-state';
export const MAX_RECENT_ITEMS = 3;

const EMPTY_STUDY_STATE = {
  profile: { targetLevel: '', targetCompetitions: [], school: '' },
  papers: {},
  bookmarks: {},
  recent: [],
  updatedAt: null
};

function hasStorage() {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

function emitEvent(name) {
  if (typeof window === 'undefined') return;
  try {
    window.dispatchEvent(new CustomEvent(name));
  } catch {
    // Abaikan di lingkungan tanpa window/CustomEvent
  }
}

export function getProgress() {
  if (!hasStorage()) return {};
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/** Simpan hasil latihan satu bab; nilai terbaik dipertahankan. */
export function saveChapterResult(chapterId, result) {
  if (!chapterId) return getProgress();
  const progress = getProgress();
  const previous = progress[chapterId];
  const best = previous && previous.bestScore > result.score ? previous.bestScore : result.score;
  progress[chapterId] = { ...result, bestScore: best, completedAt: new Date().toISOString() };
  if (hasStorage()) {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch {
      // Penyimpanan diblokir (mode privat): progres hanya berlaku selama sesi ini
    }
  }
  emitEvent(PROGRESS_EVENT);
  return progress;
}

export function getStudyState() {
  if (!hasStorage()) return { ...EMPTY_STUDY_STATE, profile: { ...EMPTY_STUDY_STATE.profile }, papers: {}, bookmarks: {}, recent: [] };
  try {
    const raw = localStorage.getItem(STUDY_STATE_KEY);
    if (!raw) return { ...EMPTY_STUDY_STATE, profile: { ...EMPTY_STUDY_STATE.profile }, papers: {}, bookmarks: {}, recent: [] };
    const parsed = JSON.parse(raw);
    return {
      profile: {
        targetLevel: parsed?.profile?.targetLevel || '',
        targetCompetitions: Array.isArray(parsed?.profile?.targetCompetitions) ? parsed.profile.targetCompetitions : [],
        school: parsed?.profile?.school || ''
      },
      papers: parsed?.papers && typeof parsed.papers === 'object' ? parsed.papers : {},
      bookmarks: parsed?.bookmarks && typeof parsed.bookmarks === 'object' ? parsed.bookmarks : {},
      recent: Array.isArray(parsed?.recent) ? parsed.recent.slice(0, MAX_RECENT_ITEMS) : [],
      updatedAt: parsed?.updatedAt || null
    };
  } catch {
    return { ...EMPTY_STUDY_STATE, profile: { ...EMPTY_STUDY_STATE.profile }, papers: {}, bookmarks: {}, recent: [] };
  }
}

export function saveStudyState(nextState, { silent = false } = {}) {
  const normalized = {
    profile: {
      targetLevel: nextState?.profile?.targetLevel || '',
      targetCompetitions: Array.isArray(nextState?.profile?.targetCompetitions) ? nextState.profile.targetCompetitions : [],
      school: nextState?.profile?.school || ''
    },
    papers: nextState?.papers || {},
    bookmarks: nextState?.bookmarks || {},
    recent: Array.isArray(nextState?.recent) ? nextState.recent.slice(0, MAX_RECENT_ITEMS) : [],
    updatedAt: nextState?.updatedAt || new Date().toISOString()
  };
  if (hasStorage()) {
    try {
      localStorage.setItem(STUDY_STATE_KEY, JSON.stringify(normalized));
    } catch {
      // Abaikan bila storage penuh/diblokir
    }
  }
  if (!silent) emitEvent(STUDY_STATE_EVENT);
  return normalized;
}

export function getPaperProgress(paperId) {
  if (!paperId) return null;
  return getStudyState().papers[paperId] || null;
}

export function updatePaperProgress(paperId, patch) {
  if (!paperId) return getStudyState();
  const state = getStudyState();
  const prev = state.papers[paperId] || {
    completed: false,
    bookmarked: false,
    earnedMarks: 0,
    totalMarks: 0,
    checkedRubrics: {},
    lastVisitedAt: null
  };
  const nextPaper = {
    ...prev,
    ...patch,
    lastVisitedAt: patch?.lastVisitedAt || new Date().toISOString()
  };
  return saveStudyState({
    ...state,
    papers: { ...state.papers, [paperId]: nextPaper },
    updatedAt: new Date().toISOString()
  });
}

export function isBookmarked(path) {
  if (!path) return false;
  return Boolean(getStudyState().bookmarks[path]);
}

export function toggleBookmark({ path, title, type = 'paper', meta = '' }) {
  if (!path) return false;
  const state = getStudyState();
  const nextBookmarks = { ...state.bookmarks };
  let saved;
  if (nextBookmarks[path]) {
    delete nextBookmarks[path];
    saved = false;
  } else {
    nextBookmarks[path] = { path, title, type, meta, savedAt: new Date().toISOString() };
    saved = true;
  }
  saveStudyState({ ...state, bookmarks: nextBookmarks, updatedAt: new Date().toISOString() });
  return saved;
}

export function recordRecentActivity({ path, title, type = 'paper', meta = '' }) {
  if (!path || !title) return getStudyState();
  const state = getStudyState();
  const entry = { path, title, type, meta, visitedAt: new Date().toISOString() };
  const nextRecent = [entry, ...state.recent.filter((item) => item.path !== path)].slice(0, MAX_RECENT_ITEMS);
  return saveStudyState({ ...state, recent: nextRecent, updatedAt: new Date().toISOString() });
}

export function updateStudentProfile(patch) {
  const state = getStudyState();
  return saveStudyState({
    ...state,
    profile: { ...state.profile, ...patch },
    updatedAt: new Date().toISOString()
  });
}

/**
 * Menggabungkan progres lokal dan cloud secara deterministik:
 * - Bab: mempertahankan bestScore tertinggi
 * - Paket Soal: menyatukan checkedRubrics, mengambil earnedMarks tertinggi, OR untuk completed/bookmarked
 * - Bookmark & Terakhir Dipelajari: union dan urutkan terbaru
 */
export function mergeStudyStates(localBundle = {}, remoteBundle = {}) {
  const localChapters = localBundle.chapters || {};
  const remoteChapters = remoteBundle.chapters || {};
  const mergedChapters = { ...remoteChapters };
  for (const [id, ch] of Object.entries(localChapters)) {
    const prev = mergedChapters[id];
    if (!prev || (ch?.bestScore ?? 0) >= (prev?.bestScore ?? 0)) {
      mergedChapters[id] = {
        ...prev,
        ...ch,
        bestScore: Math.max(ch?.bestScore ?? 0, prev?.bestScore ?? 0)
      };
    }
  }

  const localState = localBundle.study || EMPTY_STUDY_STATE;
  const remoteState = remoteBundle.study || EMPTY_STUDY_STATE;

  const localTime = Date.parse(localState.updatedAt || '') || 0;
  const remoteTime = Date.parse(remoteState.updatedAt || '') || 0;
  const newerProfile = localTime >= remoteTime ? localState.profile : remoteState.profile;
  const olderProfile = localTime >= remoteTime ? remoteState.profile : localState.profile;
  const mergedProfile = {
    targetLevel: newerProfile?.targetLevel || olderProfile?.targetLevel || '',
    targetCompetitions: (newerProfile?.targetCompetitions?.length ? newerProfile.targetCompetitions : olderProfile?.targetCompetitions) || [],
    school: newerProfile?.school || olderProfile?.school || ''
  };

  const mergedPapers = {};
  const allPaperIds = new Set([
    ...Object.keys(localState.papers || {}),
    ...Object.keys(remoteState.papers || {})
  ]);
  for (const pid of allPaperIds) {
    const lp = localState.papers?.[pid];
    const rp = remoteState.papers?.[pid];
    if (!lp) { mergedPapers[pid] = rp; continue; }
    if (!rp) { mergedPapers[pid] = lp; continue; }
    const checkedRubrics = { ...(rp.checkedRubrics || {}), ...(lp.checkedRubrics || {}) };
    const lpTime = lp.lastVisitedAt || '';
    const rpTime = rp.lastVisitedAt || '';
    const responses = lpTime >= rpTime
      ? { ...(rp.responses || {}), ...(lp.responses || {}) }
      : { ...(lp.responses || {}), ...(rp.responses || {}) };
    const checkedParts = { ...(rp.checkedParts || {}), ...(lp.checkedParts || {}) };
    mergedPapers[pid] = {
      ...rp,
      ...lp,
      completed: Boolean(lp.completed || rp.completed),
      bookmarked: Boolean(lp.bookmarked || rp.bookmarked),
      earnedMarks: Math.max(lp.earnedMarks || 0, rp.earnedMarks || 0),
      totalMarks: Math.max(lp.totalMarks || 0, rp.totalMarks || 0),
      checkedRubrics,
      ...(Object.keys(responses).length ? { responses } : {}),
      ...(Object.keys(checkedParts).length ? { checkedParts } : {}),
      lastVisitedAt: lpTime >= rpTime ? lp.lastVisitedAt : rp.lastVisitedAt
    };
  }

  const mergedBookmarks = { ...(remoteState.bookmarks || {}), ...(localState.bookmarks || {}) };

  const recentMap = new Map();
  for (const item of [...(localState.recent || []), ...(remoteState.recent || [])]) {
    if (!item?.path) continue;
    const prev = recentMap.get(item.path);
    if (!prev || (item.visitedAt || '') > (prev.visitedAt || '')) {
      recentMap.set(item.path, item);
    }
  }
  const mergedRecent = [...recentMap.values()]
    .sort((a, b) => String(b.visitedAt || '').localeCompare(String(a.visitedAt || '')))
    .slice(0, MAX_RECENT_ITEMS);

  return {
    chapters: mergedChapters,
    study: {
      profile: mergedProfile,
      papers: mergedPapers,
      bookmarks: mergedBookmarks,
      recent: mergedRecent,
      updatedAt: new Date(Math.max(localTime, remoteTime, Date.now())).toISOString()
    }
  };
}

export function replaceAllLocalProgress({ chapters = {}, study = EMPTY_STUDY_STATE }) {
  if (hasStorage()) {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(chapters));
    } catch {
      // Abaikan
    }
  }
  saveStudyState(study, { silent: true });
  emitEvent(PROGRESS_EVENT);
  emitEvent(STUDY_STATE_EVENT);
}
