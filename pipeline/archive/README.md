# Arsip skrip lama — jangan dijalankan

Skrip di `builders/` dulu dipakai untuk membuat `src/data/matematika/gradeN.js` (sebelumnya
`src/data/grades/`) dari teks buku. Sejak itu data sudah diperbaiki lewat migrasi
(`pipeline/migrations/`) dan audit soal, jadi **menjalankan skrip ini akan menimpa perbaikan
tersebut**. Skrip disimpan hanya sebagai catatan cara data awal dibuat.

Untuk mengubah materi sekarang, edit langsung file di `src/data/<mapel>/`, lalu jalankan
`node pipeline/build_chapter_index.mjs` dan `npm test`.
