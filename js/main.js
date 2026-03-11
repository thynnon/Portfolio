// =============================================
//  PORTFOLIO MAIN.JS
//  Toast · Light/Dark · Modal · FR/EN · Timeline · GitHub API
// =============================================

/* ─── CONFIG (à personnaliser) ─────────────── */
const GITHUB_USERNAME = document.body.dataset.github || '';
const EMAIL           = 'alex.dupont@email.com';

/* ─── DONNÉES PROJETS (modal) ──────────────── */
const PROJECTS = {
  p1: {
    fr: {
      type: 'Projet E4',
      title: 'GestStock',
      desc: 'Application web de gestion de stock développée pour une PME lors de mon stage. Le système permet de gérer les produits, les fournisseurs, et les mouvements de stock en temps réel.',
      features: [
        'Tableau de bord avec graphiques de tendances',
        'CRUD complet produits & fournisseurs',
        'Alertes automatiques de réapprovisionnement',
        'Export des rapports en PDF et CSV',
        'Système d\'authentification avec rôles (admin/user)',
      ],
    },
    en: {
      type: 'E4 Project',
      title: 'GestStock',
      desc: 'Web-based stock management app developed for an SME during my internship. Real-time product, supplier, and stock movement management.',
      features: [
        'Dashboard with trend charts',
        'Full CRUD for products & suppliers',
        'Automatic restock alerts',
        'PDF and CSV report exports',
        'Role-based authentication (admin/user)',
      ],
    },
    tags: ['PHP', 'Symfony', 'MySQL', 'Bootstrap', 'Twig', 'Chart.js'],
    github: '#',
    demo: '#',
  },
  p2: {
    fr: {
      type: 'Projet Personnel',
      title: 'TaskFlow',
      desc: 'Gestionnaire de tâches collaboratif en temps réel, inspiré de Trello. Les équipes peuvent créer des tableaux, déplacer des cartes par drag & drop, et voir les changements instantanément.',
      features: [
        'Temps réel via WebSockets (Socket.io)',
        'Drag & drop des cartes entre colonnes',
        'Assignation de membres & étiquettes colorées',
        'Notifications en temps réel',
        'API REST documentée avec Swagger',
      ],
    },
    en: {
      type: 'Personal Project',
      title: 'TaskFlow',
      desc: 'Real-time collaborative task manager inspired by Trello. Teams can create boards, drag & drop cards, and see changes instantly.',
      features: [
        'Real-time via WebSockets (Socket.io)',
        'Drag & drop between columns',
        'Member assignment & color labels',
        'Real-time notifications',
        'REST API documented with Swagger',
      ],
    },
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
    github: '#',
    demo: '#',
  },
  p3: {
    fr: {
      type: 'Projet E5',
      title: 'QuizMaster',
      desc: 'Application mobile de quiz personnalisables ciblant les enseignants et formateurs. Fonctionnement hors-ligne avec synchronisation cloud au rétablissement de la connexion.',
      features: [
        'Mode hors-ligne complet avec MySQL',
        'Synchronisation cloud automatique',
        'Création de quiz personnalisés',
        'Classements et statistiques de progression',
        'Partage via QR Code',
      ],
    },
    en: {
      type: 'E5 Project',
      title: 'QuizMaster',
      desc: 'Mobile quiz app targeting teachers and trainers. Full offline support with automatic cloud sync when connection is restored.',
      features: [
        'Full offline mode with MySQL',
        'Automatic cloud sync',
        'Custom quiz creation',
        'Leaderboards & progress stats',
        'QR Code sharing',
      ],
    },
    tags: ['React Native', 'Expo', 'MySQL', 'REST API', 'AsyncStorage'],
    github: '#',
    demo: '#',
  },
  p4: {
    fr: {
      type: 'Projet',
      title: 'MonProjet',
      desc: 'Description de votre quatrième projet. À compléter avec vos informations.',
      features: [
        'Fonctionnalité 1',
        'Fonctionnalité 2',
        'Fonctionnalité 3',
      ],
    },
    en: {
      type: 'Project',
      title: 'MyProject',
      desc: 'Description of your fourth project. To be filled with your information.',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
      ],
    },
    tags: ['Tag1', 'Tag2', 'Tag3'],
    github: '#',
    demo: '#',
  },
};

/* ─── TRADUCTIONS (FR · EN · ES · DE · IT) ──── */
const i18n = {
  fr: {
    'nav.profil':          'Profil',
    'nav.skills':          'Compétences',
    'nav.projects':        'Projets',
    'nav.contact':         'Contact',
    'settings.title':      'Réglages',
    'settings.lang':       'Langue',
    'settings.palette':    'Palette de couleurs',
    'settings.theme':      'Apparence',
    'settings.dark':       'Sombre',
    'settings.light':      'Clair',
    'settings.fontsize':   'Taille du texte',
    'hero.badge':          'BTS SIO · SLAM · 2024–2026',
    'hero.sub':            'Développeur web & mobile',
    'status':              'En formation',
    'loc.country':         'France · 59',
    'skills.label':        'Compétences',
    'stack.label':         'Stack',
    'about.tab.bio':       'À propos',
    'about.tab.timeline':  'Parcours',
    'about.tab.certs':     'Certifications',
    'about.text':          'Passionné de dev web & mobile, en 2ᵉ année de BTS SIO SLAM à Valenciennes. Curieux, autonome, toujours en train de coder.',
    'tl.bts':              'BTS SIO option SLAM',
    'tl.stage':            'Stage · Développeur Web',
    'tl.bac':              'Bac Général spécialité Physique-Chimie / SVT',
    'tl.first':            'Premier projet personnel',
    'cv.text':             'Curriculum Vitæ',
    'cv.btn':              'Télécharger',
    'stats.label':         'Activité GitHub',
    'stats.projects':      'Projets',
    'stats.repos':         'Dépôts publics',
    'stats.years':         'Ans de formation',
    'contact.label':       'Contact',
    'contact.mail':        'Email',
    'proj.hint':           'Cliquer pour détails',
    'proj.title':          'Projets',
    'proj.cat.perso':      'École',
    'proj.cat.school':     'Stage',
    'proj.ap':             'Activité Professionnelle',
    'proj.stage.label':    'Personnel',
    'p1.type':             'Projet E4',
    'p1.desc':             'App web de gestion de stock — dashboard, alertes, export PDF/CSV.',
    'p2.type':             'Perso',
    'p2.desc':             'Kanban collaboratif temps réel.',
    'p3.type':             'Projet E5',
    'p3.desc':             'App mobile quiz hors-ligne.',
    'p4.type':             'Projet',
    'p4.desc':             'À compléter.',
    'toast.copied':        'Email copié !',
    'modal.close':         'Fermer',
    'modal.features':      'Fonctionnalités',
    'modal.github':        'GitHub',
    'modal.demo':          'Voir la démo',
    'skills.frontend':     'HTML & CSS avancé, JavaScript ES6+, React — construction d\'interfaces modernes et accessibles.',
    'skills.backend':      'PHP orienté objet, Laravel, Node.js — conception d\'APIs REST et logique serveur.',
    'skills.db':           'MySQL, modélisation relationnelle, requêtes complexes et optimisées.',
    'skills.tools':        'Git, GitHub, VS Code, Linux.',
  },
  en: {
    'nav.profil':          'Profile',
    'nav.skills':          'Skills',
    'nav.projects':        'Projects',
    'nav.contact':         'Contact',
    'settings.title':      'Settings',
    'settings.lang':       'Language',
    'settings.palette':    'Color palette',
    'settings.theme':      'Appearance',
    'settings.dark':       'Dark',
    'settings.light':      'Light',
    'settings.fontsize':   'Font size',
    'hero.badge':          'BTS IT · Web Dev · 2024–2026',
    'hero.sub':            'Web & mobile developer',
    'status':              'Studying',
    'loc.country':         'France',
    'skills.label':        'Skills',
    'stack.label':         'Tech Stack',
    'about.tab.bio':       'About',
    'about.tab.timeline':  'Journey',
    'about.tab.certs':     'Certifications',
    'about.text':          'Passionate about web & mobile dev, 2nd year IT student in Toulouse. Curious, autonomous, always coding.',
    'tl.bts':              'BTS IT SLAM (Web Dev)',
    'tl.stage':            'Internship · Web Developer',
    'tl.bac':              'Baccalaureate STI2D SIN',
    'tl.first':            'First personal project',
    'cv.text':             'Curriculum Vitæ',
    'cv.btn':              'Download',
    'stats.label':         'GitHub Activity',
    'stats.projects':      'Projects',
    'stats.repos':         'Public repos',
    'stats.years':         'Years in training',
    'contact.label':       'Contact',
    'contact.mail':        'Email',
    'proj.hint':           'Click for details',
    'proj.title':          'Projects',
    'proj.cat.perso':      'Personal',
    'proj.cat.school':     'School',
    'proj.ap':             'Professional Activity',
    'proj.stage.label':    'Internship',
    'p1.type':             'E4 Project',
    'p1.desc':             'Web stock management app — dashboard, alerts, PDF/CSV export.',
    'p2.type':             'Personal',
    'p2.desc':             'Real-time collaborative Kanban board.',
    'p3.type':             'E5 Project',
    'p3.desc':             'Offline mobile quiz app.',
    'p4.type':             'Project',
    'p4.desc':             'To be filled.',
    'toast.copied':        'Email copied!',
    'modal.close':         'Close',
    'modal.features':      'Features',
    'modal.github':        'GitHub',
    'modal.demo':          'Live demo',
    'skills.frontend':     'Advanced HTML & CSS, ES6+ JavaScript, React — modern and accessible UI development.',
    'skills.backend':      'Object-oriented PHP, Symfony, Node.js — REST API design and server-side logic.',
    'skills.db':           'MySQL, relational modeling, complex and optimized queries.',
    'skills.tools':        'Git, GitHub, VS Code, Linux, Agile / Scrum.',
  },

  es: {
    'nav.profil':          'Perfil',
    'nav.skills':          'Habilidades',
    'nav.projects':        'Proyectos',
    'nav.contact':         'Contacto',
    'settings.title':      'Ajustes',
    'settings.lang':       'Idioma',
    'settings.palette':    'Paleta de colores',
    'settings.theme':      'Apariencia',
    'settings.dark':       'Oscuro',
    'settings.light':      'Claro',
    'settings.fontsize':   'Tamaño de fuente',
    'hero.badge':          'BTS SIO · SLAM · 2024–2026',
    'hero.sub':            'Desarrollador web & móvil',
    'status':              'En formación',
    'loc.country':         'Francia',
    'skills.label':        'Habilidades',
    'stack.label':         'Stack',
    'about.tab.bio':       'Sobre mí',
    'about.tab.timeline':  'Trayectoria',
    'about.tab.certs':     'Certificaciones',
    'about.text':          'Apasionado del desarrollo web y móvil, en 2º año de BTS SIO SLAM en Toulouse. Curioso, autónomo, siempre programando.',
    'tl.bts':              'BTS SIO opción SLAM',
    'tl.stage':            'Prácticas · Desarrollador Web',
    'tl.bac':              'Bachillerato STI2D SIN',
    'tl.first':            'Primer proyecto personal',
    'cv.text':             'Currículum Vitæ',
    'cv.btn':              'Descargar',
    'stats.label':         'Actividad GitHub',
    'stats.projects':      'Proyectos',
    'stats.repos':         'Repos públicos',
    'stats.years':         'Años de formación',
    'contact.label':       'Contacto',
    'contact.mail':        'Email',
    'proj.hint':           'Clic para detalles',
    'proj.title':          'Proyectos',
    'proj.cat.perso':      'Personal',
    'proj.cat.school':     'Escuela',
    'proj.ap':             'Actividad Profesional',
    'proj.stage.label':    'Prácticas',
    'p1.type':             'Proyecto E4',
    'p1.desc':             'App web de gestión de stock — dashboard, alertas, exportar PDF/CSV.',
    'p2.type':             'Personal',
    'p2.desc':             'Kanban colaborativo en tiempo real.',
    'p3.type':             'Proyecto E5',
    'p3.desc':             'App móvil de quiz sin conexión.',
    'p4.type':             'Proyecto',
    'p4.desc':             'Por completar.',
    'toast.copied':        '¡Email copiado!',
    'modal.close':         'Cerrar',
    'modal.features':      'Funcionalidades',
    'modal.github':        'GitHub',
    'modal.demo':          'Ver demo',
    'skills.frontend':     'HTML & CSS avanzado, JavaScript ES6+, React — interfaces modernas y accesibles.',
    'skills.backend':      'PHP orientado a objetos, Symfony, Node.js — APIs REST y lógica de servidor.',
    'skills.db':           'MySQL, modelado relacional, consultas complejas y optimizadas.',
    'skills.tools':        'Git, GitHub, VS Code, Linux, Agile / Scrum.',
  },

  de: {
    'nav.profil':          'Profil',
    'nav.skills':          'Fähigkeiten',
    'nav.projects':        'Projekte',
    'nav.contact':         'Kontakt',
    'settings.title':      'Einstellungen',
    'settings.lang':       'Sprache',
    'settings.palette':    'Farbpalette',
    'settings.theme':      'Erscheinungsbild',
    'settings.dark':       'Dunkel',
    'settings.light':      'Hell',
    'settings.fontsize':   'Schriftgröße',
    'hero.badge':          'BTS SIO · SLAM · 2024–2026',
    'hero.sub':            'Web- & Mobile-Entwickler',
    'status':              'Im Studium',
    'loc.country':         'Frankreich',
    'skills.label':        'Fähigkeiten',
    'stack.label':         'Tech-Stack',
    'about.tab.bio':       'Über mich',
    'about.tab.timeline':  'Werdegang',
    'about.tab.certs':     'Zertifikate',
    'about.text':          'Leidenschaftlicher Web- und Mobile-Entwickler, im 2. Jahr BTS SIO SLAM in Toulouse. Neugierig, selbstständig, immer am Programmieren.',
    'tl.bts':              'BTS SIO Option SLAM',
    'tl.stage':            'Praktikum · Webentwickler',
    'tl.bac':              'Abitur STI2D SIN',
    'tl.first':            'Erstes persönliches Projekt',
    'cv.text':             'Lebenslauf',
    'cv.btn':              'Herunterladen',
    'stats.label':         'GitHub-Aktivität',
    'stats.projects':      'Projekte',
    'stats.repos':         'Öffentliche Repos',
    'stats.years':         'Ausbildungsjahre',
    'contact.label':       'Kontakt',
    'contact.mail':        'E-Mail',
    'proj.hint':           'Klicken für Details',
    'proj.title':          'Projekte',
    'proj.cat.perso':      'Persönlich',
    'proj.cat.school':     'Schule',
    'proj.ap':             'Berufliche Aktivität',
    'proj.stage.label':    'Praktikum',
    'p1.type':             'E4-Projekt',
    'p1.desc':             'Web-App zur Lagerverwaltung — Dashboard, Benachrichtigungen, Export.',
    'p2.type':             'Persönlich',
    'p2.desc':             'Kollaboratives Echtzeit-Kanban-Board.',
    'p3.type':             'E5-Projekt',
    'p3.desc':             'Offline-Quiz-App für Mobilgeräte.',
    'p4.type':             'Projekt',
    'p4.desc':             'Auszufüllen.',
    'toast.copied':        'E-Mail kopiert!',
    'modal.close':         'Schließen',
    'modal.features':      'Funktionen',
    'modal.github':        'GitHub',
    'modal.demo':          'Demo ansehen',
    'skills.frontend':     'Fortgeschrittenes HTML & CSS, JavaScript ES6+, React — moderne, zugängliche Oberflächen.',
    'skills.backend':      'Objektorientiertes PHP, Symfony, Node.js — REST-APIs und Server-Logik.',
    'skills.db':           'MySQL, relationale Modellierung, komplexe und optimierte Abfragen.',
    'skills.tools':        'Git, GitHub, VS Code, Linux, Agile / Scrum.',
  },

  it: {
    'nav.profil':          'Profilo',
    'nav.skills':          'Competenze',
    'nav.projects':        'Progetti',
    'nav.contact':         'Contatto',
    'settings.title':      'Impostazioni',
    'settings.lang':       'Lingua',
    'settings.palette':    'Palette colori',
    'settings.theme':      'Aspetto',
    'settings.dark':       'Scuro',
    'settings.light':      'Chiaro',
    'settings.fontsize':   'Dimensione testo',
    'hero.badge':          'BTS SIO · SLAM · 2024–2026',
    'hero.sub':            'Sviluppatore web & mobile',
    'status':              'In formazione',
    'loc.country':         'Francia',
    'skills.label':        'Competenze',
    'stack.label':         'Stack',
    'about.tab.bio':       'Su di me',
    'about.tab.timeline':  'Percorso',
    'about.tab.certs':     'Certificazioni',
    'about.text':          'Appassionato di sviluppo web e mobile, al 2° anno di BTS SIO SLAM a Tolosa. Curioso, autonomo, sempre a programmare.',
    'tl.bts':              'BTS SIO opzione SLAM',
    'tl.stage':            'Stage · Sviluppatore Web',
    'tl.bac':              'Maturità STI2D SIN',
    'tl.first':            'Primo progetto personale',
    'cv.text':             'Curriculum Vitæ',
    'cv.btn':              'Scarica',
    'stats.label':         'Attività GitHub',
    'stats.projects':      'Progetti',
    'stats.repos':         'Repo pubblici',
    'stats.years':         'Anni di formazione',
    'contact.label':       'Contatto',
    'contact.mail':        'Email',
    'proj.hint':           'Clicca per dettagli',
    'proj.title':          'Progetti',
    'proj.cat.perso':      'Personale',
    'proj.cat.school':     'Scuola',
    'proj.ap':             'Attività Professionale',
    'proj.stage.label':    'Stage',
    'p1.type':             'Progetto E4',
    'p1.desc':             'App web per gestione magazzino — dashboard, avvisi, export PDF/CSV.',
    'p2.type':             'Personale',
    'p2.desc':             'Kanban collaborativo in tempo reale.',
    'p3.type':             'Progetto E5',
    'p3.desc':             'App mobile quiz offline.',
    'p4.type':             'Progetto',
    'p4.desc':             'Da completare.',
    'toast.copied':        'Email copiata!',
    'modal.close':         'Chiudi',
    'modal.features':      'Funzionalità',
    'modal.github':        'GitHub',
    'modal.demo':          'Vedi demo',
    'skills.frontend':     'HTML & CSS avanzato, JavaScript ES6+, React — interfacce moderne e accessibili.',
    'skills.backend':      'PHP orientato agli oggetti, Symfony, Node.js — API REST e logica server.',
    'skills.db':           'MySQL, modellazione relazionale, query complesse e ottimizzate.',
    'skills.tools':        'Git, GitHub, VS Code, Linux, Agile / Scrum.',
  },
};

let currentLang    = localStorage.getItem('lang')    || 'fr';
let currentPalette = localStorage.getItem('palette') || 'cyber';
let currentTheme   = localStorage.getItem('theme')   || 'dark';

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

/* ─── APPLY PALETTE ─────────────────────────── */
function applyPalette(palette) {
  document.documentElement.dataset.palette = palette;
  document.querySelectorAll('.palette-opt').forEach(b =>
    b.classList.toggle('active', b.dataset.palette === palette));
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

/* ─── PALETTE OPTIONS ───────────────────────── */
document.querySelectorAll('.palette-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    currentPalette = btn.dataset.palette;
    localStorage.setItem('palette', currentPalette);
    applyPalette(currentPalette);
  });
});

/* ─── THEME OPTIONS ─────────────────────────── */
document.getElementById('theme-dark') .addEventListener('click', () => { currentTheme = 'dark';  localStorage.setItem('theme', 'dark');  applyTheme('dark');  });
document.getElementById('theme-light').addEventListener('click', () => { currentTheme = 'light'; localStorage.setItem('theme', 'light'); applyTheme('light'); });

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

/* ─── MODAL PROJET ──────────────────────────── */
const modal      = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalBody  = document.getElementById('modal-body');

function openModal(projectId) {
  const p    = PROJECTS[projectId];
  const data = p[currentLang] || p.fr;
  const tags = p.tags.map(tag => `<span>${tag}</span>`).join('');
  const feats = data.features.map(f => `<li>${f}</li>`).join('');

  modalBody.innerHTML = `
    <div class="modal-type">${data.type}</div>
    <div class="modal-title">${data.title}</div>
    <div class="modal-desc">${data.desc}</div>
    <div class="modal-features">
      <div class="modal-features-title">${t('modal.features')}</div>
      <ul>${feats}</ul>
    </div>
    <div class="modal-tags">${tags}</div>
    <div class="modal-links">
      <a href="${p.github}" class="modal-link modal-link--gh">${t('modal.github')}</a>
      <a href="${p.demo}"   class="modal-link modal-link--demo">${t('modal.demo')}</a>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Accordion projets
document.querySelectorAll('.proj-row').forEach(row => {
  row.addEventListener('click', () => {
    const isOpen = row.classList.contains('open');
    // Fermer tous les autres dans la même catégorie
    row.closest('.proj-cat')?.querySelectorAll('.proj-row').forEach(r => r.classList.remove('open'));
    if (!isOpen) row.classList.add('open');
  });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ─── NAV LINKS → HIGHLIGHT CARD ────────────── */
document.querySelectorAll('.nav-link').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;

    // Activer le lien
    document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    setTimeout(() => btn.classList.remove('active'), 1200);

    // Trouver la carte ciblée et lancer le highlight
    const card = document.querySelector(`.card--${target}`);
    if (!card) return;
    card.classList.remove('card--highlight');
    void card.offsetWidth; // reflow pour relancer l'animation
    card.classList.add('card--highlight');
    card.addEventListener('animationend', () => card.classList.remove('card--highlight'), { once: true });
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

  try {
    const res  = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!res.ok) return;
    const data = await res.json();

    const repoEl = document.querySelector('[data-stat="repos"]');
    if (repoEl) {
      repoEl.dataset.val = data.public_repos;
    }

    // Re-lancer les compteurs avec les vraies valeurs
    document.querySelectorAll('.stat-n').forEach(el => {
      animateCount(el, parseInt(el.dataset.val) || 0, 800);
    });
  } catch {
    // Fallback silencieux — valeurs hardcodées restent
  }
}

/* ─── STATS INTERSECTION OBSERVER ───────────── */
const statsObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('.stat-n').forEach(el => {
      animateCount(el, parseInt(el.dataset.val) || 0, 900);
    });
    statsObs.unobserve(e.target);
  });
}, { threshold: 0.4 });

document.querySelectorAll('.card--stats').forEach(c => statsObs.observe(c));

/* ─── INIT : appliquer les préférences sauvegardées ─ */
applyLang();
applyPalette(currentPalette);
applyTheme(currentTheme);
applyFontSize(currentFontSize);

window.addEventListener('load', () => {
  loadGithubStats();
});

/* ─── GRILLE DE COMMITS (heatmap style) ──────── */
const commitGrid = document.getElementById('commit-grid');
if (commitGrid) {
  const levels = ['', 'lv1', 'lv1', 'lv2', 'lv2', 'lv3', 'lv4'];
  const WEEKS  = 24; /* 7 rows × 24 cols — le CSS coupe avec overflow:hidden */
  const frag   = document.createDocumentFragment();
  /* Génération colonne par colonne (7 jours × N semaines) */
  for (let w = 0; w < WEEKS; w++) {
    for (let d = 0; d < 7; d++) {
      const cell     = document.createElement('div');
      const empty    = Math.random() > 0.6;
      cell.className = 'commit-cell' + (empty ? '' : ' ' + levels[Math.floor(Math.random() * levels.length)]);
      frag.appendChild(cell);
    }
  }
  commitGrid.appendChild(frag);
}

/* ─── SNAKE AUTO-PLAY ─────────────────────── */
(function () {
  const canvas = document.getElementById('snake-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const COLS = 15;
  const ROWS = 15;
  let CELL = 10;

  function resize() {
    const wrap = canvas.parentElement;
    const size = Math.max(60, (wrap.clientWidth || 180) - 16);
    CELL = Math.max(3, Math.floor(size / 15));
    const dim = COLS * CELL;
    canvas.width        = dim;
    canvas.height       = dim;
    canvas.style.width  = dim + 'px';
    canvas.style.height = dim + 'px';
  }

  let snake, dir, food, score, foodT = 0;

  function init() {
    resize();
    const sx = Math.floor(COLS / 2);
    const sy = Math.floor(ROWS / 2);
    snake = [{ x: sx, y: sy }, { x: sx - 1, y: sy }, { x: sx - 2, y: sy }];
    dir   = { x: 1, y: 0 };
    score = 0;
    const el = document.getElementById('snake-score');
    if (el) el.textContent = 0;
    placeFood();
  }

  function placeFood() {
    let pos;
    let tries = 0;
    do {
      pos = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
      tries++;
    } while (snake.some(s => s.x === pos.x && s.y === pos.y) && tries < 200);
    food = pos;
  }

  function isSafe(nx, ny) {
    if (nx < 0 || nx >= COLS || ny < 0 || ny >= ROWS) return false;
    return !snake.some(s => s.x === nx && s.y === ny);
  }

  function aiDir() {
    const head = snake[0];
    const dx = food.x - head.x;
    const dy = food.y - head.y;

    const candidates = [];
    if (Math.abs(dx) >= Math.abs(dy)) {
      candidates.push({ x: Math.sign(dx) || 1, y: 0 });
      candidates.push({ x: 0, y: Math.sign(dy) || 1 });
      candidates.push({ x: 0, y: -(Math.sign(dy) || 1) });
      candidates.push({ x: -(Math.sign(dx) || 1), y: 0 });
    } else {
      candidates.push({ x: 0, y: Math.sign(dy) || 1 });
      candidates.push({ x: Math.sign(dx) || 1, y: 0 });
      candidates.push({ x: -(Math.sign(dx) || 1), y: 0 });
      candidates.push({ x: 0, y: -(Math.sign(dy) || 1) });
    }

    for (const d of candidates) {
      if (d.x === -dir.x && d.y === -dir.y) continue;
      if (isSafe(head.x + d.x, head.y + d.y)) return d;
    }
    // fallback: first safe direction
    for (const d of [{ x:1,y:0 },{ x:0,y:1 },{ x:-1,y:0 },{ x:0,y:-1 }]) {
      if (d.x === -dir.x && d.y === -dir.y) continue;
      if (isSafe(head.x + d.x, head.y + d.y)) return d;
    }
    return dir;
  }

  function step() {
    dir = aiDir();
    const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

    if (!isSafe(head.x, head.y)) {
      init();
      return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      score++;
      const el = document.getElementById('snake-score');
      if (el) el.textContent = score;
      placeFood();
    } else {
      snake.pop();
    }
  }

  function draw() {
    foodT++;
    const green = getComputedStyle(document.documentElement)
      .getPropertyValue('--green').trim() || '#00e87a';
    const pulse = 0.5 + 0.5 * Math.sin(foodT * 0.13);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // grille subtile
    ctx.strokeStyle = 'rgba(0,245,255,0.06)';
    ctx.lineWidth   = 0.5;
    for (let i = 1; i < COLS; i++) {
      ctx.beginPath(); ctx.moveTo(i * CELL, 0); ctx.lineTo(i * CELL, canvas.height); ctx.stroke();
    }
    for (let j = 1; j < ROWS; j++) {
      ctx.beginPath(); ctx.moveTo(0, j * CELL); ctx.lineTo(canvas.width, j * CELL); ctx.stroke();
    }

    // nourriture — diamant tournant, glow pulsé
    const fx = food.x * CELL + CELL / 2;
    const fy = food.y * CELL + CELL / 2;
    ctx.save();
    ctx.translate(fx, fy);
    ctx.rotate(foodT * 0.05);
    ctx.shadowColor = '#ff2d78';
    ctx.shadowBlur  = 5 + pulse * 10;
    ctx.fillStyle   = `hsl(${340 + pulse * 20}, 100%, ${55 + pulse * 8}%)`;
    const s = CELL * 0.32 + pulse * CELL * 0.06;
    ctx.beginPath();
    ctx.moveTo(0, -s); ctx.lineTo(s, 0); ctx.lineTo(0, s); ctx.lineTo(-s, 0);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    ctx.shadowBlur = 0;

    if (snake.length === 0) return;

    // corps : un seul tracé continu, épais, bouts arrondis
    ctx.lineCap    = 'round';
    ctx.lineJoin   = 'round';
    ctx.lineWidth  = CELL * 0.70;
    ctx.strokeStyle = green;
    ctx.shadowColor = green;
    ctx.shadowBlur  = 5;
    ctx.beginPath();
    snake.forEach((seg, i) => {
      const cx = seg.x * CELL + CELL / 2;
      const cy = seg.y * CELL + CELL / 2;
      if (i === 0) ctx.moveTo(cx, cy); else ctx.lineTo(cx, cy);
    });
    ctx.stroke();
    ctx.shadowBlur = 0;

    // tête : cercle plus clair par-dessus
    const hx = snake[0].x * CELL + CELL / 2;
    const hy = snake[0].y * CELL + CELL / 2;
    ctx.shadowColor = green;
    ctx.shadowBlur  = 10;
    ctx.fillStyle   = '#fff';
    ctx.beginPath();
    ctx.arc(hx, hy, CELL * 0.38, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = green;
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.arc(hx, hy, CELL * 0.28, 0, Math.PI * 2);
    ctx.fill();

    // yeux : 2 points noirs perpendiculaires à la direction
    ctx.fillStyle = '#000';
    const er  = Math.max(1, CELL * 0.085);
    const eOff = CELL * 0.18;
    const px = dir.y, py = -dir.x;
    ctx.beginPath();
    ctx.arc(hx + dir.x * eOff + px * eOff, hy + dir.y * eOff + py * eOff, er, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(hx + dir.x * eOff - px * eOff, hy + dir.y * eOff - py * eOff, er, 0, Math.PI * 2);
    ctx.fill();
  }

  init();
  setInterval(() => { step(); draw(); }, 200);
})();

/* ─── TILT CARDS — supprimé (trop lourd avec rotateX/rotateY) ─── */
/* Le lift hover est géré en CSS pur via .card:hover { transform: translateY(-2px) } */
