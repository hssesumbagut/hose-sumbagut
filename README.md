# Web HOSE Sumbagut

Situs statis (HTML/CSS/JS) untuk Cloudflare Pages. Tidak perlu build: pengaturan build kosong, output directory `/`.

## Mengubah link
Semua link (Google Form, Microsoft Forms, spreadsheet per lokasi, dashboard Looker Studio, PDF) ada di **config.js**.
Isi `""` berarti tombol tampil sebagai "link menyusul".

## Poster 10 CLSR
Simpan poster di `img/clsr/` dengan nama `01.jpg` sampai `10.jpg` (ukuran penuh) dan `01-kecil.jpg` sampai `10-kecil.jpg` (thumbnail). Kalau file belum ada, kotak warna tampil sebagai pengganti.

## Struktur
- index.html: kerangka halaman
- config.js: semua link dan data yang bisa diubah
- assets/style.css, assets/app.js: tampilan dan logika (9 halaman, pindah halaman lewat #beranda, #kpi, #clsr, dst.)
