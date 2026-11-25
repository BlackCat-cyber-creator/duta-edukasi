import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { curriculumFor, SUBJECT_LABELS } from '../data/curriculumData';
import { useGradeData } from '../hooks/useCurriculum';
import { 
  AMC_LEVELS_METADATA, 
  ALL_AMC_CHAPTERS_INDEX, 
  getAmcModuleData, 
  getLoadedAmcModuleData 
} from '../data/amc';
import { ChapterArticle } from './handbook/ChapterArticle';
import { ChapterNav } from './handbook/ChapterNav';
import { RelatedChapters } from './handbook/RelatedChapters';
import { ChapterQuiz } from './handbook/ChapterQuiz';
import { AmcChapterView } from './handbook/AmcChapterView';
import { SiteSearch } from './SiteSearch';
import { 
  BookOpen, 
  Search, 
  Printer, 
  Share2, 
  Check, 
  X,
  Compass,
  Loader2,
  FlaskConical,
  Atom,
  Sigma,
  Microscope,
  Dna,
  ChevronLeft
} from 'lucide-react';
import { getProgress, PROGRESS_EVENT, recordRecentActivity } from '../utils/progress';
import { getCp2025Note } from '../data/cp2025Mapping';
import { handbookPath, parseHandbookPath } from '../utils/seoRoutes';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { amcChapterMeta, amcLevelMeta, chapterMeta, gradeMeta } from '../utils/seoMeta';

/** Lima mata pelajaran sekolah: urutan tab, ikon spesifik, dan id tombol (id lama tetap dipertahankan). */
const SCHOOL_SUBJECT_TABS = [
  { id: 'matematika', buttonId: 'btn-mode-school', label: 'Matematika', Icon: Sigma },
  { id: 'ipa', buttonId: 'btn-mode-ipa', label: 'IPA (SD–SMP)', Icon: Microscope },
  { id: 'fisika', buttonId: 'btn-mode-fisika', label: 'Fisika (SMA)', Icon: Atom },
  { id: 'kimia', buttonId: 'btn-mode-kimia', label: 'Kimia (SMA)', Icon: FlaskConical },
  { id: 'biologi', buttonId: 'btn-mode-biologi', label: 'Biologi (SMA)', Icon: Dna }
];

const SUBJECT_HERO = {
  matematika: { title: 'Matematika Sekolah', desc: 'Ringkasan materi per subbab, rumus penting, contoh soal, dan latihan interaktif Kelas 4–12.' },
  ipa: { title: 'IPA Terpadu (SD & SMP)', desc: 'Ringkasan konsep, istilah penting, contoh soal, dan latihan interaktif IPA Kelas 4–9.' },
  fisika: { title: 'Fisika SMA', desc: 'Ringkasan konsep, rumus kunci KaTeX, contoh soal, dan latihan interaktif Fisika Kelas 10–12.' },
  kimia: { title: 'Kimia SMA', desc: 'Ringkasan konsep, rumus dan persamaan reaksi, contoh soal, dan latihan interaktif Kimia Kelas 10–12.' },
  biologi: { title: 'Biologi SMA', desc: 'Ringkasan konsep, istilah penting, contoh soal, dan latihan interaktif Biologi Kelas 10–12.' }
};

/**
 * Pure helper to parse handbook search parameters with backward compatibility.
 */
function parseHandbookParams(searchParams) {
  const params = searchParams instanceof URLSearchParams 
    ? searchParams 
    : new URLSearchParams(typeof searchParams === 'string' ? searchParams : '');

  const modeParam = params.get('mode');
  const isAmc = modeParam === 'amc';
  const rawGrade = Number(params.get('grade'));
  const grade = (rawGrade >= 4 && rawGrade <= 12) ? rawGrade : 4;
  const rawLevel = Number(params.get('level'));
  const level = [8, 10, 12].includes(rawLevel) ? rawLevel : 8;
  const chapter = params.get('chapter') || null;

  return {
    mode: isAmc ? 'amc' : 'school',
    isAmc,
    grade,
    level,
    chapter
  };
}

/**
 * Alamat rapi buku saku (lihat src/utils/seoRoutes.js), mis. /matematika/kelas-4/bab2-pecahan.
 */
function buildHandbookUrl(state) {
  return handbookPath(state);
}

export function PublicHandbook({ onLaunchPractice, onPrintQuest }) {
  const location = useLocation();
  const navigate = useNavigate();

  // State dibaca dari alamat rapi (/matematika/kelas-4/...); alamat lama ?grade=... tetap didukung
  const route = useMemo(
    () => parseHandbookPath(location.pathname) || parseHandbookParams(location.search),
    [location.pathname, location.search]
  );
  const isAmcMode = route.mode === 'amc';
  // Mata pelajaran kurikulum: 'matematika' (Kelas 4–12) atau 'ipa' (data IPA 4–9 & Fisika 10–12)
  const subject = route.subject || 'matematika';
  const displaySubject = route.displaySubject || (subject === 'ipa' && route.grade >= 10 ? 'fisika' : subject);
  const subjectIndex = curriculumFor(subject);
  const selectedGrade = route.grade;
  const selectedAmcLevel = route.level;
  const activeChapterParam = route.chapter;

  const goTo = (state) => navigate(handbookPath(state));

  // Filter and search states
  const [selectedTrackFilter, setSelectedTrackFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedLinkNotification, setCopiedLinkNotification] = useState(false);
  const [isMobileChaptersOpen, setIsMobileChaptersOpen] = useState(false);

  // Dynamic Grade Data Loader (Kurikulum Merdeka)
  const { gradeData: currentGradeData, fullGradeData, loading: isGradeLoading } = useGradeData(selectedGrade, subject);
  // Progres latihan mandiri tersimpan di perangkat pengunjung (tanpa akun)
  const [studentProgress, setStudentProgress] = useState(() => getProgress());

  useEffect(() => {
    const refresh = () => setStudentProgress(getProgress());
    window.addEventListener(PROGRESS_EVENT, refresh);
    return () => window.removeEventListener(PROGRESS_EVENT, refresh);
  }, []);

  // Dynamic AMC Module Data Loader (AMC 8, AMC 10, AMC 12)
  const [currentLevelState, setCurrentLevelState] = useState(selectedAmcLevel);
  const [amcModuleData, setAmcModuleData] = useState(() => getLoadedAmcModuleData(selectedAmcLevel));
  const [isAmcLoading, setIsAmcLoading] = useState(() => !getLoadedAmcModuleData(selectedAmcLevel));

  if (currentLevelState !== selectedAmcLevel) {
    setCurrentLevelState(selectedAmcLevel);
    const cached = getLoadedAmcModuleData(selectedAmcLevel);
    if (cached) {
      setAmcModuleData(cached);
      setIsAmcLoading(false);
    } else {
      setAmcModuleData(null);
      setIsAmcLoading(true);
    }
  }

  useEffect(() => {
    if (!isAmcMode) return;
    let active = true;
    if (amcModuleData && amcModuleData.level === selectedAmcLevel) {
      return;
    }

    getAmcModuleData(selectedAmcLevel)
      .then((data) => {
        if (active) {
          setAmcModuleData(data);
          setIsAmcLoading(false);
        }
      })
      .catch((err) => {
        console.error('Failed to load AMC module data:', err);
        if (active) setIsAmcLoading(false);
      });

    return () => { active = false; };
  }, [isAmcMode, selectedAmcLevel, amcModuleData]);

  // ----------------------------------------------------
  // SCHOOL MODE DATA PIPELINE
  // ----------------------------------------------------
  const filteredChaptersByTrack = useMemo(() => {
    if (!currentGradeData?.chapters) return [];
    if (selectedTrackFilter === "ALL") return currentGradeData.chapters;
    return currentGradeData.chapters.filter((ch) => {
      const chTrack = (ch.track || "").toUpperCase();
      return chTrack === selectedTrackFilter.toUpperCase();
    });
  }, [currentGradeData, selectedTrackFilter]);

  const displayedChapters = useMemo(() => {
    if (!searchQuery.trim()) return filteredChaptersByTrack;
    const q = searchQuery.toLowerCase();
    return filteredChaptersByTrack.filter((ch) => {
      const matchTitle = ch.title.toLowerCase().includes(q);
      const matchConcept = ch.concepts?.some((c) => c.toLowerCase().includes(q));
      return matchTitle || matchConcept;
    });
  }, [filteredChaptersByTrack, searchQuery]);

  const currentChapter = useMemo(() => {
    if (!currentGradeData?.chapters || currentGradeData.chapters.length === 0) return null;
    if (activeChapterParam) {
      const found = currentGradeData.chapters.find((c) => c.id === activeChapterParam);
      if (found) return found;
    }
    return currentGradeData.chapters[0];
  }, [currentGradeData, activeChapterParam]);

  const fullQuestionsForChapter = useMemo(() => {
    if (fullGradeData && fullGradeData.chapters) {
      const foundFull = fullGradeData.chapters.find((c) => c.id === currentChapter?.id);
      if (foundFull && foundFull.questions) {
        return foundFull.questions;
      }
    }
    return currentChapter?.questions || [];
  }, [fullGradeData, currentChapter]);

  const trackCounts = useMemo(() => {
    if (!currentGradeData?.chapters) return { all: 0, wajib: 0, lanjut: 0 };
    const all = currentGradeData.chapters.length;
    const wajib = currentGradeData.chapters.filter(ch => (ch.track || '').toUpperCase() === 'WAJIB').length;
    const lanjut = currentGradeData.chapters.filter(ch => (ch.track || '').toUpperCase() === 'LANJUT').length;
    return { all, wajib, lanjut };
  }, [currentGradeData]);

  // ----------------------------------------------------
  // AMC COMPETITION MODE DATA PIPELINE
  // ----------------------------------------------------
  const currentAmcLevelMeta = useMemo(() => {
    return AMC_LEVELS_METADATA.find(m => m.level === selectedAmcLevel) || AMC_LEVELS_METADATA[0];
  }, [selectedAmcLevel]);

  const amcLevelChapters = useMemo(() => {
    const indexChapters = ALL_AMC_CHAPTERS_INDEX.filter((c) => c.level === selectedAmcLevel);
    if (amcModuleData && amcModuleData.level === selectedAmcLevel && amcModuleData.chapters) {
      return amcModuleData.chapters.map((ch) => {
        const meta = indexChapters.find((ic) => ic.id === ch.id);
        return {
          ...ch,
          level: selectedAmcLevel,
          domain: ch.domain || meta?.domain || '',
          concepts: (ch.concepts && ch.concepts.length > 0) ? ch.concepts : (meta?.concepts || []),
          questionCount: (ch.questions && ch.questions.length) || meta?.questionCount || 6
        };
      });
    }
    return indexChapters;
  }, [amcModuleData, selectedAmcLevel]);

  const displayedAmcChapters = useMemo(() => {
    if (!searchQuery.trim()) return amcLevelChapters;
    const q = searchQuery.toLowerCase();
    return amcLevelChapters.filter((ch) => {
      const matchTitle = (ch.title || '').toLowerCase().includes(q);
      const matchDomain = (ch.domain || '').toLowerCase().includes(q);
      const matchConcept = ch.concepts?.some((c) => c.toLowerCase().includes(q));
      return matchTitle || matchDomain || matchConcept;
    });
  }, [amcLevelChapters, searchQuery]);

  const activeAmcChapter = useMemo(() => {
    if (!amcLevelChapters || amcLevelChapters.length === 0) return null;
    if (activeChapterParam) {
      const found = amcLevelChapters.find((c) => c.id === activeChapterParam);
      if (found) return found;
    }
    return amcLevelChapters[0];
  }, [amcLevelChapters, activeChapterParam]);

  // Judul & deskripsi halaman mengikuti bab yang dibuka (sama dengan hasil prerender)
  useDocumentMeta(
    isAmcMode
      ? (activeAmcChapter ? amcChapterMeta(selectedAmcLevel, activeAmcChapter) : amcLevelMeta(selectedAmcLevel))
      : (currentChapter ? chapterMeta(selectedGrade, currentChapter) : gradeMeta(selectedGrade, displaySubject))
  );

  useEffect(() => {
    if (isAmcMode && activeAmcChapter?.id) {
      recordRecentActivity({
        path: handbookPath({ mode: 'amc', level: selectedAmcLevel, chapter: activeAmcChapter.id }),
        title: activeAmcChapter.title,
        type: 'amc',
        meta: `Olimpiade AMC ${selectedAmcLevel}`
      });
    } else if (!isAmcMode && currentChapter?.id) {
      recordRecentActivity({
        path: handbookPath({ mode: 'school', subject: displaySubject, grade: selectedGrade, chapter: currentChapter.id }),
        title: currentChapter.title,
        type: 'chapter',
        meta: `${SUBJECT_LABELS[displaySubject] || 'Materi'} Kelas ${selectedGrade}`
      });
    }
  }, [isAmcMode, activeAmcChapter, currentChapter, selectedAmcLevel, selectedGrade, displaySubject]);

  // ----------------------------------------------------
  // NAVIGATION & MODE SWITCH HANDLERS
  // ----------------------------------------------------
  const handleSwitchToSchoolMode = (nextSubject = 'matematika') => {
    const dataSubject = nextSubject === 'fisika' ? 'ipa' : nextSubject;
    const index = curriculumFor(dataSubject);
    const pool = nextSubject === 'fisika'
      ? index.filter((g) => g.grade >= 10)
      : nextSubject === 'ipa'
        ? index.filter((g) => g.grade <= 9)
        : index; // Matematika 4–12, Kimia dan Biologi 10–12
    const gradeObj = pool.find((g) => g.grade === selectedGrade) || pool[0];
    const firstCh = gradeObj?.chapters?.[0]?.id || '';
    goTo({ mode: 'school', subject: nextSubject, grade: gradeObj.grade, chapter: firstCh });
    setSelectedTrackFilter("ALL");
    setSearchQuery("");
    setIsMobileChaptersOpen(false);
  };

  const handleSelectGrade = (grade) => {
    const gradeObj = subjectIndex.find(g => g.grade === grade);
    const firstCh = gradeObj?.chapters?.[0]?.id || '';
    const nextSubject = subject === 'ipa' ? (grade >= 10 ? 'fisika' : 'ipa') : subject;
    goTo({ mode: 'school', subject: nextSubject, grade, chapter: firstCh });
    setSelectedTrackFilter("ALL");
    setSearchQuery("");
    setIsMobileChaptersOpen(false);
  };

  const handleSelectAmcLevel = (lvl) => {
    const firstCh = ALL_AMC_CHAPTERS_INDEX.find(c => c.level === lvl)?.id || '';
    goTo({ mode: 'amc', level: lvl, chapter: firstCh });
    setSearchQuery("");
    setIsMobileChaptersOpen(false);
  };

  const handleSelectSchoolChapter = (chapterId) => {
    goTo({ mode: 'school', subject: displaySubject, grade: selectedGrade, chapter: chapterId });
    setIsMobileChaptersOpen(false);
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  const handleSelectAmcChapter = (chapterId) => {
    goTo({ mode: 'amc', level: selectedAmcLevel, chapter: chapterId });
    setIsMobileChaptersOpen(false);
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  const handleSelectTrack = (track) => {
    setSelectedTrackFilter(track);
    if (!currentGradeData?.chapters) return;
    const matching = track === 'ALL'
      ? currentGradeData.chapters
      : currentGradeData.chapters.filter(ch => (ch.track || '').toUpperCase() === track.toUpperCase());
    if (matching.length > 0 && (!currentChapter || !matching.some(ch => ch.id === currentChapter.id))) {
      const nextCh = matching[0].id;
      goTo({ mode: 'school', subject: displaySubject, grade: selectedGrade, chapter: nextCh });
    }
  };

  const handleCopyChapterLink = () => {
    const url = `${window.location.origin}${isAmcMode
      ? handbookPath({ mode: 'amc', level: selectedAmcLevel, chapter: activeAmcChapter?.id })
      : handbookPath({ mode: 'school', subject: displaySubject, grade: selectedGrade, chapter: currentChapter?.id })}`;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(url);
    }
    setCopiedLinkNotification(true);
    setTimeout(() => setCopiedLinkNotification(false), 2500);
  };

  return (
    <div className="handbook-container">
      {/* Top Hero Banner */}
      <div className="handbook-hero">
        <h1 className="handbook-hero-title">
          {isAmcMode ? 'Olimpiade Matematika AMC' : (SUBJECT_HERO[displaySubject] || SUBJECT_HERO.matematika).title}
        </h1>
        <p className="handbook-hero-desc">
          {isAmcMode
            ? 'Materi konsep, pembuktian bertahap, dan latihan isian singkat untuk persiapan AMC 8, AMC 10, dan AMC 12.'
            : (SUBJECT_HERO[displaySubject] || SUBJECT_HERO.matematika).desc}
        </p>
      </div>

      <SiteSearch />
      <p className="handbook-quicklinks">
        <Link to="/daftar-isi">Daftar isi semua materi per topik</Link>
        <span aria-hidden="true">·</span>
        <Link to="/rumus">Kumpulan Rumus</Link>
        <span aria-hidden="true">·</span>
        <Link to="/tka">Latihan TKA SD, SMP &amp; SMA</Link>
      </p>

      {isAmcMode ? (
        /* Jalur Olimpiade: kembali ke pusat Olimpiade, bukan bagian dari tab mata pelajaran sekolah */
        <nav className="handbook-breadcrumb" aria-label="Navigasi Olimpiade">
          <Link to="/olimpiade" className="handbook-breadcrumb-back">
            <ChevronLeft size={15} /> Semua Olimpiade
          </Link>
          <span aria-hidden="true">/</span>
          <span>AMC {selectedAmcLevel}</span>
        </nav>
      ) : (
        /* Lima mata pelajaran sekolah dengan ikon masing-masing */
        <div className="handbook-mode-selector">
          <div role="tablist" aria-label="Mata pelajaran" className="handbook-mode-tabs">
            {SCHOOL_SUBJECT_TABS.map(({ id, buttonId, label, Icon }) => {
              const active = displaySubject === id;
              return (
                <button
                  key={id}
                  id={buttonId}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`btn ${active ? 'btn-royal' : 'btn-ghost'}`}
                  onClick={() => handleSwitchToSchoolMode(id)}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Grade / Level Selector Tabs */}
      <div className="handbook-grade-tabs-wrapper">
        <div className="handbook-grade-tabs">
          {isAmcMode ? (
            /* AMC Competition Level Buttons (AMC 8, AMC 10, AMC 12) */
            AMC_LEVELS_METADATA.map((lvl) => {
              const isSelected = Number(selectedAmcLevel) === lvl.level;
              return (
                <button
                  key={lvl.level}
                  id={`btn-public-amc-${lvl.level}`}
                  onClick={() => handleSelectAmcLevel(lvl.level)}
                  className={`btn ${isSelected ? 'btn-royal' : 'btn-outline'} handbook-grade-btn`}
                  style={{ padding: '0.5rem 0.9rem', fontSize: '0.825rem', fontWeight: isSelected ? 700 : 500 }}
                >
                  <span>{lvl.title} • {lvl.targetGrades}</span>
                </button>
              );
            })
          ) : (
            /* Tombol kelas sesuai mata pelajaran (Matematika 4–12, IPA 4–9, Fisika 10–12) */
            (displaySubject === 'fisika'
              ? subjectIndex.filter((g) => g.grade >= 10)
              : displaySubject === 'ipa'
                ? subjectIndex.filter((g) => g.grade <= 9)
                : subjectIndex
            ).map((gradeObj) => {
              const isSelected = Number(selectedGrade) === gradeObj.grade;
              return (
                <button
                  key={gradeObj.grade}
                  id={`btn-public-grade-${gradeObj.grade}`}
                  onClick={() => handleSelectGrade(gradeObj.grade)}
                  className={`btn ${isSelected ? 'btn-royal' : 'btn-outline'} handbook-grade-btn`}
                  style={{ padding: '0.5rem 0.9rem', fontSize: '0.825rem', fontWeight: isSelected ? 700 : 500 }}
                >
                  <span>Kelas {gradeObj.grade} {gradeObj.level}</span>
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Track Filter Pills (Only for SMA Fase F Grade 11 & 12) */}
      {!isAmcMode && subject === 'matematika' && selectedGrade >= 11 && (
        <div className="editorial-card" style={{ padding: '0.75rem 1.25rem', marginBottom: '1.25rem', backgroundColor: '#F8FAFC' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Peminatan / Jalur:
            </span>
            <div className="nav-pill-group" style={{ margin: 0 }}>
              <button
                id="btn-filter-track-all"
                className={`nav-pill ${selectedTrackFilter === 'ALL' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
                onClick={() => handleSelectTrack('ALL')}
              >
                Semua ({trackCounts.all})
              </button>
              <button
                id="btn-filter-track-wajib"
                className={`nav-pill ${selectedTrackFilter === 'WAJIB' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
                onClick={() => handleSelectTrack('WAJIB')}
              >
                📘 Matematika Utama ({trackCounts.wajib})
              </button>
              <button
                id="btn-filter-track-lanjut"
                className={`nav-pill ${selectedTrackFilter === 'LANJUT' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
                onClick={() => handleSelectTrack('LANJUT')}
              >
                🔬 Matematika Tingkat Lanjut ({trackCounts.lanjut})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chapter Explorer Grid */}
      <div className="handbook-explorer-grid">
        {/* Mobile Quick Chapter Selector Bar */}
        <div className="mobile-chapter-bar">
          <button
            type="button"
            className="mobile-chapter-btn"
            onClick={() => setIsMobileChaptersOpen(!isMobileChaptersOpen)}
          >
            <div style={{ textAlign: 'left', flex: 1, minWidth: 0 }}>
              {isAmcMode ? (
                <>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Bab {displayedAmcChapters.findIndex(c => c.id === activeAmcChapter?.id) + 1} dari {displayedAmcChapters.length} • AMC {selectedAmcLevel}
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--primary-navy)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {activeAmcChapter?.title}
                  </div>
                </>
              ) : (
                <>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Bab {displayedChapters.findIndex(c => c.id === currentChapter?.id) + 1} dari {displayedChapters.length} • Kelas {currentGradeData.grade}
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--primary-navy)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {currentChapter?.title}
                  </div>
                </>
              )}
            </div>
            <span className="btn btn-outline" style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem', flexShrink: 0 }}>
              {isMobileChaptersOpen ? "Tutup Bab ▴" : "Ganti Bab ▾"}
            </span>
          </button>
        </div>

        {/* LEFT COLUMN: CHAPTERS LIST */}
        <div className={`editorial-card chapter-sidebar-wrapper ${isMobileChaptersOpen ? 'mobile-open' : ''}`} style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', gap: '0.4rem', margin: 0 }}>
              <BookOpen size={17} />
              {isAmcMode 
                ? `Daftar Bab AMC ${selectedAmcLevel} (${displayedAmcChapters.length})` 
                : `Daftar Bab (${displayedChapters.length})`}
            </h3>
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', marginBottom: '0.85rem' }}>
            <Search size={14} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              className="form-input" 
              placeholder={isAmcMode ? "Cari bab, topik, atau konsep AMC..." : "Cari bab atau konsep..."} 
              style={{ paddingLeft: '2.2rem', fontSize: '0.825rem' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                style={{ position: 'absolute', right: '0.65rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Chapters List */}
          <div className="chapter-list-scrollable" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {isAmcMode ? (
              /* AMC Chapters in Sidebar */
              displayedAmcChapters.map((ch, idx) => {
                const isSelected = activeAmcChapter?.id === ch.id;
                return (
                  <button
                    key={ch.id}
                    id={`btn-sidebar-chapter-${ch.id}`}
                    onClick={() => handleSelectAmcChapter(ch.id)}
                    className={`chapter-sidebar-item ${isSelected ? 'active' : ''}`}
                  >
                    <div className="chapter-sidebar-item-header">
                      <span className="chapter-num-badge">
                        Bab {ch.chapterIndex !== undefined ? ch.chapterIndex + 1 : idx + 1}
                      </span>
                      {ch.domain && (
                        <span className="badge badge-subtle" style={{ fontSize: '0.62rem', padding: '0.1rem 0.4rem' }}>
                          {ch.domain}
                        </span>
                      )}
                    </div>
                    <div className="chapter-item-title">{ch.title}</div>
                    <div className="chapter-item-subtitle">
                      {ch.questionCount || 6} butir latihan & pembahasan
                    </div>
                  </button>
                );
              })
            ) : (
              /* School Chapters in Sidebar */
              displayedChapters.map((ch, idx) => {
                const isSelected = currentChapter?.id === ch.id;
                const isLanjut = (ch.track || '').toUpperCase() === 'LANJUT';
                const isCompleted = !!studentProgress[ch.id];
                return (
                  <button
                    key={ch.id}
                    id={`btn-sidebar-chapter-${ch.id}`}
                    onClick={() => handleSelectSchoolChapter(ch.id)}
                    className={`chapter-sidebar-item ${isSelected ? 'active' : ''}`}
                  >
                    <div className="chapter-sidebar-item-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span className="chapter-num-badge">Bab {idx + 1}</span>
                        {isCompleted && <Check size={14} color="var(--status-emerald)" />}
                      </div>
                      {ch.trackLabel && (
                        <span className={`badge ${isLanjut ? 'badge-cat-hots' : 'badge-subtle'}`} style={{ fontSize: '0.62rem', padding: '0.1rem 0.4rem' }}>
                          {isLanjut ? 'Tingkat Lanjut' : 'Wajib'}
                        </span>
                      )}
                    </div>
                    <div className="chapter-item-title">{ch.title}</div>
                    <div className="chapter-item-subtitle">
                      {ch.questionCount || ch.questions?.length || 0} butir latihan & pembahasan
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: CHAPTER CONTENT AREA */}
        <div className="chapter-main-content">
          {isAmcMode ? (
            /* AMC Chapter View with 6 Pillars & Competition Practice */
            isAmcLoading && (!amcModuleData || amcModuleData.level !== selectedAmcLevel) ? (
              <div className="editorial-card" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                <Loader2 size={36} className="spinner" style={{ color: 'var(--primary-blue)', animation: 'spin 1s linear infinite', margin: '0 auto 1rem' }} />
                <h3 style={{ color: 'var(--primary-navy)' }}>Memuat Modul Olimpiade AMC {selectedAmcLevel}...</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Menyiapkan 6 pilar teori, rumus kunci KaTeX, dan latihan soal kompetisi interaktif...
                </p>
              </div>
            ) : activeAmcChapter ? (
              <>
                <AmcChapterView
                  chapter={activeAmcChapter}
                  levelMeta={currentAmcLevelMeta}
                  onPrintQuest={onPrintQuest}
                />
                <ChapterNav
                  chapters={amcLevelChapters}
                  currentId={activeAmcChapter.id}
                  onSelect={handleSelectAmcChapter}
                />
              </>
            ) : (
              <div className="editorial-card" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                <Compass size={40} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
                <h3>Pilih Bab Olimpiade untuk Membaca Materi</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Silakan pilih salah satu bab AMC dari panel di sebelah kiri.
                </p>
              </div>
            )
          ) : (
            /* School Grade Chapter View */
            currentChapter ? (
              <div>
                {/* Active Chapter Header */}
                <div className="editorial-card chapter-header-card">
                  <div className="chapter-header-top-bar">
                    <div className="chapter-header-badges">
                      <span className="badge badge-sd" style={{ fontSize: '0.75rem' }}>
                        {SUBJECT_LABELS[displaySubject] || SUBJECT_LABELS[subject]} · Kelas {currentGradeData.grade} {currentGradeData.level}
                      </span>
                      {currentChapter.trackLabel && (
                        <span className="badge badge-cat-pas" style={{ fontSize: '0.75rem' }}>
                          {currentChapter.trackLabel}
                        </span>
                      )}
                    </div>

                    <div className="chapter-header-actions">
                      <button 
                        id="btn-copy-chapter-link"
                        className="btn btn-outline" 
                        style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}
                        onClick={handleCopyChapterLink}
                      >
                        {copiedLinkNotification ? (
                          <>
                            <Check size={14} color="var(--status-emerald)" />
                            Link Tersalin!
                          </>
                        ) : (
                          <>
                            <Share2 size={14} />
                            Bagikan Bab
                          </>
                        )}
                      </button>

                      <button 
                        id="btn-print-chapter-worksheet"
                        className="btn btn-primary allow-print"
                        style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}
                        onClick={() => onPrintQuest({
                          title: `Lembar Kerja: ${currentChapter.title}`,
                          grade: currentGradeData.grade,
                          chapterId: currentChapter.id,
                          chapterTitle: currentChapter.title,
                          questions: fullQuestionsForChapter
                        })}
                      >
                        <Printer size={14} />
                        Cetak LKPD A4
                      </button>
                    </div>
                  </div>

                  <h2 className="chapter-header-title">
                    {currentChapter.title}
                  </h2>

                  {getCp2025Note(currentChapter.id) && (
                    <p className="cp2025-note">
                      <strong>{getCp2025Note(currentChapter.id).label}.</strong> {getCp2025Note(currentChapter.id).note}
                    </p>
                  )}

                  {currentChapter.concepts && currentChapter.concepts.length > 0 && (
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                      {currentChapter.concepts.map((concept, cIdx) => (
                        <span key={cIdx} className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>
                          {concept}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Materi berbentuk artikel: daftar isi, subbab, rumus, contoh, kesalahan umum */}
                <ChapterArticle summary={currentChapter.summary} practiceCount={fullQuestionsForChapter.length} />

                {/* Interactive Diagnostic Quiz */}
                <ChapterQuiz
                  questions={fullQuestionsForChapter}
                  chapterTitle={currentChapter.title}
                  chapterId={currentChapter.id}
                  grade={currentGradeData.grade}
                  isLoadingQuestions={isGradeLoading}
                  onLaunchPractice={onLaunchPractice}
                  onPrintQuest={onPrintQuest}
                />

                <RelatedChapters chapterId={currentChapter.id} />

                <ChapterNav
                  chapters={currentGradeData.chapters || []}
                  currentId={currentChapter.id}
                  onSelect={handleSelectSchoolChapter}
                />
              </div>
            ) : (
              <div className="editorial-card" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                <Compass size={40} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
                <h3>Pilih Bab untuk Membaca Materi</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Silakan pilih salah satu bab kurikulum dari panel di sebelah kiri.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

// Attach pure utilities to component for testing and external validation
PublicHandbook.parseParams = parseHandbookParams;
PublicHandbook.buildUrl = buildHandbookUrl;

export default PublicHandbook;
