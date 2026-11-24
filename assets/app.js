(function () {
  "use strict";
  var C = window.HOSE || {};
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var ext = function (url) { return url ? ' href="' + esc(url) + '" target="_blank" rel="noopener"' : ""; };
  var PERIODE = ["Harian", "Mingguan", "Triwulan (TW)", "Tahunan"];

  var PAGES = [
    { id: "beranda", nav: "Beranda" },
    { id: "kpi", nav: "KPI & HCL", title: "KPI & HCL", eyebrow: "HSSE Compliance League", desc: "Setiap lokasi kerja mengisi KPI dan HCL langsung di spreadsheet lokasinya, lalu melihat peringkat di dashboard." },
    { id: "lhc", nav: "LHC", title: "LHC", eyebrow: "Living HSSE Culture", desc: "Pilih kriteria pelaksanaan, isi formulir Microsoft Forms yang terbuka, lalu pantau rekapnya di dashboard." },
    { id: "jks", nav: "Jam Kerja Selamat", title: "Jam Kerja Selamat", eyebrow: "Safe Man Hours", desc: "Input jam kerja selamat setiap lokasi melalui satu formulir, dengan akumulasi per periode di dashboard." },
    { id: "patuh", nav: "PATUH.40", title: "PATUH.40", eyebrow: "Kepatuhan HSSE", desc: "Pilih salah satu dari 16 kriteria, isi Google Form yang terbuka, lalu lihat rekap kepatuhannya." },
    { id: "phorse", nav: "P-HORSE", title: "P-HORSE", eyebrow: "Pelaporan di web perusahaan", desc: "Pelaporan P-HORSE dilakukan di web perusahaan. Rekapnya ditampilkan di dashboard di bawah." },
    { id: "incident", nav: "Incident Alert", title: "Incident Alert", eyebrow: "Belajar dari kejadian", desc: "Ringkasan insiden yang sudah terjadi sebagai bahan pembelajaran. Buka PDF untuk membaca detailnya." },
    { id: "clsr", nav: "10 CLSR", title: "10 CLSR", eyebrow: "Corporate Life Saving Rules", desc: "10 aturan keselamatan yang wajib dipatuhi setiap pekerja dan mitra kerja untuk mencegah kecelakaan fatal." },
    { id: "passport", nav: "Digital Passport", title: "Digital Passport", eyebrow: "HSSE Passport", desc: "Registrasi HSSE Passport dan Induction CLSR dilakukan di web perusahaan. Status tiap lokasi tampil di dashboard." }
  ];
  var MENU_DESC = {
    kpi: "Isi spreadsheet per lokasi, lihat peringkat", lhc: "12 kriteria, Microsoft Forms", jks: "Input jam kerja dan akumulasinya",
    patuh: "16 kriteria kepatuhan, Google Form", phorse: "Panduan, input, dan dashboard", incident: "Pembelajaran dari insiden",
    clsr: "Poster dan video Life Saving Rules", passport: "Registrasi passport dan induksi"
  };

  /* ---------- building blocks ---------- */
  function head(p) {
    return '<div class="page-head"><div class="wrap"><div class="eyebrow">' + esc(p.eyebrow) + "</div><h1>" + esc(p.title) + "</h1><p>" + esc(p.desc) + "</p></div></div>";
  }
  function guide(text, url, label) {
    return '<section><div class="wrap"><div class="guide"><div class="ico">Panduan</div><p><strong>' + esc(label || "Panduan pengisian") + "</strong>" + esc(text) + "</p>" +
      (url ? '<a class="btn primary"' + ext(url) + ">Buka panduan (PDF)</a>" : '<span class="btn line off">Panduan menyusul</span>') + "</div></div></section>";
  }
  function tiles(title, lead, items, opts) {
    opts = opts || {};
    var html = items.map(function (it, i) {
      var k = '<span class="k">' + pad(i + 1) + "</span>";
      var name = esc(it.nama);
      return it.url ? '<a class="tile"' + ext(it.url) + ' data-name="' + name.toLowerCase() + '">' + k + name + "</a>"
                    : '<div class="tile off" data-name="' + name.toLowerCase() + '">' + k + "<span>" + name + "<small>link menyusul</small></span></div>";
    }).join("");
    var search = opts.search ? '<div class="tools"><input type="search" id="tileSearch" placeholder="Cari lokasi kerja" aria-label="Cari lokasi kerja"></div>' : "";
    return '<section><div class="wrap"><h2>' + esc(title) + '</h2><p class="lead">' + esc(lead) + "</p>" + search + '<div class="tiles" id="tiles">' + html + "</div></div></section>";
  }
  function dash(title, url, note) {
    var body = url ? '<iframe src="' + esc(url) + '" loading="lazy" allowfullscreen title="' + esc(title) + '"></iframe>'
      : '<div class="empty"><div><strong>Dashboard Looker Studio</strong><br>' + esc(note) + '<div class="chips">' + PERIODE.map(function (p) { return "<span>" + p + "</span>"; }).join("") + "</div></div></div>";
    return '<section><div class="wrap"><h2>' + esc(title) + '</h2><p class="lead">Rekap per lokasi kerja dengan filter periode harian, mingguan, triwulan, dan tahunan.</p><div class="dash">' + body + "</div></div></section>";
  }
  function action(label, sub, url) {
    return url ? '<a class="action"' + ext(url) + "><b>" + esc(label) + "</b><span>" + esc(sub) + "</span></a>"
               : '<div class="action off"><b>' + esc(label) + "</b><span>" + esc(sub) + " · link menyusul</span></div>";
  }

  /* ---------- pages ---------- */
  var R = {};
  R.beranda = function () {
    var menu = PAGES.slice(1).map(function (p, i) {
      return '<a class="card" href="#' + p.id + '"><div class="n">' + pad(i + 1) + "</div><div><h3>" + esc(p.nav) + "</h3><p>" + esc(MENU_DESC[p.id]) + "</p></div></a>";
    }).join("");
    return '<div class="hero"><div class="wrap"><div class="slides" id="slides">' +
      slide("HSSE Sumbagut", "Satu pintu untuk semua laporan HSSE", "Pekerja dari 25 lokasi kerja menginput laporan dan melihat rekapnya di satu tempat: KPI, LHC, Jam Kerja Selamat, PATUH.40, sampai Digital Passport.", '<a class="btn primary" href="#menu">Mulai lapor</a><a class="btn ghost" href="#juknis">Baca juknis</a>', "25", "Lokasi kerja") +
      slide("Corporate Life Saving Rules", "10 aturan yang menyelamatkan nyawa", "Pelajari poster dan video 10 CLSR sebelum memulai pekerjaan berisiko tinggi.", '<a class="btn primary" href="#clsr">Lihat 10 CLSR</a>', "10", "Life Saving Rules") +
      slide("Periode laporan", "Harian, mingguan, triwulan, tahunan", "Setiap dashboard menampilkan rekap sesuai periode, langsung dari Google Sheets dan Looker Studio.", '<a class="btn primary" href="#menu">Buka dashboard</a>', "4", "Periode rekap") +
      '</div><div class="dots" id="dots"></div></div></div>' +
      '<section><div class="wrap about"><div><h2>Apa itu HOSE?</h2><p class="lead">HOSE (HSSE One Stop Experience) mengumpulkan semua formulir, panduan, dan dashboard HSSE dalam satu web. Pekerja cukup memilih menu, mengisi laporan, lalu melihat hasil rekap lokasinya.</p>' +
      (C.juknis ? '<a class="doc" id="juknis"' + ext(C.juknis) + '><div class="pdf">PDF</div><div><strong>Buku Juknis HOSE</strong><p>Petunjuk teknis pengisian semua laporan.</p></div></a>'
                : '<div class="doc" id="juknis"><div class="pdf">PDF</div><div><strong>Buku Juknis HOSE</strong><p>Petunjuk teknis pengisian semua laporan. File menyusul.</p></div></div>') +
      '</div><div class="facts"><div><b>9</b><span>Menu laporan</span></div><div><b>25</b><span>Lokasi kerja</span></div><div><b>4</b><span>Periode rekap</span></div></div></div></section>' +
      '<section id="menu"><div class="wrap"><h2>Menu</h2><p class="lead">Pilih program untuk mengisi laporan atau melihat dashboard.</p><div class="menu">' + menu + "</div></div></section>";
  };
  function slide(eb, h, p, btns, big, cap) {
    return '<div class="slide"><div><div class="eyebrow">' + eb + "</div><h1>" + h + "</h1><p>" + p + '</p><div class="btn-row">' + btns + '</div></div><div class="badge-big"><div><b>' + big + "</b><span>" + cap + "</span></div></div></div>";
  }
  R.kpi = function (p) {
    var k = C.kpi || {};
    return head(p) + guide("Cara mengisi KPI dan HCL di spreadsheet lokasi Anda.", k.panduan) +
      tiles("Input per lokasi kerja", "Pilih lokasi kerja Anda. Tombol membuka spreadsheet lokasi tersebut.", k.lokasi || [], { search: true }) +
      dash("Dashboard KPI & HCL", k.dashboard, "Peringkat HSSE Compliance League 25 lokasi kerja akan tampil di sini.");
  };
  R.lhc = function (p) {
    var k = C.lhc || {};
    return head(p) + guide("Cara melaporkan pelaksanaan Living HSSE Culture.", k.panduan) +
      tiles("Input per kriteria", "Pilih kriteria pelaksanaan. Tombol membuka Microsoft Forms.", k.kriteria || []) +
      dash("Dashboard LHC", k.dashboard, "Rekap pelaksanaan LHC dari ekspor Excel Microsoft Forms akan tampil di sini.");
  };
  R.jks = function (p) {
    var k = C.jks || {};
    return head(p) + guide("Cara mengisi Jam Kerja Selamat.", k.panduan) +
      '<section><div class="wrap"><div class="actions">' + action("Input Jam Kerja Selamat", "Buka Google Form pengisian JKS", k.form) + action("Lihat dashboard", "Akumulasi jam kerja per lokasi", k.dashboard ? "#jks-dash" : "") + "</div></div></section>" +
      '<div id="jks-dash"></div>' + dash("Dashboard Jam Kerja Selamat", k.dashboard, "Akumulasi jam kerja selamat per lokasi dan periode akan tampil di sini.");
  };
  R.patuh = function (p) {
    var k = C.patuh || {};
    return head(p) + guide("Cara melaporkan 16 kriteria PATUH.40.", k.panduan) +
      tiles("Input per kriteria", "Pilih kriteria. Tombol membuka Google Form.", k.kriteria || []) +
      dash("Dashboard PATUH.40", k.dashboard, "Rekap kepatuhan per kriteria dan lokasi akan tampil di sini.");
  };
  R.phorse = function (p) {
    var k = C.phorse || {};
    return head(p) + guide("Cara melapor P-HORSE di web perusahaan.", k.panduan) +
      '<section><div class="wrap"><div class="actions">' + action("Lapor P-HORSE", "Buka web pelaporan perusahaan", k.input) + action("Unduh data", "Data diunduh dari web perusahaan (Excel)", "") + "</div></div></section>" +
      dash("Dashboard P-HORSE", k.dashboard, "Rekap laporan P-HORSE dari ekspor Excel web perusahaan akan tampil di sini.");
  };
  R.incident = function (p) {
    var list = C.incident || [];
    var cards = list.length ? list.map(function (x) {
      return '<article class="inc"><span class="pill">Incident Alert</span><div class="meta">' + esc(x.tanggal) + " · " + esc(x.lokasi) + "</div><h3>" + esc(x.judul) + "</h3><p>" + esc(x.ringkasan) + "</p>" +
        (x.pdf ? '<a class="btn line"' + ext(x.pdf) + ">Baca PDF</a>" : "") + "</article>";
    }).join("") : [1, 2, 3].map(function (n) {
      return '<article class="inc"><span class="pill">Incident Alert #' + n + '</span><div class="meta">Tanggal · Lokasi</div><h3>Judul insiden menyusul</h3><p>Ringkasan kejadian, penyebab, dan pelajaran yang bisa diambil.</p><span class="btn line off">PDF menyusul</span></article>';
    }).join("");
    return head(p) + '<section><div class="wrap"><div class="incidents">' + cards + "</div></div></section>";
  };
  R.clsr = function (p) {
    var k = C.clsr || {}, P = k.poster || [];
    var cards = P.map(function (r, i) {
      return '<div class="rule-item"><h3 class="rule-title"><span><b>' + pad(i + 1) + '</b> ' + esc(r[0]) + '</span></h3>' +
        '<button class="rule" style="--c:' + esc(r[2]) + '" data-i="' + i + '" aria-label="' + pad(i + 1) + " " + esc(r[0]) + '">' +
        '<div class="ph"></div><div class="num">' + pad(i + 1) + '</div><div class="txt"><b>' + esc(r[0]) + "</b><span>" + esc(r[1]) + "</span></div>" +
        '<img src="img/clsr/' + pad(i + 1) + '-kecil.jpg" alt="Poster CLSR ' + pad(i + 1) + " " + esc(r[0]) + '" loading="lazy" onerror="this.remove()"></button></div>';
    }).join("");
    return head(p) + '<section><div class="wrap"><div class="rules" id="rules">' + cards + "</div></div></section>" +
      '<section><div class="wrap video"><div class="player">' + (k.video ? '<iframe src="' + esc(k.video) + '" allow="autoplay; fullscreen" allowfullscreen loading="lazy" title="Video Overview New CLSR"></iframe>' : "") +
      '</div><div><div class="eyebrow" style="color:var(--red)">Video pembelajaran</div><h2>Overview New CLSR</h2></div></div></section>';
  };
  R.passport = function (p) {
    var k = C.passport || {};
    return head(p) + '<section><div class="wrap"><h2>Menu input</h2><p class="lead">Kedua tombol membuka web perusahaan.</p><div class="actions">' +
      action("Registrasi HSSE Passport", "Daftarkan pekerja dan mitra kerja", k.registrasi) + action("Induction CLSR", "Ikuti induksi 10 CLSR", k.induction) + "</div></div></section>" +
      dash("Dashboard Digital Passport", k.dashboard, "Status registrasi dan Induction CLSR seluruh lokasi kerja akan tampil di sini (data dari ekspor Excel web perusahaan).");
  };

  /* ---------- nav + routing ---------- */
  var nav = document.getElementById("nav"), app = document.getElementById("app"), menuBtn = document.getElementById("menuBtn");
  nav.innerHTML = PAGES.map(function (p) { return '<a href="#' + p.id + '" data-id="' + p.id + '">' + esc(p.nav) + "</a>"; }).join("");
  menuBtn.onclick = function () { var o = nav.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); };
  var current = null, timer = null;

  function route() {
    var h = location.hash.slice(1);
    var page = PAGES.filter(function (p) { return p.id === h; })[0];
    if (!page) {
      if (current === "beranda" && document.getElementById(h)) return; // anchor inside beranda
      page = PAGES[0];
    }
    nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false");
    if (page.id !== current) {
      current = page.id;
      app.innerHTML = R[page.id](page);
      document.title = (page.id === "beranda" ? "" : page.nav + " · ") + "HOSE Sumbagut";
      window.scrollTo(0, 0);
      afterRender(page.id);
      var anchor = h && document.getElementById(h);
      if (anchor) anchor.scrollIntoView();
    }
    [].forEach.call(nav.children, function (a) { a.toggleAttribute("aria-current", a.dataset.id === page.id); if (a.dataset.id === page.id) a.setAttribute("aria-current", "page"); });
  }
  window.addEventListener("hashchange", route);

  function afterRender(id) {
    clearInterval(timer);
    if (id === "beranda") {
      var slides = [].slice.call(document.querySelectorAll(".slide")), dots = document.getElementById("dots"), cur = 0;
      slides[0].classList.add("on");
      dots.innerHTML = slides.map(function (_, i) { return '<button aria-label="Slide ' + (i + 1) + '"' + (i ? "" : ' class="on"') + "></button>"; }).join("");
      var show = function (i) { slides[cur].classList.remove("on"); dots.children[cur].classList.remove("on"); cur = (i + slides.length) % slides.length; slides[cur].classList.add("on"); dots.children[cur].classList.add("on"); };
      var start = function () { clearInterval(timer); if (!matchMedia("(prefers-reduced-motion: reduce)").matches) timer = setInterval(function () { show(cur + 1); }, 6000); };
      [].forEach.call(dots.children, function (b, i) { b.onclick = function () { show(i); start(); }; });
      start();
    }
    var s = document.getElementById("tileSearch");
    if (s) s.oninput = function () { var q = s.value.trim().toLowerCase(); [].forEach.call(document.querySelectorAll("#tiles .tile"), function (t) { t.hidden = q && t.dataset.name.indexOf(q) < 0; }); };
    var rules = document.getElementById("rules");
    if (rules) rules.onclick = function (e) { var b = e.target.closest(".rule"); if (b) openLb(+b.dataset.i); };
  }

  /* ---------- lightbox ---------- */
  var lb = document.getElementById("lb"), li = 0;
  function openLb(i) {
    var P = (C.clsr || {}).poster || []; li = (i + P.length) % P.length; var r = P[li];
    var pv = document.getElementById("lbPv"); pv.style.setProperty("--c", r[2]);
    pv.innerHTML = '<div class="ph"><div><div style="font:800 64px var(--display)">' + pad(li + 1) + "</div><b>" + esc(r[0]) + '</b><div style="margin-top:6px;opacity:.9">' + esc(r[1]) + "</div></div></div>";
    var img = new Image(); img.alt = "Poster CLSR " + pad(li + 1) + " " + r[0];
    img.onload = function () { pv.innerHTML = ""; pv.appendChild(img); };
    img.src = "img/clsr/" + pad(li + 1) + ".jpg";
    document.getElementById("lbIdx").textContent = (li + 1) + " dari " + P.length;
    lb.hidden = false; document.getElementById("lbClose").focus();
  }
  document.getElementById("lbPrev").onclick = function () { openLb(li - 1); };
  document.getElementById("lbNext").onclick = function () { openLb(li + 1); };
  document.getElementById("lbClose").onclick = function () { lb.hidden = true; };
  lb.onclick = function (e) { if (e.target === lb) lb.hidden = true; };
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") lb.hidden = true; else if (e.key === "ArrowRight") openLb(li + 1); else if (e.key === "ArrowLeft") openLb(li - 1);
  });

  route();
})();
