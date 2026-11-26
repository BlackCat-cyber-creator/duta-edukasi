# Phase 2+ Content & Olympiad Expansion Tracker

## How to Resume Safely (After Any Usage Limit or Interruption)

1. Check the batch tables below for the first batch marked `in_progress` or `pending`.
2. Every workflow script in `scratch/` is **idempotent**: before invoking an agent for a paper, it runs `node scratch/verify_paper.mjs <outPath>`. Any paper that already exists and passes is automatically skipped (`SKIP_ALREADY_VERIFIED`).
3. If a batch was partially completed:
   - Re-run `python scratch/prepare_phase2.py` (fast, skips existing `.txt` files) if needed.
   - Re-run the corresponding `run_workflow` script (`scratch/workflow_batch6.py`, `scratch/workflow_batch7.py`, or `scratch/workflow_batch8.py`).
4. Once a batch finishes:
   - Register all verified files in `src/data/papers/index.js` (single-quote imports, matching `ALL_PAPERS` order).
   - Run: `node scripts/generate-paper-manifest.mjs; npm run lint; npm test; npm run build`
   - Update this tracker, `docs/research/audit-paket-soal.md`, and `README.md`, then commit cleanly (never staging `.claude/`, `content-inbox/`, or `scratch/`).

---

## Batch Status Overview

| Batch | Scope | Count | Status | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Batch 1–5 | Baseline published archive | 82 | `done` | Committed at `4da0326` |
| Phase 1 | Foundation (SEO, search, `/akun`, AI chat) | — | `done` | Committed before Phase 2 |
| **Batch 6** | 10 Olympiad & Competition Inbox Sets (Text PDFs) | 10 | `done` | 82 → 92 published |
| **Batch 7** | 8 School Math, IPA SMP, Chem & IGCSE Bio Sets | 8 | `done` | 92 → 100 published |
| **Batch 8** | 4 Scanned/Visual Olympiad PDFs (Edge PNG + Vision) | 4 | `done` | 100 → 104 published |
| **Batch 9** | 8 New OSN SMA Subjects (Inf/Astro/Kebumian/Eko), OSN-P Mat, AIME & UTBK-SNBT | 8 | `done` | 104 → 112 published |
| **Batch 10** | 8 School SD–SMA, Fisika & Cambridge IGCSE 0580 Extended | 8 | `done` | 112 → 120 published |

---

## Batch 6 — 10 Olympiad & Competition Inbox Sets (`82 -> 92`)

| ID | Source PDF | Target File | Status |
| :--- | :--- | :--- | :--- |
| `osnp-mat-sd-2025` | `batch3/osn_mat_sd_prov_2025.pdf` | `src/data/papers/olimpiade-mat/sd/osnp-matematika-sd-2025.js` | `done` (20 soal, 7 SVG) |
| `osn-ipa-smp-fisika-2023` | `batch3/osn_fis_smp_2023.pdf` | `src/data/papers/olimpiade-sains/smp/osn-ipa-smp-fisika-2023.js` | `done` (25 soal) |
| `osn-ipa-smp-biologi-2023` | `batch3/osn_bio_smp_2023.pdf` | `src/data/papers/olimpiade-sains/smp/osn-ipa-smp-biologi-2023.js` | `done` (23 soal) |
| `hkimo-final-p6` | `batch3/hkimo_2022_final_p6.pdf` | `src/data/papers/olimpiade-mat/sd/hkimo-final-primary-6.js` | `done` (28 soal, 3 SVG) |
| `timo-2021-2022-final-p6` | `batch3/timo_2021_2022_p6_final.pdf` | `src/data/papers/olimpiade-mat/sd/timo-2021-2022-final-primary-6.js` | `done` (30 soal, 3 SVG) |
| `simoc-p3-mock` | `batch3/simoc_p3_mock.pdf` | `src/data/papers/olimpiade-mat/sd/simoc-primary-3-mock.js` | `done` (15 soal, 1 SVG) |
| `sasmo-practice-2` | `batch3/sasmo_practice_ii.pdf` | `src/data/papers/olimpiade-mat/sd/sasmo-practice-2.js` | `done` (24 soal, 7 SVG) |
| `osk-mat-sd-bilangan-p1` | `batch1/1 BILANGAN PAKET 1.pdf` | `src/data/papers/olimpiade-mat/sd/osk-bilangan-paket-1.js` | `done` (14 soal, 2 SVG) |
| `osk-mat-sd-aritmatika-p1` | `batch1/2 ARITMATIKA PAKET 1.pdf` | `src/data/papers/olimpiade-mat/sd/osk-aritmatika-paket-1.js` | `done` (15 soal, 1 SVG) |
| `osk-mat-sd-geometri-p1` | `batch1/3 GEOMETRI PAKET 1.pdf` | `src/data/papers/olimpiade-mat/sd/osk-geometri-paket-1.js` | `done` (16 bagian, 13 SVG) |

---

## Batch 7 — 8 School Math, IPA SMP, Chem & IGCSE Bio Sets (`92 -> 100`)

| ID | Source PDF | Target File | Status |
| :--- | :--- | :--- | :--- |
| `mat10-persamaan-kuadrat` | `batch1/[6] Persamaan Kuadrat.pdf` | `src/data/papers/matematika/kelas10/persamaan-kuadrat.js` | `done` (8 soal, 21 poin) |
| `mat10-barisan-deret-aritmetika` | `batch1/[12] Barisan dan Deret Aritmetika.pdf` | `src/data/papers/matematika/kelas10/barisan-deret-aritmetika.js` | `done` (5 soal, 14 poin) |
| `mat10-barisan-deret-geometri` | `batch1/[13] Barisan dan Deret Geometri.pdf` | `src/data/papers/matematika/kelas10/barisan-deret-geometri.js` | `done` (3 soal, 10 poin) |
| `mat12-statistika-latihan-1` | `batch1/9 LATIHAN SOAL 1 STATISTIKA.pdf` | `src/data/papers/matematika/kelas12/statistika-latihan-1.js` | `done` (20 soal) |
| `mat12-peluang-kaidah-pencacahan` | `batch1/10 LATIHAN SOAL 1+2 PELUANG.pdf` | `src/data/papers/matematika/kelas12/peluang-kaidah-pencacahan.js` | `done` (19 soal, 48 bagian) |
| `kim11-chemical-equilibrium` | `batch3/chem_equilibrium_ch5.pdf` | `src/data/papers/kimia/kelas11/chemical-equilibrium-practice.js` | `done` (12 soal, 30 bagian) |
| `ipa9-edexcel-bio-genetics` | `batch3/edexcel_bio_genetics.pdf` | `src/data/papers/ipa/kelas9/edexcel-biology-genetics-inheritance.js` | `done` (28 soal, 92 Marks) |
| `ipa8-bio-homeostasis` | `batch2_science/3. DAILY TEST BIOLOGY Y8...pdf` | `src/data/papers/ipa/kelas8/biology-grade-8-homeostasis-excretion.js` | `done` (16 bagian, 24 Marks) |

---

## Batch 8 — 4 Scanned/Visual Olympiad PDFs (`100 -> 104`)

| ID | Source PDF | Target File | Status |
| :--- | :--- | :--- | :--- |
| `sasmo-2022-p4` | `batch3/sasmo_2022_p4.pdf` | `src/data/papers/olimpiade-mat/sd/sasmo-2022-primary-4.js` | `done` (24 soal, 9 SVG) |
| `sasmo-2023-g9` | `batch3/sasmo_2023_g9.pdf` | `src/data/papers/olimpiade-mat/smp/sasmo-2023-grade-9.js` | `done` (25 soal, 3 SVG) |
| `osn-ipa-sd-latihan-1` | `batch2_science/01 SOAL OSN IPA SD.pdf` | `src/data/papers/olimpiade-sains/sd/osn-ipa-sd-latihan-1.js` | `done` (27 soal) |
| `sasmo-practice-1` | `batch3/sasmo_practice_kris.pdf` | `src/data/papers/olimpiade-mat/sd/sasmo-practice-1.js` | `done` (28 soal, 10 SVG) |

---

## Batch 9 — 8 OSN SMA, AIME & UTBK-SNBT Sets (`104 -> 112`)

| ID | Competition / Track | Target File | Status |
| :--- | :--- | :--- | :--- |
| `osnk-inf-sma-simulasi-1` | OSN-K Informatika | `src/data/papers/olimpiade-inf/sma/osnk-informatika-sma-simulasi-1.js` | `done` (15 butir, 20 poin) |
| `osnk-astro-sma-simulasi-1` | OSN-K Astronomi | `src/data/papers/olimpiade-astro/sma/osnk-astronomi-sma-simulasi-1.js` | `done` (15 butir, 2 SVG) |
| `osnk-kebumian-sma-simulasi-1` | OSN-K Kebumian | `src/data/papers/olimpiade-kebumian/sma/osnk-kebumian-sma-simulasi-1.js` | `done` (15 soal) |
| `osnk-eko-sma-simulasi-1` | OSN-K Ekonomi | `src/data/papers/olimpiade-eko/sma/osnk-ekonomi-sma-simulasi-1.js` | `done` (15 butir, 18 poin) |
| `osnp-mat-sma-simulasi-1` | OSN-P Matematika | `src/data/papers/olimpiade-mat/sma/osnp-mat-sma-simulasi-1.js` | `done` (12 soal, 44 poin) |
| `aime-practice-set-1` | AIME | `src/data/papers/olimpiade-mat/sma/aime-practice-set-1.js` | `done` (15 soal, EN) |
| `utbk-snbt-penalaran-mat-1` | UTBK / SNBT | `src/data/papers/matematika/sma/utbk-snbt-penalaran-mat-1.js` | `done` (20 soal) |
| `utbk-snbt-penalaran-mat-2` | UTBK / SNBT | `src/data/papers/matematika/sma/utbk-snbt-penalaran-mat-2.js` | `done` (20 soal) |

---

## Batch 10 — 8 School SD–SMA & Cambridge IGCSE 0580 Sets (`112 -> 120`)

| ID | Competition / Track | Target File | Status |
| :--- | :--- | :--- | :--- |
| `mat6-ujian-sekolah-p1` | Matematika SD | `src/data/papers/matematika/sd/mat6-ujian-sekolah-paket-1.js` | `done` (20 soal, 30 poin) |
| `mat8-pythagoras-spldv-p1` | Matematika SMP | `src/data/papers/matematika/smp/mat8-pythagoras-spldv-paket-1.js` | `done` (16 soal, 24 poin) |
| `mat9-bangun-ruang-kesebangunan-p1` | Matematika SMP | `src/data/papers/matematika/smp/mat9-bangun-ruang-kesebangunan-paket-1.js` | `done` (16 soal, 24 poin) |
| `ipa6-sains-terpadu-p1` | IPA SD | `src/data/papers/ipa/sd/ipa6-sains-terpadu-paket-1.js` | `done` (20 soal) |
| `ipa7-kalor-gerak-gaya-p1` | IPA SMP | `src/data/papers/ipa/smp/ipa7-kalor-gerak-gaya-paket-1.js` | `done` (16 soal, 24 poin) |
| `fis11-fluida-statis-dinamis-p1` | Fisika SMA | `src/data/papers/fisika/sma/fis11-fluida-statis-dinamis-paket-1.js` | `done` (15 soal, 30 poin) |
| `fis12-listrik-magnet-p1` | Fisika SMA | `src/data/papers/fisika/sma/fis12-listrik-magnet-paket-1.js` | `done` (15 soal, 30 poin) |
| `mat10-igcse-0580-extended-p1` | Cambridge IGCSE 0580 | `src/data/papers/matematika/sma/mat10-igcse-0580-extended-paket-1.js` | `done` (30 bagian, 70 Marks, EN) |
