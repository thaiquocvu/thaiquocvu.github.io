/* Rendering only. All words live in content.js. You should not need to edit this file to change content. */
(function () {
  var S = window.SITE;
  var app = document.getElementById("app");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var byId = function (id) { return S.projects.filter(function (p) { return p.id === id; })[0]; };
  var pad = function (n) { return (n < 10 ? "0" : "") + n; };

  /* ---------- contact pieces (placeholders until real details are added in content.js) ---------- */
  function emailVal() {
    return S.contact.email
      ? '<a href="mailto:' + esc(S.contact.email) + '">' + esc(S.contact.email) + "</a>"
      : '<span class="pending">Public email address<span class="hint mono">Placeholder: add it in content.js</span></span>';
  }
  function linkedinVal() {
    return S.contact.linkedin
      ? '<a href="' + esc(S.contact.linkedin) + '" target="_blank" rel="noopener">LinkedIn profile</a>'
      : '<span class="pending">LinkedIn profile<span class="hint mono">Placeholder: add it in content.js</span></span>';
  }
  function resumeBtn() {
    return S.contact.resume
      ? '<a class="btn mono" href="' + esc(S.contact.resume) + '" download="Oscar_Vu_Resume.pdf" target="_blank" rel="noopener">Download resume (PDF)</a>'
      : '<span class="btn mono" role="link" aria-disabled="true">Resume (PDF) — not yet available</span>';
  }
  function resumeVal() {
    return S.contact.resume ? resumeBtn() : '<span class="pending">Downloadable resume (PDF)<span class="hint mono">Not yet available. Add the public PDF in content.js</span></span>';
  }

  /* ---------- project cards ---------- */
  function thumb(p) {
    if (p.coverStyle === "placeholder")
      return '<div class="thumb ph"><img src="' + p.cover + '" alt="" loading="lazy"><span class="mono">' + esc(p.coverLabel || "Screenshot to come") + "</span></div>";
    return '<div class="thumb"><img src="' + p.cover + '" alt="' + esc(p.title + " project preview") + '" loading="lazy"></div>';
  }
  function card(p, i) {
    return '<a class="card" href="#' + p.id + '">' + thumb(p) +
      '<div class="meta mono"><span>' + pad(i + 1) + "</span><span>" + esc(p.category.split(" / ")[0]) + "</span></div>" +
      "<h3>" + esc(p.title) + "<span>" + esc(p.subtitle) + "</span></h3>" +
      "<p>" + esc(p.blurb) + '</p><span class="mono go">Read case study →</span></a>';
  }
  function row(p, i) {
    return '<a class="row" href="#' + p.id + '"><div class="num mono">' + pad(i + 1) + "</div>" + thumb(p) +
      '<div class="txt"><span class="mono muted">' + esc(p.category) + "</span>" +
      "<h3>" + esc(p.title) + "<span>" + esc(p.subtitle) + "</span></h3>" +
      "<p>" + esc(p.blurb) + '</p><span class="mono go">Read case study →</span></div></a>';
  }

  /* ---------- pages ---------- */
  function home() {
    return '<section class="hero reveal"><div class="label mono">' + esc(S.name) + " · " + esc(S.location) + "</div>" +
      "<h1>" + esc(S.headline) + "</h1>" +
      '<p class="intro">' + esc(S.intro) + "</p>" +
      '<div class="cta"><a class="btn mono" href="#work">View work</a>' + resumeBtn() + "</div></section>" +
      '<section class="section"><div class="label mono">Featured work</div><div class="body">' +
      '<div class="cards">' + S.projects.map(card).join("") + "</div>" +
      '<p style="margin:36px 0 0"><a class="mono link-u" href="#work">All work and archive →</a></p></div></section>' +
      '<section class="section"><div class="label mono">About</div><div class="body">' +
      '<h2 class="big">Hospitality taught me the customer side. Information technology gave me the tools.</h2>' +
      '<p style="max-width:60ch">' + esc(S.pitch) + '</p><p><a class="mono link-u" href="#about">More about me →</a></p></div></section>' +
      '<section class="section"><div class="label mono">Contact</div><div class="body"><ul class="contact-list">' +
      '<li><span class="mono muted">Email</span><span class="v">' + emailVal() + "</span></li>" +
      '<li><span class="mono muted">LinkedIn</span><span class="v">' + linkedinVal() + "</span></li></ul></div></section>";
  }

  function work() {
    return '<section class="cs-hero reveal"><div class="mono muted">Selected work</div><h1>Work</h1></section>' +
      '<section class="section" style="padding-top:40px"><div class="label mono">Featured</div><div class="body">' + S.projects.map(row).join("") + "</div></section>" +
      '<section class="section"><div class="label mono">Research &amp; Strategy archive</div><div class="body"><p class="muted" style="max-width:60ch;margin-top:0">Academic proposals. Both are plans, not completed or deployed work.</p><div class="archive">' +
      S.archive.map(function (a) { return '<div><span class="mono tag">' + esc(a.kind) + "</span><h4>" + esc(a.title) + "</h4><p>" + esc(a.text) + "</p></div>"; }).join("") +
      "</div></div></section>";
  }

  function fig(f) {
    return '<figure class="fig' + (f.dark ? " dark" : "") + '"><button type="button" data-zoom="' + f.src + '" aria-label="Enlarge image: ' + esc(f.title || f.cap) + '"><div class="frame"><img src="' + f.src + '" alt="' + esc(f.title || f.cap) + '" loading="lazy"></div></button>' +
      "<figcaption><span>" + (f.title ? "<b>" + esc(f.title) + ".</b> " : "") + esc(f.cap) + " Click to enlarge.</span></figcaption></figure>";
  }

  function section(s) {
    var h = "";
    if (s.stats) h += '<div class="stats">' + s.stats.map(function (t) { return '<div class="stat"><div class="n">' + esc(t.v) + '</div><div class="l mono muted">' + esc(t.l) + "</div></div>"; }).join("") + "</div>";
    if (s.p) h += s.p.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
    if (s.ul) h += "<ul>" + s.ul.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
    if (s.table) h += '<div class="tbl-wrap"><table><thead><tr>' + s.table.head.map(function (t) { return "<th>" + esc(t) + "</th>"; }).join("") + "</tr></thead><tbody>" + s.table.rows.map(function (r) { return "<tr>" + r.map(function (t, i) { return (i ? "<td>" : "<th scope=\"row\">") + esc(t) + (i ? "</td>" : "</th>"); }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
    if (s.rai) h += '<div class="rai">' + s.rai.map(function (r) { return "<div><h4>" + esc(r.t) + "</h4><p>" + esc(r.d) + "</p></div>"; }).join("") + "</div>";
    if (s.note) h += '<div class="note">' + esc(s.note) + "</div>";
    if (s.figs) h += s.figs.map(fig).join("");
    if (s.gallery) h += s.grid ? '<div class="fig-pair">' + s.gallery.map(fig).join("") + "</div>" : s.gallery.map(fig).join("");
    if (s.placeholder) h += '<div class="placeholder">' + esc(s.placeholder) + "</div>";
    return '<section class="section cs-sec' + (s.band ? " band" : "") + '"><div class="label"><h2>' + esc(s.h) + '</h2></div><div class="body">' + h + "</div></section>";
  }

  function caseStudy(p) {
    var i = S.projects.indexOf(p), nx = S.projects[(i + 1) % S.projects.length];
    var head = '<section class="cs-hero reveal"><span class="mono muted">' + esc(p.category) + "</span>" +
      "<h1>" + esc(p.title) + "<span>" + esc(p.subtitle) + "</span></h1>" +
      '<p class="blurb">' + esc(p.blurb) + "</p></section>" +
      '<div class="cs-meta"><div><div class="mono muted">Year</div><div class="v">' + esc(p.year) + "</div></div>" +
      '<div><div class="mono muted">Role</div><div class="v">' + esc(p.role) + "</div></div>" +
      '<div><div class="mono muted">Project type</div><div class="v">' + esc(p.type) + "</div></div>" +
      '<div><div class="mono muted">Technology</div><div class="v">' + esc(p.tools) + "</div></div></div>";
    return "<article>" + (p.dark ? '<div class="band">' + head + "</div>" : head) +
      '<p class="status">' + esc(p.status) + "</p>" +
      (p.shows ? '<p class="shows"><span class="mono muted">Skills shown</span>' + esc(p.shows) + "</p>" : "") +
      '<div style="height:36px"></div>' + p.sections.map(section).join("") +
      '<a class="next band" href="#' + nx.id + '"><span class="mono muted">Next project</span><div class="t">' + esc(nx.title) + " →</div></a></article>";
  }

  function about() {
    return '<section class="cs-hero reveal"><div class="mono muted">About</div><h1>Customer-side first.</h1></section>' +
      S.aboutStory.map(function (b) {
        return '<section class="section"><div class="label mono">' + esc(b.h) + '</div><div class="body cs-sec">' +
          b.p.map(function (t) { return '<p style="font-size:1.1em">' + esc(t) + "</p>"; }).join("") +
          (b.quote ? '<blockquote class="pull">' + esc(b.quote) + "</blockquote>" : "") + "</div></section>";
      }).join("") +
      (S.lookingFor ? '<section class="section"><div class="label mono">Looking for</div><div class="body cs-sec"><p style="font-size:1.1em">' + esc(S.lookingFor) + "</p></div></section>" : "") +
      '<section class="section"><div class="label mono">Education</div><div class="body"><ul class="list">' +
      S.education.map(function (e) { return '<li><span><b>' + esc(e.what) + '</b><span class="sub">' + esc(e.where) + "</span></span><span>" + esc(e.when) + "</span></li>"; }).join("") + "</ul></div></section>" +
      '<section class="section"><div class="label mono">Experience</div><div class="body"><ul class="list">' +
      S.experience.map(function (e) { return '<li><span><b>' + esc(e.role) + '</b><span class="sub">' + esc(e.where) + (e.note ? " · " + esc(e.note) : "") + "</span></span><span>" + esc(e.when) + "</span></li>"; }).join("") + "</ul></div></section>" +
      '<section class="section"><div class="label mono">Skills &amp; tools</div><div class="body cols2">' +
      S.skills.map(function (g) { return '<div class="skillgroup"><div class="mono muted">' + esc(g.group) + '</div><div class="skills">' + g.items.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</div></div>"; }).join("") + "</div></section>" +
      '<section class="section"><div class="label mono">Resume</div><div class="body">' + resumeBtn() + "</div></section>";
  }

  function contact() {
    return '<section class="cs-hero reveal"><div class="mono muted">Contact</div><h1>Say hello.</h1></section>' +
      '<section class="section" style="padding-top:20px"><div class="label mono">Details</div><div class="body"><ul class="contact-list">' +
      '<li><span class="mono muted">Email</span><span class="v">' + emailVal() + "</span></li>" +
      '<li><span class="mono muted">LinkedIn</span><span class="v">' + linkedinVal() + "</span></li>" +
      '<li><span class="mono muted">Location</span><span class="v">' + esc(S.location) + "</span></li>" +
      '<li><span class="mono muted">Resume</span><span class="v">' + resumeVal() + "</span></li></ul></div></section>";
  }

  /* ---------- router, transitions, reveal ---------- */
  var ROUTES = { home: home, work: work, about: about, contact: contact };
  var isCase = false;

  function draw() {
    var r = (location.hash || "#home").slice(1) || "home";
    var p = byId(r), html;
    if (p) html = caseStudy(p); else if (ROUTES[r]) html = ROUTES[r](); else { r = "home"; html = home(); }
    isCase = !!p;
    app.innerHTML = html;
    var base = p ? "work" : r;
    document.querySelectorAll("nav a").forEach(function (a) { a.getAttribute("href") === "#" + base ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"); });
    window.scrollTo(0, 0);
    setupReveal();
    updateTop();
  }
  function render() {
    if (document.startViewTransition && !reduce && app.innerHTML) document.startViewTransition(draw);
    else draw();
  }

  function setupReveal() {
    if (reduce || !("IntersectionObserver" in window)) return;
    var vh = window.innerHeight;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    app.querySelectorAll(".section, .card, .row, .fig, .stats, .next").forEach(function (el) {
      if (el.getBoundingClientRect().top > vh) { el.classList.add("pre"); io.observe(el); }
    });
  }

  /* backup for the observer: on every scroll, reveal anything that has reached the viewport */
  function revealVisible() {
    var vh = window.innerHeight;
    app.querySelectorAll(".pre:not(.in)").forEach(function (el) { if (el.getBoundingClientRect().top < vh * 0.95) el.classList.add("in"); });
  }
  var topBtn = document.getElementById("top-btn");
  function updateTop() { revealVisible(); topBtn.classList.toggle("on", isCase && window.scrollY > 700); }
  window.addEventListener("scroll", updateTop, { passive: true });
  topBtn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });

  window.addEventListener("hashchange", render);
  render();

  /* click-to-enlarge */
  var lb = document.getElementById("lb"), lbi = lb.querySelector("img");
  document.addEventListener("click", function (e) {
    var z = e.target.closest("[data-zoom]");
    if (z) { lbi.src = z.getAttribute("data-zoom"); lb.classList.add("on"); }
    else if (lb.classList.contains("on")) lb.classList.remove("on");
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.classList.remove("on"); });

  /* optional dark view, off by default. The site is beige unless a visitor switches it. */
  document.getElementById("theme").addEventListener("click", function () {
    var d = document.documentElement;
    d.getAttribute("data-theme") === "dark" ? d.removeAttribute("data-theme") : d.setAttribute("data-theme", "dark");
  });
  document.getElementById("yr").textContent = new Date().getFullYear();
})();
