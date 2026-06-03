// =============================================
//  PORTFOLIO MAIN.JS
//  Toast · Light/Dark · Modal · FR/EN · Timeline · GitHub API
// =============================================

/* ─── CONFIG (à personnaliser) ─────────────── */
const GITHUB_USERNAME = document.body.dataset.github || '';
const EMAIL           = 'wassil.henni@gmail.com';

/* ─── TRADUCTIONS (FR · EN) ──────────────── */
const i18n = {
  fr: {
    'nav.profil':          'Profil',
    'nav.skills':          'Compétences',
    'nav.projects':        'Projets',
    'nav.contact':         'Contact',
    'settings.title':      'Réglages',
    'settings.lang':       'Langue',

    'settings.theme':      'Apparence',
    'settings.dark':       'Sombre',
    'settings.light':      'Clair',
    'settings.fontsize':   'Taille du texte',
    'hero.badge':          'BTS SIO · SLAM · 2024–2026',
    'hero.sub':            'Développeur web & mobile',
    'status':              'En formation',
    'skills.label':        'Compétences',
    'stack.label':         'Stack',
    'about.tab.bio':       'À propos',
    'about.tab.timeline':  'Parcours',
    'about.tab.certs':     'Certifications',
    'about.text':          'Passionné de dev web & mobile, en 2ᵉ année de BTS SIO SLAM à Valenciennes. Curieux, autonome.',
    'tl.bts':              'BTS SIO option SLAM',
    'tl.stage':            'Stage · Développeur Web',
    'tl.bac':              'Bac Général spécialité Physique-Chimie / SVT',
    'tl.first':            'Premier projet personnel',
    'stats.label':         'Activité GitHub',
    'stats.projects':      'Projets',
    'stats.repos':         'Dépôts publics',
    'stats.years':         'Ans de formation',
    'contact.label':       'Contact',
    'contact.mail':        'Email',
    'proj.title':          'Projets',
    'toast.copied':        'Email copié !',
    'settings.animations': 'Animations',
    'settings.anim.on':    'Activer',
    'settings.anim.off':   'Désactiver',
    'skills.frontend':     'HTML & CSS avancé, JavaScript ES6+, React — construction d\'interfaces modernes et accessibles.',
    'skills.backend':      'PHP orienté objet, Laravel, Node.js — conception d\'APIs REST et logique serveur.',
    'skills.db':           'MySQL, modélisation relationnelle, requêtes complexes et optimisées.',
    'skills.tools':        'Git, GitHub, VS Code, Linux.',
    // Profil / parcours
    'profil.parcours':     'Parcours',
    'tl.bac.title':        'Bac Général · SVT · Physique',
    'tl.stage1.date':      '2025 · 4 sem.',
    'tl.stage1.title':     'Stage 1ʳᵉ année · Dev Web',
    'tl.stage2.date':      '2026 · 6 sem.',
    'tl.stage2.title':     'Stage 2ᵉ année · Dev Web',
    'common.fullscreen':   'Voir en plein écran →',
    'common.details':      'Voir détails →',
    'common.detailsfull':  'Voir le détail complet →',
    'fs.parcours.title':   'Mon Parcours',
    'fs.certs.title':      'Certifications',
    // Compétences
    'sk.db.head':          'Base de données',
    'sk.tools.head':       'Outils',
    // GitHub
    'stats.less':          'Moins',
    'stats.more':          'Plus',
    'stats.repos.txt':     'dépôts publics',
    'stats.followers.txt': 'followers',
    // Contact
    'contact.email':       'Email',
    'contact.phone':       'Tél.',
    // Catégories projets
    'cat.school.title':    'Formation',
    'cat.school.sub':      'BTS SIO · SLAM — Henri Wallon',
    'cat.pro.title':       'Professionnel',
    'cat.pro.sub':         'Expériences en entreprise',
    'cat.perso.title':     'Perso',
    'cat.perso.sub':       'Projets personnels',
    'proj.perso.type':     'Projet Personnel',
    // Cartes projets
    'proj.conges.title':   'Gestion des congés',
    'proj.conges.desc':    'Application C# de gestion de congés — dashboard temps réel.',
    'proj.salaires.title': 'Gestion des salaires',
    'proj.salaires.desc':  'Application web de gestion des salaires — dashboard temps réel, calculs automatiques, filtres de recherche, statistiques.',
    'proj.notes.title':    'Notes des praticiens',
    'proj.notes.desc':     'Application mobile pour noter les praticiens et consulter leurs commentaires.',
    'proj.stage1.type':    'Stage · 4 sem.',
    'proj.stage1.title':   'Stage · Développeur Web',
    'proj.stage1.desc':    "Développement d'un intranet interne en entreprise — gestion des actualités, dashboard et site dynamique.",
    'proj.stage2.type':    'Stage · 6 sem.',
    'proj.stage2.title':   'Stage · Développeur Full-Stack',
    'proj.stage2.desc':    "Conception et déploiement d'un intranet complet — de la modélisation BDD au déploiement.",
    'proj.todo.desc':      'Projet web et mobile pour une To-Do List & un gestionnaire de projets.',
    'proj.mpg.desc':       'Site vitrine pour une concession automobile — catalogue de véhicules, filtres de recherche et formulaire de contact.',
    // Features
    'feat.dashboard':      'Dashboard',
    'feat.usermgmt':       'Gestion Utilisateur',
    'feat.autocalc':       'Calculs auto',
    'feat.filters':        'Filtres',
    'feat.stats':          'Statistiques',
    'feat.roles':          'Rôles',
    'feat.ratings':        'Notes',
    'feat.comments':       'Commentaires',
    'feat.news':           'Actualités',
    'feat.dynsite':        'Site Dynamique',
    'feat.tests':          'Tests',
    'feat.deploy':         'Déploiement',
    'feat.docs':           'Documentation',
    'feat.realtime':       'Temps réel',
    'feat.db':             'BDD',
    'feat.catalog':        'Catalogue',
    'feat.contact':        'Contact',
  },
  en: {
    'nav.profil':          'Profile',
    'nav.skills':          'Skills',
    'nav.projects':        'Projects',
    'nav.contact':         'Contact',
    'settings.title':      'Settings',
    'settings.lang':       'Language',

    'settings.theme':      'Appearance',
    'settings.dark':       'Dark',
    'settings.light':      'Light',
    'settings.fontsize':   'Font size',
    'hero.badge':          'BTS SIO · SLAM · 2024–2026',
    'hero.sub':            'Web & mobile developer',
    'status':              'In training',
    'skills.label':        'Skills',
    'stack.label':         'Tech Stack',
    'about.tab.bio':       'About',
    'about.tab.timeline':  'Journey',
    'about.tab.certs':     'Certifications',
    'about.text':          'Passionate about web & mobile dev, 2nd year BTS SIO SLAM student in Valenciennes. Curious, autonomous, always coding.',
    'tl.bts':              'BTS SIO · SLAM (Web Dev)',
    'tl.stage':            'Internship · Web Developer',
    'tl.bac':              'General Baccalaureate · Physics / Biology',
    'tl.first':            'First personal project',
    'stats.label':         'GitHub Activity',
    'stats.projects':      'Projects',
    'stats.repos':         'Public repos',
    'stats.years':         'Years in training',
    'contact.label':       'Contact',
    'contact.mail':        'Email',
    'proj.title':          'Projects',
    'toast.copied':        'Email copied!',
    'settings.animations': 'Animations',
    'settings.anim.on':    'Enable',
    'settings.anim.off':   'Disable',
    'skills.frontend':     'Advanced HTML & CSS, ES6+ JavaScript, React — modern and accessible UI development.',
    'skills.backend':      'Object-oriented PHP, Laravel, Node.js — REST API design and server-side logic.',
    'skills.db':           'MySQL, relational modeling, complex and optimized queries.',
    'skills.tools':        'Git, GitHub, VS Code, Linux.',
    // Profile / journey
    'profil.parcours':     'Education',
    'tl.bac.title':        'General Baccalaureate · Biology · Physics',
    'tl.stage1.date':      '2025 · 4 wks',
    'tl.stage1.title':     '1st-year Internship · Web Dev',
    'tl.stage2.date':      '2026 · 6 wks',
    'tl.stage2.title':     '2nd-year Internship · Web Dev',
    'common.fullscreen':   'View fullscreen →',
    'common.details':      'View details →',
    'common.detailsfull':  'View full details →',
    'fs.parcours.title':   'My Journey',
    'fs.certs.title':      'Certifications',
    // Skills
    'sk.db.head':          'Database',
    'sk.tools.head':       'Tools',
    // GitHub
    'stats.less':          'Less',
    'stats.more':          'More',
    'stats.repos.txt':     'public repos',
    'stats.followers.txt': 'followers',
    // Contact
    'contact.email':       'Email',
    'contact.phone':       'Phone',
    // Project categories
    'cat.school.title':    'Education',
    'cat.school.sub':      'BTS SIO · SLAM — Henri Wallon',
    'cat.pro.title':       'Professional',
    'cat.pro.sub':         'Work experience',
    'cat.perso.title':     'Personal',
    'cat.perso.sub':       'Personal projects',
    'proj.perso.type':     'Personal project',
    // Project cards
    'proj.conges.title':   'Leave management',
    'proj.conges.desc':    'C# leave management app — real-time dashboard.',
    'proj.salaires.title': 'Payroll management',
    'proj.salaires.desc':  'Web payroll app — real-time dashboard, automatic calculations, search filters and statistics.',
    'proj.notes.title':    'Practitioner reviews',
    'proj.notes.desc':     'Mobile app to rate practitioners and read their reviews.',
    'proj.stage1.type':    'Internship · 4 wks',
    'proj.stage1.title':   'Internship · Web Developer',
    'proj.stage1.desc':    'Development of an in-house intranet — news management, dashboard and dynamic site.',
    'proj.stage2.type':    'Internship · 6 wks',
    'proj.stage2.title':   'Internship · Full-Stack Developer',
    'proj.stage2.desc':    'Design and deployment of a complete intranet — from database modeling to deployment.',
    'proj.todo.desc':      'Web & mobile project for a To-Do List & project manager.',
    'proj.mpg.desc':       'Showcase site for a car dealership — vehicle catalogue, search filters and contact form.',
    // Features
    'feat.dashboard':      'Dashboard',
    'feat.usermgmt':       'User management',
    'feat.autocalc':       'Auto calculations',
    'feat.filters':        'Filters',
    'feat.stats':          'Statistics',
    'feat.roles':          'Roles',
    'feat.ratings':        'Ratings',
    'feat.comments':       'Comments',
    'feat.news':           'News',
    'feat.dynsite':        'Dynamic site',
    'feat.tests':          'Tests',
    'feat.deploy':         'Deployment',
    'feat.docs':           'Documentation',
    'feat.realtime':       'Real-time',
    'feat.db':             'Database',
    'feat.catalog':        'Catalogue',
    'feat.contact':        'Contact',
  },

};

let currentLang    = localStorage.getItem('lang')    || 'fr';
let currentTheme   = localStorage.getItem('theme')   || 'light';

function t(key) {
  return i18n[currentLang]?.[key] ?? i18n['fr'][key] ?? key;
}

/* ─── APPLY LANG ────────────────────────────── */
function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.documentElement.lang = currentLang;
  document.getElementById('nav-lang-badge').textContent = currentLang.toUpperCase();
  document.querySelectorAll('.lang-opt').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === currentLang));
}

/* ─── APPLY THEME ───────────────────────────── */
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.getElementById('theme-dark') .classList.toggle('active', theme === 'dark');
  document.getElementById('theme-light').classList.toggle('active', theme === 'light');
}

/* ─── SETTINGS PANEL ────────────────────────── */
const panel    = document.getElementById('settings-panel');
const backdrop = document.getElementById('settings-backdrop');
const settBtn  = document.getElementById('settings-btn');
const settClose = document.getElementById('settings-close');

function openSettings() {
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  backdrop.classList.add('show');
  settBtn.classList.add('active');
}
function closeSettings() {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  backdrop.classList.remove('show');
  settBtn.classList.remove('active');
}

settBtn .addEventListener('click', () => panel.classList.contains('open') ? closeSettings() : openSettings());
settClose.addEventListener('click', closeSettings);
backdrop .addEventListener('click', closeSettings);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSettings(); });

/* ─── LANG OPTIONS ──────────────────────────── */
document.querySelectorAll('.lang-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem('lang', currentLang);
    applyLang();
  });
});

/* ─── THEME OPTIONS ─────────────────────────── */
document.getElementById('theme-dark') .addEventListener('click', () => { currentTheme = 'dark';  localStorage.setItem('theme', 'dark');  applyTheme('dark');  });
document.getElementById('theme-light').addEventListener('click', () => { currentTheme = 'light'; localStorage.setItem('theme', 'light'); applyTheme('light'); });

/* ─── ANIMATIONS ────────────────────────────── */
let animEnabled = localStorage.getItem('animations') !== 'off';

function applyAnimations(enabled) {
  animEnabled = enabled;
  document.documentElement.classList.toggle('no-animations', !enabled);
  localStorage.setItem('animations', enabled ? 'on' : 'off');
  document.getElementById('anim-on') .classList.toggle('active',  enabled);
  document.getElementById('anim-off').classList.toggle('active', !enabled);
}

document.getElementById('anim-on') .addEventListener('click', () => applyAnimations(true));
document.getElementById('anim-off').addEventListener('click', () => applyAnimations(false));

/* ─── FONT SIZE ──────────────────────────────── */
let currentFontSize = parseInt(localStorage.getItem('fontSize') || '14', 10);

function applyFontSize(px) {
  currentFontSize = px;
  document.documentElement.style.fontSize = px + 'px';
  localStorage.setItem('fontSize', px);
  document.querySelectorAll('.fs-opt').forEach(b =>
    b.classList.toggle('active', parseInt(b.dataset.fs) === px));
  document.getElementById('fs-slider').value = px;
}

document.querySelectorAll('.fs-opt').forEach(btn => {
  btn.addEventListener('click', () => applyFontSize(parseInt(btn.dataset.fs)));
});

document.getElementById('fs-slider').addEventListener('input', e => {
  applyFontSize(parseInt(e.target.value));
});

/* ─── TOAST ─────────────────────────────────── */
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
}

/* ─── COPY EMAIL ────────────────────────────── */
document.getElementById('email-copy').addEventListener('click', () => {
  navigator.clipboard.writeText(EMAIL).then(() => showToast(t('toast.copied')));
});


/* ─── SHOWCASE CAROUSELS (per category) ─────── */
document.querySelectorAll('[data-showcase]').forEach(showcase => {
  const slides = showcase.querySelectorAll('.showcase-slide');
  const total = slides.length;
  if (!total) return;

  let active = 0;

  // Hide arrows/pips for single-slide showcases
  if (total <= 1) {
    showcase.querySelectorAll('.showcase-prev, .showcase-next').forEach(b => b.style.display = 'none');
  }

  function wrap(offset) {
    let d = offset % total;
    if (d > total / 2)  d -= total;
    if (d < -total / 2) d += total;
    return d;
  }

  function updatePositions() {
    slides.forEach((slide, i) => {
      const d = wrap(i - active);
      let pos = 'hidden';
      if (d === 0)       pos = 'active';
      else if (d === -1) pos = 'left';
      else if (d === 1)  pos = 'right';
      else if (d === -2) pos = 'far-left';
      else if (d === 2)  pos = 'far-right';
      slide.setAttribute('data-pos', pos);
    });

    showcase.querySelectorAll('.showcase-pip').forEach((pip, i) =>
      pip.classList.toggle('active', i === active));

    const counter = showcase.querySelector('.showcase-counter-current');
    if (counter) counter.textContent = active + 1;
  }

  function goTo(idx) {
    active = ((idx % total) + total) % total;
    updatePositions();
  }

  // Build pips
  const pipsContainer = showcase.querySelector('.showcase-pips');
  if (pipsContainer && total > 1) {
    for (let i = 0; i < total; i++) {
      const pip = document.createElement('button');
      pip.className = 'showcase-pip' + (i === 0 ? ' active' : '');
      pip.addEventListener('click', () => goTo(i));
      pipsContainer.appendChild(pip);
    }
  }

  // Main nav arrows
  showcase.querySelector('.showcase-prev')?.addEventListener('click', () => goTo(active - 1));
  showcase.querySelector('.showcase-next')?.addEventListener('click', () => goTo(active + 1));

  // Init positions
  updatePositions();

  // Click active slide → open detail overlay
  showcase.addEventListener('click', e => {
    const slide = e.target.closest('.showcase-slide[data-pos="active"]');
    if (!slide) return;
    openProjectDetail(slide.querySelector('.showcase-card'));
  });
});

// Keyboard nav — only the carousel closest to viewport center
document.addEventListener('keydown', e => {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
  let best = null, bestDist = Infinity;
  document.querySelectorAll('[data-showcase]').forEach(showcase => {
    const rect = showcase.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;
    const center = (rect.top + rect.bottom) / 2;
    const dist = Math.abs(center - window.innerHeight / 2);
    if (dist < bestDist) { bestDist = dist; best = showcase; }
  });
  if (!best) return;
  const btn = best.querySelector(e.key === 'ArrowLeft' ? '.showcase-prev' : '.showcase-next');
  if (btn) { btn.click(); e.preventDefault(); }
});

/* ─── PROJECT DETAIL OVERLAY ─────────────────── */
function openProjectDetail(card) {
  if (!card) return;

  const images = [...card.querySelectorAll('.showcase-images-track > *')];
  const title = card.querySelector('.showcase-title')?.textContent || '';
  const type = card.querySelector('.showcase-type')?.textContent || '';
  const year = card.querySelector('.showcase-year')?.textContent || '';
  const desc = card.querySelector('.showcase-desc')?.textContent || '';
  const feats = [...card.querySelectorAll('.showcase-feats span')].map(s => s.textContent);
  const tags = [...card.querySelectorAll('.showcase-tags span')].map(s => s.textContent);
  const detailLink = card.querySelector('.sl-detail')?.href || '';
  const ghLink = card.querySelector('.sl-gh')?.href || '';

  let imgIdx = 0;

  const overlay = document.createElement('div');
  overlay.className = 'proj-detail-overlay';

  overlay.innerHTML = `
    <div class="proj-detail-panel">
      <button class="proj-detail-close">\u2715</button>
      <div class="proj-detail-gallery">
        <div class="proj-detail-img-main"></div>
        <div class="proj-detail-img-nav">
          <button class="proj-detail-img-prev">\u2039</button>
          <span class="proj-detail-img-counter"></span>
          <button class="proj-detail-img-next">\u203A</button>
        </div>
        <div class="proj-detail-thumbs"></div>
      </div>
      <div class="proj-detail-info">
        <div class="proj-detail-top">
          <span class="proj-detail-type">${type}</span>
          <span class="proj-detail-year">${year}</span>
        </div>
        <h2 class="proj-detail-title">${title}</h2>
        <p class="proj-detail-desc">${desc}</p>
        <div class="proj-detail-feats">${feats.map(f => '<span>' + f + '</span>').join('')}</div>
        <div class="proj-detail-tags">${tags.map(t => '<span>' + t + '</span>').join('')}</div>
        <div class="proj-detail-actions">
          ${detailLink ? '<a href="' + detailLink + '" class="proj-detail-btn proj-detail-btn--primary">' + t('common.detailsfull') + '</a>' : ''}
          ${ghLink && ghLink !== '#' ? '<a href="' + ghLink + '" class="proj-detail-btn proj-detail-btn--gh" target="_blank">GitHub</a>' : ''}
        </div>
      </div>
    </div>
  `;

  const mainImg = overlay.querySelector('.proj-detail-img-main');
  const thumbs = overlay.querySelector('.proj-detail-thumbs');
  const counter = overlay.querySelector('.proj-detail-img-counter');

  function showImg(idx) {
    imgIdx = ((idx % images.length) + images.length) % images.length;
    mainImg.innerHTML = '';
    const clone = images[imgIdx].cloneNode(true);
    clone.style.display = '';
    mainImg.appendChild(clone);
    counter.innerHTML = '<strong>' + (imgIdx + 1) + '</strong> / ' + images.length;
    thumbs.querySelectorAll('.proj-detail-thumb').forEach((t, i) =>
      t.classList.toggle('active', i === imgIdx));
  }

  // Build thumbnails
  images.forEach((img, i) => {
    const thumb = document.createElement('button');
    thumb.className = 'proj-detail-thumb' + (i === 0 ? ' active' : '');
    const clone = img.cloneNode(true);
    clone.style.display = '';
    thumb.appendChild(clone);
    thumb.addEventListener('click', () => showImg(i));
    thumbs.appendChild(thumb);
  });

  // Hide nav if single image
  if (images.length <= 1) {
    overlay.querySelector('.proj-detail-img-nav').style.display = 'none';
    thumbs.style.display = 'none';
  }

  function close() {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 300);
    document.body.style.overflow = '';
  }

  overlay.querySelector('.proj-detail-close').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  overlay.querySelector('.proj-detail-panel').addEventListener('click', e => e.stopPropagation());
  overlay.querySelector('.proj-detail-img-prev').addEventListener('click', () => showImg(imgIdx - 1));
  overlay.querySelector('.proj-detail-img-next').addEventListener('click', () => showImg(imgIdx + 1));

  function onKey(e) {
    if (e.key === 'Escape') close();
    if (images.length > 1 && e.key === 'ArrowLeft')  showImg(imgIdx - 1);
    if (images.length > 1 && e.key === 'ArrowRight') showImg(imgIdx + 1);
  }
  document.addEventListener('keydown', onKey);
  const origRemove = overlay.remove.bind(overlay);
  overlay.remove = () => { document.removeEventListener('keydown', onKey); origRemove(); };

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  showImg(0);
  requestAnimationFrame(() => overlay.classList.add('active'));
}


/* ─── NAV LINKS → SCROLL ────────────────────────── */
document.querySelectorAll('.nav-link').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;

    document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    setTimeout(() => btn.classList.remove('active'), 1200);

    const section = document.getElementById(target) || document.getElementById('projects');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


/* ─── ABOUT TABS (Bio / Timeline) ───────────── */
document.querySelectorAll('.about-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll('.about-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    document.querySelectorAll('.about-panel').forEach(p => p.classList.toggle('hidden', p.dataset.panel !== tab));
  });
});

/* ─── FULLSCREEN EXPAND (Timeline / Certs) ───── */
(function () {
  const fsPanel = document.getElementById('fullscreen-panel');
  const fsBody  = document.getElementById('fs-body');
  const fsClose = fsPanel?.querySelector('.fs-close');
  if (!fsPanel || !fsBody) return;

  function openFs(type) {
    if (type === 'timeline') {
      fsBody.innerHTML = buildFsTimeline();
    } else if (type === 'certs') {
      fsBody.innerHTML = buildFsCerts();
    }
    fsPanel.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeFs() {
    fsPanel.classList.add('hidden');
    document.body.style.overflow = '';
    fsBody.innerHTML = '';
  }

  fsClose.addEventListener('click', closeFs);
  fsPanel.addEventListener('click', e => { if (e.target === fsPanel) closeFs(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !fsPanel.classList.contains('hidden')) closeFs();
  });

  // Expand buttons
  document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openFs(btn.dataset.expand);
    });
  });

  function buildFsTimeline() {
    const items = document.querySelectorAll('.timeline .tl-item');
    let html = '<h2 class="fs-timeline-title">' + t('fs.parcours.title') + '</h2><div class="fs-timeline">';
    items.forEach(item => {
      const date  = item.querySelector('.tl-date')?.textContent || '';
      const title = item.querySelector('.tl-title')?.textContent || '';
      const sub   = item.querySelector('.tl-sub')?.textContent || '';
      const isActive = item.querySelector('.tl-dot--active') ? ' fs-tl-dot--active' : '';
      html += `
        <div class="fs-tl-item">
          <div class="fs-tl-dot${isActive}"></div>
          <span class="fs-tl-date">${date}</span>
          <div class="fs-tl-card">
            <div class="fs-tl-title">${title}</div>
            <div class="fs-tl-sub">${sub}</div>
          </div>
        </div>`;
    });
    html += '</div>';
    return html;
  }

  function buildFsCerts() {
    const cats = document.querySelectorAll('.certs-scroll .cert-cat');
    let html = '<h2 class="fs-certs-title">' + t('fs.certs.title') + '</h2><div class="fs-certs">';
    cats.forEach(cat => {
      const catTitle = cat.querySelector('.cert-cat-title')?.textContent || '';
      html += `<div><div class="fs-cert-cat-title">${catTitle}</div>`;
      cat.querySelectorAll('.cert-item').forEach(item => {
        const name = item.querySelector('.cert-name')?.textContent || '';
        const org  = item.querySelector('.cert-org')?.textContent || '';
        const date = item.querySelector('.cert-date')?.textContent || '';
        const badge = item.querySelector('.cert-badge');
        const isOk = badge?.classList.contains('cert-ok');
        const badgeClass = isOk ? 'fs-cert-ok' : 'fs-cert-pending';
        const badgeText  = badge?.textContent || '';
        html += `
          <div class="fs-cert-item">
            <div>
              <div class="fs-cert-name">${name}</div>
              <div class="fs-cert-org">${org}</div>
            </div>
            <div style="display:flex;align-items:center;gap:10px;">
              <span class="fs-cert-date">${date}</span>
              <span class="fs-cert-badge ${badgeClass}">${badgeText}</span>
            </div>
          </div>`;
      });
      html += '</div>';
    });
    html += '</div>';
    return html;
  }
})();

/* ─── COMPTEUR ANIMÉ ────────────────────────── */
function animateCount(el, target, duration = 900) {
  const start = performance.now();
  const update = now => {
    const progress = Math.min((now - start) / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}

/* ─── GITHUB API ────────────────────────────── */
async function loadGithubStats() {
  if (!GITHUB_USERNAME || GITHUB_USERNAME === 'votre-username') return;
  const el = document.getElementById('stats-inline');
  if (!el) return;
  try {
    const res  = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!res.ok) return;
    const data = await res.json();
    const repos     = data.public_repos ?? '—';
    const followers = data.followers    ?? '—';
    el.textContent  = `${repos} ${t('stats.repos.txt')} · ${followers} ${t('stats.followers.txt')}`;
  } catch {
    // silencieux
  }
}

/* ─── INIT : appliquer les préférences sauvegardées ─ */
applyLang();
applyTheme(currentTheme);
applyFontSize(currentFontSize);
applyAnimations(animEnabled);

window.addEventListener('load', () => {
  loadGithubStats();
});

/* ─── GRILLE DE COMMITS ──────────────────────────
 * NB : l'API GitHub des contributions (GraphQL) exige un token.
 * Un token ne DOIT jamais être exposé côté client. Cette grille est
 * donc purement décorative. Pour afficher de vraies contributions,
 * passer par une fonction serverless (Netlify/Vercel) qui garde le
 * token côté serveur, ou intégrer une image type github-readme-stats.
 * ─────────────────────────────────────────────── */
const commitGrid = document.getElementById('commit-grid');
if (commitGrid) {
  const levels = ['', 'lv1', 'lv1', 'lv2', 'lv2', 'lv3', 'lv4'];
  const frag = document.createDocumentFragment();
  for (let w = 0; w < 24; w++) {
    for (let d = 0; d < 7; d++) {
      const cell = document.createElement('div');
      const empty = Math.random() > 0.6;
      cell.className = 'commit-cell' + (empty ? '' : ' ' + levels[Math.floor(Math.random() * levels.length)]);
      frag.appendChild(cell);
    }
  }
  commitGrid.appendChild(frag);
}


/* ─── HAMBURGER MENU MOBILE ─────────────── */
(function () {
  const btn  = document.getElementById('nav-hamburger');
  const menu = document.getElementById('nav-mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);
  });

  // Ferme le menu quand on clique sur un lien
  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    });
  });

  // Afficher le hamburger uniquement sur mobile (CSS gère display:none sur desktop)
})();

/* ─── TILT CARDS — supprimé (trop lourd avec rotateX/rotateY) ─── */
/* Le lift hover est géré en CSS pur via .card:hover { transform: translateY(-2px) } */
