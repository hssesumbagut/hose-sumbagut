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
    // Link spreadsheet Matrix Observer (tombol "Update Matriks Observer")
    matriks: "https://docs.google.com/spreadsheets/d/18ERPsj0zfRC7KRyd5-RWFZjw6wvHIjaJKfD3QM5bwvk/edit?usp=sharing",
    formulir: "https://drive.usercontent.google.com/download?id=1ao8QeUqR5CwVcqppHBRU8OwL-Fl26NWt&export=download&confirm=t",
    // Dashboard Looker Studio: "dashboard" = link biasa (tombol buka), "embed" = link sematan (tampil di halaman)
    dashboard: "https://datastudio.google.com/reporting/517fae39-e6b4-4de0-a07a-890128a610ea",
    embed: "https://lookerstudio.google.com/embed/reporting/517fae39-e6b4-4de0-a07a-890128a610ea",
    // Kriteria input laporan (Google Form)
    kriteria: [
      { kode: "1", nama: "Lepas Sandar Tangki", url: "https://forms.gle/8VU4GbSjuHXL6Fxp7" },
      { kode: "2", nama: "Penerimaan Produk & Operational (BBM/LPG/Avtur)", url: "https://forms.gle/jtbS1tduc2jME2vP9" },
      { kode: "3a", nama: "Pengisian Mobil Tangki (BBM/LPG/Avtur)", url: "https://forms.gle/Qucb7wYAamtTZqgv7" },
      { kode: "3b", nama: "Pengisian Bunker", url: "https://docs.google.com/forms/d/e/1FAIpQLSdWTZseHHw4u5iMJq42L40Q5fLlWCHB2u5OluM3zdZ2vfK5yw/viewform?usp=header" },
      { kode: "3c", nama: "Pengisian RTW", url: "https://docs.google.com/forms/d/e/1FAIpQLSdjKzG4MxsJxPwEWk2VyV7nu87i09GK9RhiQoYwwRO-DaTnig/viewform?usp=header" },
      { kode: "3d", nama: "Pengisian Drum (Asphalt)", url: "https://docs.google.com/forms/d/e/1FAIpQLSf6pFFI7bOYQipel8DebWfh5Fg6vN5PzDFMlv5HufqZ0Xwbhg/viewform?usp=header" },
      { kode: "4a", nama: "Confined Space Entry", url: "https://forms.gle/8PL122EW9mjWyvQA9" },
      { kode: "4b", nama: "Lifting Operation", url: "https://forms.gle/HqgatEr2DmARv8wv9" },
      { kode: "4c", nama: "Isolasi Energi", url: "https://forms.gle/9Fj92gwAYwxDHteG8" },
      { kode: "4d", nama: "Hot Work", url: "https://forms.gle/SJCgn2MtfXU7SahD6" },
      { kode: "4e", nama: "Working at Height", url: "https://forms.gle/oWa9Vu15EWWUyZA39" },
      { kode: "5", nama: "Pengangkutan Produk", url: "https://forms.gle/s3cWHDwMS4ucgcCb7" },
      { kode: "6", nama: "Pengisian Avtur ke Pesawat Terbang", url: "https://forms.gle/eG9mvrXwAvCvNcUU8" },
      { kode: "8", nama: "Pembersihan Lokasi Kerja (Good Housekeeping)", url: "https://forms.gle/ARJbAjTw39ky5hGp7" },
      { kode: "9", nama: "Mengemudi KRP", url: "https://forms.gle/kGGsYm5Es5YnKrNq5" },
      { kode: "10", nama: "Penanganan Barang Secara Manual (Manual Handling)", url: "https://forms.gle/bMssPxnrFGPuTYHm9" }
    ],
    // Panduan pelaporan: 5 bagian (accordion). Jenis isi: "langkah" = daftar bernomor dengan judul tebal, "poin" = daftar bernomor biasa
    panduan: {
      judul: "Panduan Pelaporan PATUH 4.0",
      subjudul: "Pedoman Pelaksanaan Observasi dan Pengisian Pelaporan Online",
      pengantar: "Panduan ini disusun sebagai acuan bagi seluruh observer dan PIC dalam melaksanakan observasi keselamatan kerja serta melakukan pengisian pelaporan PATUH 4.0 secara benar, konsisten, dan sesuai dengan ketentuan.",
      bagian: [
        { judul: "Panduan Pelaksanaan Observasi", ringkas: "9 langkah observer di lapangan",
          intro: "Dalam melaksanakan observasi keselamatan kerja, setiap observer wajib memperhatikan hal-hal berikut:",
          langkah: [
            ["Pastikan kesesuaian data observer.", "Nama dan jabatan harus sesuai dengan Matrix Observer yang telah ditetapkan."],
            ["Gunakan identitas yang konsisten.", "Pastikan nama observer yang diinput tetap sama pada setiap pelaporan online."],
            ["Sampaikan tujuan observasi.", "Sapa pekerja dan informasikan bahwa akan dilakukan observasi keselamatan kerja."],
            ["Amati kesesuaian pekerjaan.", "Periksa kesesuaian pelaksanaan pekerjaan di lapangan dengan prosedur yang berlaku."],
            ["Berikan apresiasi.", "Amati pekerjaan yang telah dilakukan dengan aman dan berikan penghargaan atau apresiasi kepada pekerja."],
            ["Berikan koreksi.", "Amati pekerjaan yang dilakukan secara tidak aman dan berikan koreksi terhadap tindakan maupun kondisi tersebut."],
            ["Jelaskan potensi risiko.", "Sampaikan risiko atau dampak yang mungkin terjadi akibat kondisi maupun tindakan tidak aman."],
            ["Periksa kondisi lingkungan kerja.", "Amati kondisi lingkungan kerja dan kesesuaian penggunaan Alat Pelindung Diri (APD)."],
            ["Lakukan pembinaan (coaching).", "Berikan arahan kepada pekerja yang diobservasi dan berikan kesempatan kepada pekerja untuk menyampaikan umpan balik (feedback)."]
          ] },
        { judul: "Ketentuan Data Observer", ringkas: "Matrix Observer dan nama di formulir",
          intro: "Untuk memastikan kelancaran proses pelaporan PATUH 4.0, perhatikan ketentuan berikut:",
          poin: [
            "PIC wajib melakukan pengecekan dan memperbarui (update) data pekerja pada Matrix Observer.",
            "Nama observer yang muncul pada formulir pengisian dihasilkan secara otomatis dari spreadsheet Matrix Observer.",
            "Apabila nama observer tidak muncul pada formulir pengisian, berarti nama tersebut belum terdaftar pada spreadsheet Matrix Observer. Silakan berkoordinasi dengan PIC di lokasi kerja masing-masing untuk melakukan pembaruan data.",
            "Khusus jabatan SS/HO Pengelola Mobil Tangki, silakan melakukan pembaruan data jabatan sesuai dengan ketentuan lokasi kerja."
          ], tombolMatriks: true },
        { judul: "Ketentuan Pengisian Catatan Observasi", ringkas: "Kapan kolom CATATAN dikosongkan",
          intro: "Perhatikan ketentuan ini sebelum mengirimkan laporan. Apabila dalam proses observasi tidak ditemukan kategori Unsafe Action maupun Unsafe Condition, jangan mengisi kolom CATATAN dengan kata atau karakter berikut:",
          larangan: ["Tidak Ada", "Good / Baik", "Nihil", "N/A", "0", "Tanda hubung (-)"],
          alasan: "Apabila kata atau karakter tersebut dimasukkan ke dalam formulir online, sistem akan menghitungnya secara otomatis sebagai adanya kategori Unsafe Action atau Unsafe Condition pada laporan tersebut.",
          aturan: [
            ["Ditemukan tindakan atau kondisi tidak aman", "Isi kolom CATATAN dengan penjelasan temuan hasil observasi."],
            ["Tidak ditemukan tindakan atau kondisi tidak aman", "Lewati kolom CATATAN dan biarkan kosong."]
          ],
          penutup: "Dengan demikian, pengisian data dapat tercatat secara akurat dan tidak menimbulkan kesalahan perhitungan pada sistem." },
        { judul: "Ketentuan Pengunggahan Bukti Pelaporan (Evidence)", ringkas: "Scan lembar observasi, bukan foto berulang",
          intro: "Khusus seluruh PIC Pelaporan PATUH 4.0 pada lokasi Integrated Terminal, Fuel Terminal, Aviation Terminal, dan LPG Terminal, wajib memperhatikan ketentuan berikut:",
          langkah: [
            ["Hindari pelaporan ganda (double input).", "Dilarang menggunakan hasil pindai (scan) formulir observasi yang sama untuk pelaporan pada hari yang berbeda."],
            ["Cantumkan tanggal pelaksanaan.", "Pastikan tanggal pelaksanaan observasi tercantum pada bukti pindai formulir observasi."],
            ["Lampirkan bukti yang sesuai.", "Setiap pelaporan wajib dilengkapi dengan hasil pindai (scan) lembar observasi."],
            ["Foto dokumentasi bukan bukti pengganti.", "Tidak diperkenankan mengunggah bukti pelaksanaan observasi hanya berupa foto dokumentasi secara berulang tanpa melampirkan hasil pindai lembar observasi."]
          ] },
        { judul: "Ketentuan Validasi Pelaporan", ringkas: "Laporan ganda dinyatakan tidak valid",
          intro: "Untuk menjaga kualitas dan validitas data PATUH 4.0, setiap pelaporan akan diperiksa berdasarkan kesesuaian data, kelengkapan bukti, dan ketentuan pengisian.",
          peringatan: "Apabila ditemukan pelaporan ganda (double input), maka laporan tersebut akan dinyatakan TIDAK VALID (INVALID).",
          penutup: "Seluruh PIC dan observer diharapkan memastikan bahwa setiap laporan yang dikirimkan merupakan hasil observasi aktual, dilengkapi bukti yang sesuai, serta memenuhi ketentuan pelaporan PATUH 4.0." }
      ],
      komitmen: ["Lakukan observasi dengan benar, laporkan temuan secara akurat, dan pastikan setiap data yang disampaikan dapat dipertanggungjawabkan.",
                 "Mari tingkatkan kepedulian dan budaya keselamatan kerja melalui pelaksanaan PATUH 4.0 secara konsisten dan berkelanjutan."]
    }
  },

  phorse: { panduan: "", input: "", dashboard: "" }, // input = web perusahaan

  incident: [
    // { judul: "", tanggal: "2026-01-31", lokasi: "", ringkasan: "", pdf: "" }
  ],

  clsr: {
    video: "https://drive.google.com/file/d/1zpk-tvyN2BBKCPmLgO_6Mc8zOO3pLgWf/preview",
    // poster: simpan file di folder img/clsr/ dengan nama 01.jpg s.d. 10.jpg (besar) dan 01-kecil.jpg s.d. 10-kecil.jpg (kecil)
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
