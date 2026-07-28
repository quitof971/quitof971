# BTPleadsPro — logo modernisé

Refonte du logo BTPleadsPro : tracés simplifiés, dégradés cohérents, typographie
Poppins, versions pour fonds clairs et sombres, plus une déclinaison vidéo 3D.

## Fichiers

| Fichier | Usage |
|---|---|
| `logo-mark.svg` / `.png` | Symbole seul (maison + graphique + flèche), fond transparent |
| `logo-lockup-light.svg` / `.png` | Logo complet + tagline, pour fonds clairs |
| `logo-lockup-dark.svg` / `.png` | Logo complet + tagline, pour fonds sombres |
| `logo-icon-badge.svg` / `.png` | Icône carrée (favicon, avatar, app icon), fond inclus |
| `btpleadspro-3d-logo-reveal.mp4` | Animation d'intro 3D (1280×720, ~10s) |
| `video-poster.jpg` | Image de couverture de la vidéo |
| `video-source/scene.html` | Source de l'animation (HTML/CSS 3D autonome, police intégrée) |

Les SVG sont vectoriels et éditables (dégradés définis dans `<defs>`). Pour
régénérer la vidéo, ouvrir `video-source/scene.html` dans un navigateur ou
l'enregistrer avec un outil type Playwright + ffmpeg.
