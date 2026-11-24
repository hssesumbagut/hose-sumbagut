/*
  KONFIGURASI WEB HOSE
  ====================
  Ubah link di file ini saja. Isi "" (kosong) berarti tombol tampil sebagai "link menyusul".
  - Link Google Form / Microsoft Forms / Spreadsheet: tempel URL lengkap.
  - Dashboard Looker Studio: tempel link "Sematkan laporan" (embed), contoh
    https://lookerstudio.google.com/embed/reporting/xxxx/page/yyyy
  - PDF di Google Drive: tempel link berbagi file (akses "Siapa saja yang memiliki link").
*/
window.HOSE = {
  juknis: "", // Buku Juknis HOSE (PDF)

  kpi: {
    panduan: "",
    dashboard: "",
    // 25 lokasi kerja: ganti nama lokasi dan isi link spreadsheet masing-masing
    lokasi: Array.from({ length: 25 }, (_, i) => ({ nama: "Lokasi " + (i + 1), url: "" }))
  },

  lhc: {
    panduan: "",
    dashboard: "",
    kriteria: Array.from({ length: 12 }, (_, i) => ({ nama: "Kriteria " + (i + 1), url: "" })) // Microsoft Forms
  },

  jks: { panduan: "", form: "", dashboard: "" },

  patuh: {
    panduan: "",
    dashboard: "",
    kriteria: Array.from({ length: 16 }, (_, i) => ({ nama: "Kriteria " + (i + 1), url: "" })) // Google Form
  },

  phorse: { panduan: "", input: "", dashboard: "" }, // input = web perusahaan

  incident: [
    // { judul: "", tanggal: "2026-01-31", lokasi: "", ringkasan: "", pdf: "" }
  ],

  clsr: {
    video: "https://drive.google.com/file/d/1zpk-tvyN2BBKCPmLgO_6Mc8zOO3pLgWf/preview",
    // poster: simpan file di folder img/clsr/ dengan nama 01.png s.d. 10.png
    poster: [
      ["Tools & Equipment", "Alat & Peralatan", "#1f5fa8"],
      ["Line of Fire", "Berada di Posisi atau Kondisi Berbahaya", "#2a87c8"],
      ["Hot Work", "Pekerjaan Panas", "#9e1b22"],
      ["Confined Space", "Ruang Terbatas", "#7d1a1e"],
      ["Powered System", "Sistem Bertenaga", "#b3262c"],
      ["Lifting Operation", "Operasi Pengangkatan", "#d7442f"],
      ["Working at Height", "Bekerja di Ketinggian", "#c8463b"],
      ["Ground-Disturbance Work", "Pekerjaan Gangguan Tanah", "#e0612f"],
      ["Water-Based Work Activities", "Aktivitas Kerja pada Perairan", "#ef7f2f"],
      ["Land Transportation", "Transportasi di Darat", "#d99a12"]
    ]
  },

  passport: { registrasi: "", induction: "", dashboard: "" } // dua link ke web perusahaan
};
