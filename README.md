# Portfolio — Wassil Henni

Portfolio personnel de **Wassil Henni**, développeur web & mobile en BTS SIO option SLAM
à Valenciennes.

🔗 **Démo en ligne :** https://thynnon.github.io/Portfolio/

## ✨ Fonctionnalités

- Page d'accueil unique présentant le profil, le parcours, les compétences et les projets
- Carrousels de projets par catégorie (Formation, Professionnel, Perso)
- Pages de détail dédiées pour chaque projet (captures, fonctionnalités, schémas BDD, extraits de code)
- Thème clair / sombre, taille de police réglable, animations activables
- Bilingue FR / EN (partiel — voir limitations)
- Responsive (menu hamburger sur mobile)

## 🛠️ Stack technique

- **Front-end :** HTML5, CSS3 (custom properties, flexbox/grid), JavaScript vanilla (ES6+)
- **Icônes :** [Lucide](https://lucide.dev) (CDN, version figée)
- Aucun framework ni build : site 100 % statique

## 📁 Structure

```
.
├── index.html              # Page principale
├── project-*.html          # Pages de détail des projets
├── css/                    # style.css, projects.css, project-detail.css
├── js/                     # main.js, detail.js
├── img/                    # Logos, bannières de projets
├── AP/ · STAGE/            # Captures d'écran des projets
└── favicon.svg
```

## 🚀 Lancer en local

Aucune dépendance. Servir le dossier avec n'importe quel serveur statique :

```bash
# Python
python -m http.server 8000
# ou Node
npx serve
```

Puis ouvrir http://localhost:8000.

## 🚧 Limitations connues

- La traduction EN ne couvre que la navigation et l'intro ; la timeline, les cartes
  projets et les pages de détail restent en français.
- La grille de contributions GitHub est décorative (l'API officielle nécessite un token
  qui ne doit pas être exposé côté client).

## 📫 Contact

- Email : wassil.henni@gmail.com
- GitHub : [@thynnon](https://github.com/thynnon)
- LinkedIn : [Wassil Henni](https://www.linkedin.com/in/wassil-henni-5b942834b/)
