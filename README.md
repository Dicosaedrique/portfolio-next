# Mon portfolio

Développé avec ReactJS en utilisant le framework NextJS
Déploiement automatique (CD) avec Netlify vers [dicosaedrique.fr](https://www.dicosaedrique.fr))

[![Netlify Status](https://api.netlify.com/api/v1/badges/d9ecf12e-f008-411e-a06d-344441f3befe/deploy-status)](https://app.netlify.com/sites/portfolio-dicosaedrique/deploys)

## Organisation du projet

```
.
├── data/ (contient les données de l'application)
├── public/ (service de fichier statiques)
│   ├── files/
│   ├── images/
│   ├── js/ (scripts js statiques - jquery, etc)
│   ├── vendors/ (librairies js importées)
│   └── projects/ (contient les démos des projets statiques)
├── src/ (les sources de l'application)
│   ├── components/ (contient les composants react du site)
│   │   ├── content/ (contient les composants concret utilisés sur le site)
│   │   │   └── sections/ (sections principales de la page d'accueil)
│   │   ├── sections/ (contient des composants permettant de faire des sections)
│   │   ├── template/ (template de base : head, header, footer, nav)
│   │   └── layout.tsx (layout des pages du site)
│   ├── pages/ (répertoire contenant les pages du site)
│   │   ├── portfolio/ (la page template d'un projet du portfolio)
│   │   └── index.tsx (page d'accueil du site)
│   ├── lib/ (les scripts utiles à l'application)
│   └── styles/ (tous les styles de l'application)
└── **/ (fichiers de config du projet)
```
