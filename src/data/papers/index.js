/**
 * Registry terpusat seluruh Paket Soal Terstruktur (Paket Soal Duta e-dukasi).
 * Semua berkas paket dengan `status === 'published'` otomatis tampil di hub `/paket-soal`,
 * diprerender ke HTML statis, dan dimasukkan ke `llms.txt` + `sitemap.xml`.
 */
import fis10Kinematika2P1 from './fisika/kelas10/kinematika-2-paket-1.js';
import fis10Kinematika2P2 from './fisika/kelas10/kinematika-2-paket-2.js';
import fis10Kinematika1Ex1 from './fisika/kelas10/kinematika-1-latihan-1.js';
import fis10Kinematika1Adv from './fisika/kelas10/kinematika-1-lanjutan.js';
import fis10Kinematika2Adv from './fisika/kelas10/kinematika-2-lanjutan.js';
import kim11LajuReaksiP1 from './kimia/kelas11/laju-reaksi-paket-1.js';
import kim10CambridgeEssay from './kimia/kelas10/cambridge-essay.js';
import bio10BiodiversityP1 from './biologi/kelas10/biodiversity-practice-set-1.js';
import olimSmpIpaOsk from './olimpiade-sains/smp/osk-ipa-simulasi-1.js';
import olimSdBilanganBasic1 from './olimpiade-mat/sd/bilangan-basic-1.js';
import olimSdBilanganBasic2 from './olimpiade-mat/sd/bilangan-basic-2.js';
import olimSdBilanganInt1 from './olimpiade-mat/sd/bilangan-intermediate-1.js';
import olimSdBilanganInt2 from './olimpiade-mat/sd/bilangan-intermediate-2.js';
import olimSdBilanganAdv1 from './olimpiade-mat/sd/bilangan-advanced-1.js';
import olimSdBilanganAdv2 from './olimpiade-mat/sd/bilangan-advanced-2.js';
import olimSdBilanganExp1 from './olimpiade-mat/sd/bilangan-expert-1.js';
import olimSdBilanganExp2 from './olimpiade-mat/sd/bilangan-expert-2.js';
import olimSdBilanganElite from './olimpiade-mat/sd/bilangan-elite.js';
import olimSmpBilanganBasic1 from './olimpiade-mat/smp/bilangan-basic-1.js';
import olimSmpBilanganBasic2 from './olimpiade-mat/smp/bilangan-basic-2.js';
import olimSmpBilanganInt1 from './olimpiade-mat/smp/bilangan-intermediate-1.js';
import olimSmpBilanganInt2 from './olimpiade-mat/smp/bilangan-intermediate-2.js';
import olimSmpBilanganAdv1 from './olimpiade-mat/smp/bilangan-advanced-1.js';
import olimSmpBilanganAdv2 from './olimpiade-mat/smp/bilangan-advanced-2.js';
import olimSmpBilanganExp1 from './olimpiade-mat/smp/bilangan-expert-1.js';
import olimSmpBilanganExp2 from './olimpiade-mat/smp/bilangan-expert-2.js';
import olimSmpBilanganElite from './olimpiade-mat/smp/bilangan-elite.js';
import olimTimo2223HeatS2 from './olimpiade-mat/smp/timo-2022-2023-heat-secondary-2.js';
import kim11AsasXi from './kimia/kelas11/asas-kimia-xi-semester-1.js';
import kim11TermokimiaLatihan from './kimia/kelas11/termokimia-xi-latihan.js';
import bio10BlokTest from './biologi/kelas10/blok-test-biologi-x-keanekaragaman-virus.js';
import olimSasmo2015G8 from './olimpiade-mat/smp/sasmo-2015-grade-8.js';
import olimSasmo2016Sec2 from './olimpiade-mat/smp/sasmo-2016-secondary-2.js';
import olimSimoc2017G4 from './olimpiade-mat/sd/simoc-2017-grade-4.js';
import olimOsnkMatSd2026 from './olimpiade-mat/sd/osnk-matematika-sd-2026.js';
import olimHkimoSec2Prep from './olimpiade-mat/smp/hkimo-secondary-2-prep.js';
import olimOsnkMatSmp2026 from './olimpiade-mat/smp/osnk-matematika-smp-2026.js';
import olimToOsnkMatSma from './olimpiade-mat/sma/to-osnk-matematika-sma.js';
import olimOsnkMatSma2026 from './olimpiade-mat/sma/osnk-matematika-sma-2026.js';
import olimOsnkMatSma2025 from './olimpiade-mat/sma/osnk-matematika-sma-2025.js';
import olimOsnkMatSma2024 from './olimpiade-mat/sma/osnk-matematika-sma-2024.js';
import olimOsnkMatSma2023 from './olimpiade-mat/sma/osnk-matematika-sma-2023.js';
import olimOsnkMatSma2022 from './olimpiade-mat/sma/osnk-matematika-sma-2022.js';
import olimOsnkMatSmp2024 from './olimpiade-mat/smp/osnk-matematika-smp-2024.js';
import olimOsnkMatSmp2020 from './olimpiade-mat/smp/osnk-matematika-smp-2020.js';
import olimOsnpMatSmp2019 from './olimpiade-mat/smp/osnp-matematika-smp-2019.js';
import olimOsnkMatSd2025 from './olimpiade-mat/sd/osnk-matematika-sd-2025.js';
import olimOsnkMatSd2024 from './olimpiade-mat/sd/osnk-matematika-sd-2024.js';
import olimOsnkIpaSd2024 from './olimpiade-sains/sd/osnk-ipa-sd-2024.js';
import olimOsnkIpaSd2023 from './olimpiade-sains/sd/osnk-ipa-sd-2023.js';
import olimOsnkIpaSmp2025 from './olimpiade-sains/smp/osnk-ipa-smp-2025.js';
import olimOsnpIpaSmp2024 from './olimpiade-sains/smp/osnp-ipa-smp-2024.js';
import olimOsnkFisSma2024 from './olimpiade-fis/sma/osnk-fisika-sma-2024.js';
import olimOsnkFisSma2023 from './olimpiade-fis/sma/osnk-fisika-sma-2023.js';
import olimOsnpFisSma2024 from './olimpiade-fis/sma/osnp-fisika-sma-2024.js';
import olimOsnkKimSma2024 from './olimpiade-kim/sma/osnk-kimia-sma-2024.js';
import olimOsnkKimSma2023 from './olimpiade-kim/sma/osnk-kimia-sma-2023.js';
import olimOsnkBioSma2024 from './olimpiade-bio/sma/osnk-biologi-sma-2024.js';
import olimOsnkBioSma2023 from './olimpiade-bio/sma/osnk-biologi-sma-2023.js';
import olimAmc8_2024 from './olimpiade-mat/smp/amc-8-2024.js';
import olimAmc8_2023 from './olimpiade-mat/smp/amc-8-2023.js';
import olimAmc10a2024 from './olimpiade-mat/sma/amc-10a-2024.js';
import olimAmc10a2023 from './olimpiade-mat/sma/amc-10a-2023.js';
import olimAmc12a2024 from './olimpiade-mat/sma/amc-12a-2024.js';
import olimAmc12a2023 from './olimpiade-mat/sma/amc-12a-2023.js';
import olimKangarooSg2015Student from './olimpiade-mat/sma/singapore-math-kangaroo-2015-student.js';
import olimIkmcKadett2224 from './olimpiade-mat/smp/ikmc-kangaroo-kadett-2022-2024.js';
import olimKmnrKelas9_2016 from './olimpiade-mat/smp/kmnr-kelas-9-2016.js';
import olimOmvnSma2022 from './olimpiade-mat/sma/omvn-sma-2022.js';
import olimKsmMatMa2018 from './olimpiade-mat/sma/ksm-matematika-2018.js';
import olimSmoJunior2012 from './olimpiade-mat/smp/smo-junior-2012.js';
import olimSmoSenior2012 from './olimpiade-mat/sma/smo-senior-2012.js';
import olimSmoSenior2010 from './olimpiade-mat/sma/smo-senior-2010.js';
import olimSmoOpen2012 from './olimpiade-mat/sma/smo-open-2012.js';
import olimAmc8_2025 from './olimpiade-mat/smp/amc-8-2025.js';
import olimAmc10b2024 from './olimpiade-mat/sma/amc-10b-2024.js';
import olimAmc12b2024 from './olimpiade-mat/sma/amc-12b-2024.js';
import olimOsnkIpaSmp2024 from './olimpiade-sains/smp/osnk-ipa-smp-2024.js';
import olimOsnkMatSmp2019 from './olimpiade-mat/smp/osnk-matematika-smp-2019.js';
import olimOsnkMatSd2023 from './olimpiade-mat/sd/osnk-matematika-sd-2023.js';
import olimOsnkKimSma2025 from './olimpiade-kim/sma/osnk-kimia-sma-2025.js';
import olimKsmKimMa2022 from './olimpiade-kim/sma/ksm-kimia-ma-2022.js';
import olimOsnpMatSd2025 from './olimpiade-mat/sd/osnp-matematika-sd-2025.js';
import olimOsnIpaSmpFisika2023 from './olimpiade-sains/smp/osn-ipa-smp-fisika-2023.js';
import olimOsnIpaSmpBiologi2023 from './olimpiade-sains/smp/osn-ipa-smp-biologi-2023.js';
import olimHkimoFinalP6 from './olimpiade-mat/sd/hkimo-final-primary-6.js';
import olimTimo2122FinalP6 from './olimpiade-mat/sd/timo-2021-2022-final-primary-6.js';
import olimSimocP3Mock from './olimpiade-mat/sd/simoc-primary-3-mock.js';
import olimSasmoPractice2 from './olimpiade-mat/sd/sasmo-practice-2.js';
import olimOskMatSdBilanganP1 from './olimpiade-mat/sd/osk-bilangan-paket-1.js';
import olimOskMatSdAritmatikaP1 from './olimpiade-mat/sd/osk-aritmatika-paket-1.js';
import olimOskMatSdGeometriP1 from './olimpiade-mat/sd/osk-geometri-paket-1.js';

import {
  PAPER_SUBJECT_META,
  TRACK_LABELS,
  OLYMPIAD_COMPETITIONS,
  paperPath,
  subjectHubPath,
  countPaperItems,
  trackLabel,
  levelNameOfGrade,
  paperLangLabel,
  paperTag,
  formatPaperMeta,
  extractPaperYear,
  englishPapersFilter,
  getOlympiadCompetition,
  competitionOfPaper,
  getRelatedPapers
} from './meta.js';

export {
  PAPER_SUBJECT_META,
  TRACK_LABELS,
  OLYMPIAD_COMPETITIONS,
  paperPath,
  subjectHubPath,
  countPaperItems,
  trackLabel,
  levelNameOfGrade,
  paperLangLabel,
  paperTag,
  formatPaperMeta,
  extractPaperYear,
  englishPapersFilter,
  getOlympiadCompetition,
  competitionOfPaper,
  getRelatedPapers
};

export const ALL_PAPERS = [
  fis10Kinematika2P1,
  fis10Kinematika2P2,
  fis10Kinematika1Ex1,
  fis10Kinematika1Adv,
  fis10Kinematika2Adv,
  kim11LajuReaksiP1,
  kim10CambridgeEssay,
  bio10BiodiversityP1,
  olimSmpIpaOsk,
  olimSdBilanganBasic1,
  olimSdBilanganBasic2,
  olimSdBilanganInt1,
  olimSdBilanganInt2,
  olimSdBilanganAdv1,
  olimSdBilanganAdv2,
  olimSdBilanganExp1,
  olimSdBilanganExp2,
  olimSdBilanganElite,
  olimSmpBilanganBasic1,
  olimSmpBilanganBasic2,
  olimSmpBilanganInt1,
  olimSmpBilanganInt2,
  olimSmpBilanganAdv1,
  olimSmpBilanganAdv2,
  olimSmpBilanganExp1,
  olimSmpBilanganExp2,
  olimSmpBilanganElite,
  kim11AsasXi,
  kim11TermokimiaLatihan,
  bio10BlokTest,
  olimSasmo2015G8,
  olimSasmo2016Sec2,
  olimSimoc2017G4,
  olimOsnkMatSd2026,
  olimTimo2223HeatS2,
  olimHkimoSec2Prep,
  olimOsnkMatSmp2026,
  olimToOsnkMatSma,
  olimOsnkMatSma2026,
  olimOsnkMatSma2025,
  olimOsnkMatSma2024,
  olimOsnkMatSma2023,
  olimOsnkMatSma2022,
  olimOsnkMatSmp2024,
  olimOsnkMatSmp2020,
  olimOsnpMatSmp2019,
  olimOsnkMatSd2025,
  olimOsnkMatSd2024,
  olimOsnkIpaSd2024,
  olimOsnkIpaSd2023,
  olimOsnkIpaSmp2025,
  olimOsnpIpaSmp2024,
  olimOsnkFisSma2024,
  olimOsnkFisSma2023,
  olimOsnpFisSma2024,
  olimOsnkKimSma2024,
  olimOsnkKimSma2023,
  olimOsnkBioSma2024,
  olimOsnkBioSma2023,
  olimAmc8_2024,
  olimAmc8_2023,
  olimAmc10a2024,
  olimAmc10a2023,
  olimAmc12a2024,
  olimAmc12a2023,
  olimKangarooSg2015Student,
  olimIkmcKadett2224,
  olimKmnrKelas9_2016,
  olimOmvnSma2022,
  olimKsmMatMa2018,
  olimSmoJunior2012,
  olimSmoSenior2012,
  olimSmoSenior2010,
  olimSmoOpen2012,
  olimAmc8_2025,
  olimAmc10b2024,
  olimAmc12b2024,
  olimOsnkIpaSmp2024,
  olimOsnkMatSmp2019,
  olimOsnkMatSd2023,
  olimOsnkKimSma2025,
  olimKsmKimMa2022,
  olimOsnpMatSd2025,
  olimOsnIpaSmpFisika2023,
  olimOsnIpaSmpBiologi2023,
  olimHkimoFinalP6,
  olimTimo2122FinalP6,
  olimSimocP3Mock,
  olimSasmoPractice2,
  olimOskMatSdBilanganP1,
  olimOskMatSdAritmatikaP1,
  olimOskMatSdGeometriP1
];

export const PUBLISHED_PAPERS = ALL_PAPERS.filter((p) => p.status === 'published');

export function getPapersBySubject(subject) {
  if (!subject || subject === 'all') return PUBLISHED_PAPERS;
  return PUBLISHED_PAPERS.filter((p) => p.subject === subject);
}

export function getPaperBySlug(subject, slug) {
  return PUBLISHED_PAPERS.find((p) => p.subject === subject && p.slug === slug) || null;
}

export function getRelatedPapersForChapter(chapterId) {
  if (!chapterId) return [];
  return PUBLISHED_PAPERS.filter((p) => Array.isArray(p.relatedChapterIds) && p.relatedChapterIds.includes(chapterId));
}

