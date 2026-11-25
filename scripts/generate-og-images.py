"""
Generate category Open Graph images (1200x630 PNG) in public/brand/og/.
Run once locally after updating brand visuals; generated PNGs are committed.
"""
import os
from playwright.sync_api import sync_playwright

os.makedirs('public/brand/og', exist_ok=True)

with open('public/brand/logo-full.svg', 'r', encoding='utf-8') as f:
    full_svg = f.read().replace('<svg ', '<svg width="460" ')

CARDS = [
    ('default', '#12337A', '#B30C35', 'Portal Belajar Terbuka', 'Materi, Kuis & Paket Soal Matematika & Sains', 'Kelas 4 SD – 12 SMA · Olimpiade OSN, AMC, SASMO, SMO · TKA & Rumus'),
    ('matematika', '#12337A', '#1D4ED8', 'Matematika Sekolah', 'Materi Bab, Rumus & Latihan Matematika (Kelas 4–12)', 'Kurikulum Merdeka CP 046/2025 · Contoh Soal Bertahap & Pembahasan'),
    ('ipa', '#0F766E', '#12337A', 'IPA Terpadu SD & SMP', 'Materi Sains & Latihan Soal IPA (Kelas 4–9)', 'Metode Ilmiah, Zat, Kalor, Gerak, Listrik, Ekologi & Tata Surya'),
    ('fisika', '#0369A1', '#12337A', 'Fisika SMA & Cambridge', 'Materi, Konsep & Paket Soal Fisika (Kelas 10–12)', 'Mekanika, Fluida, Gelombang, Termodinamika, Elektromagnetik & Modern'),
    ('kimia', '#6D28D9', '#12337A', 'Kimia SMA & IGCSE', 'Materi, Stoikiometri & Paket Soal Kimia (Kelas 10–12)', 'Struktur Atom, Ikatan, Termokimia, Laju Reaksi, Kesetimbangan & Asam-Basa'),
    ('biologi', '#047857', '#12337A', 'Biologi SMA & Olimpiade', 'Materi Sel, Genetika & Paket Soal Biologi (Kelas 10–12)', 'Keanekaragaman Hayati, Metabolisme, Genetika, Evolusi & Ekologi'),
    ('olimpiade', '#9F1239', '#12337A', 'Pusat Olimpiade', 'Soal & Pembahasan Olimpiade Matematika & Sains', 'OSN / OSK · AMC 8/10/12 · SASMO · SMO · HKIMO · TIMO · SIMOC · IKMC'),
    ('osn', '#B30C35', '#12337A', 'Olimpiade Sains Nasional', 'Arsip Soal OSN-K, OSN-P & Seri Pembinaan OSN', 'Matematika, IPA, Fisika, Kimia & Biologi — SD, SMP, SMA + Pembahasan'),
    ('amc', '#1E3A8A', '#B30C35', 'AMC 8 / 10 / 12', '36 Modul Konsep & Paket Soal Resmi AMC', 'Permutasi, Teori Bilangan, Geometri, Aljabar & Strategi Kompetisi'),
    ('sasmo', '#9F1239', '#0369A1', 'SASMO Practice Papers', 'Singapore & Asian Schools Math Olympiad Solutions', 'Step-by-Step Principles, Complete Solutions & Marking Rubric'),
    ('smo', '#1D4ED8', '#B30C35', 'SMO (Singapore)', 'Singapore Mathematical Olympiad Archive & Solutions', 'Junior, Senior & Open Divisions — Proof-Oriented Step-by-Step Solutions'),
    ('paket-soal', '#12337A', '#B30C35', 'Paket Soal Terstruktur', '82+ Paket Soal Matematika, Sains & Olimpiade', 'Kunci Jawaban Eksak, Prinsip Konsep, Pembahasan & Rubrik Penilaian'),
    ('tka', '#0F766E', '#B30C35', 'Latihan TKA', 'Tes Kemampuan Akademik SD, SMP & SMA', '30 Soal per Paket Sesuai Elemen Asesmen · Kunci Jawaban & Pembahasan'),
    ('rumus', '#334155', '#12337A', 'Ensiklopedia Rumus', 'Kumpulan Rumus Lengkap Kelas 4–12 & AMC', 'Notasi Matematika Presisi · Referensi Cepat Matematika, IPA, Fisika & Kimia'),
    ('english', '#0369A1', '#B30C35', 'International & Bilingual (EN)', 'English Math & Science Competition Papers', 'AMC 8/10/12 · SASMO · SMO · IKMC · TIMO · HKIMO · Cambridge IGCSE'),
]

EDGE_CANDIDATES = [
    r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
    r'C:\Program Files\Microsoft\Edge\Application\msedge.exe',
]
edge_path = next((p for p in EDGE_CANDIDATES if os.path.exists(p)), None)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=edge_path, headless=True) if edge_path else p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1200, 'height': 630}, device_scale_factor=1)
    for slug, primary, secondary, badge, title, subtitle in CARDS:
        html = f'''<!doctype html><html><body style="margin:0;width:1200px;height:630px;background:linear-gradient(135deg,#FFFFFF 0%,#F8FAFC 62%,#EFF6FF 100%);font-family:'Segoe UI',Inter,system-ui,sans-serif;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;box-sizing:border-box;padding:52px 68px;border-top:14px solid {primary};">
          <div style="position:absolute;top:-110px;right:-90px;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,{primary}1F,transparent 70%);"></div>
          <div style="position:absolute;bottom:-120px;left:-110px;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,{secondary}1A,transparent 70%);"></div>
          <div style="display:flex;align-items:center;justify-content:space-between;gap:24px;">
            <div>{full_svg}</div>
            <span style="display:inline-block;padding:10px 22px;border-radius:999px;background:{primary}14;border:1.5px solid {primary}40;color:{primary};font-size:21px;font-weight:800;letter-spacing:0.02em;">{badge}</span>
          </div>
          <div style="max-width:1040px;">
            <div style="font-size:46px;font-weight:800;color:#0F172A;line-height:1.16;margin-bottom:16px;letter-spacing:-0.02em;">{title}</div>
            <div style="font-size:26px;color:#334155;line-height:1.45;font-weight:500;">{subtitle}</div>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;border-top:2px solid #E2E8F0;padding-top:20px;font-size:21px;font-weight:700;color:#12337A;">
            <span>dutaedukasi.vercel.app · Bimbingan Belajar Duta Edukasi Pontianak</span>
            <span style="color:{secondary};">Gratis Tanpa Login · CC BY 4.0</span>
          </div>
        </body></html>'''
        page.set_content(html)
        page.screenshot(path=f'public/brand/og/{slug}.png')
    browser.close()

print(f'Generated {len(CARDS)} OG PNGs in public/brand/og/')
