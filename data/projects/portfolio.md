---
order: 2
pageTitle: 'Portfolio - Portfolio'
title: 'Portfolio<br/>(Web)'
subTitle: 'TypeScript, React, Next, Bootstrap'
cover: '/images/portfolio/categories/web-app.png'
coverAlt: 'image web application'
abstract: 'Mon portfolio (Vous le connaissez, vous êtes dessus)'
screenshots:
    [{ src: '/images/portfolio/projects/portfolio/accueil_portfolio.png', caption: "Portfolio - Écran d'accueil" }]
demo: 'http://dicosaedrique.fr'
source: 'https://github.com/Dicosaedrique/portfolio-next'
technologies:
    [
        { name: 'Typescript', bold: true },
        { name: 'React', bold: true },
        { name: 'Next', bold: true },
        { name: 'Bootstrap', bold: true },
        { name: 'Eslint, Prettier', bold: false }
    ]
tags: ['TypeScript', 'React', 'Next', 'Web App', 'Projet solo']
---

## Description du projet

Dans sa première version, ce portfolio avait été entièrement développé _à la main_ en HTML pur et avec quelques scripts JS à côté. Cela limita rapidement le développement et l'évolutivité du projet puisque chaque modification entraînait des changements à plein d'endroits disjoints dans le code et rendait la maintenabilité quasi impossible (même si le projet est paradoxalement petit). Pour résoudre cela, il me fallait un moteur de template HTML efficace qui me permettrait de développer des composants réutilisables afin de résoudre ces problèmes. J'ai d'abord essayé de me tourner vers des technologies comme EJS mais ai finalement réalisé qu'il serait dommage de ne pas mettre à profit mes compétences en React pour ce projet. Cependant, puisque l'application reste majoritairement statique, j'ai décidé de m'essayer au framework react **Next** et à sa génération statique de page.

Ainsi, une grande partie de l'application est générée lors du build ainsi que les pages de projets qui sont décrites via des fichiers en markdown (<a href="https://github.com/Dicosaedrique/portfolio-next/tree/main/data/projects" class="text-primary">sources</a>) contenant dans leurs en-têtes des données au format JSON permettant de générer des pages plus complètes (voir la partie "Exemple du fichier de projet").

Le thème du portfolio est tiré du thème Freelancer par Start Bootstrap et le reste de l'application est stylisé essentiellement avec Bootstrap.

#### Déploiement continu

Chaque push sur la branche main du projet déclenche un build de la nouvelle version du projet sur mon application Netlify, une fois le projet build, je peux regarder le résultat et décider de le déployer ou non.
<br/><br/>

#### Exemple du fichier de projet

```
---
pageTitle: 'Portfolio - Portfolio'
title: 'Portfolio<br/>(Web)'
subTitle: 'TypeScript, React, Next, Bootstrap'
cover: '/images/portfolio/categories/web-app.png'
coverAlt: 'image web application'
abstract: 'Mon portfolio (Vous le connaissez, vous êtes dessus)'
screenshots:
    [{ src: '/images/portfolio/projects/portfolio/accueil_portfolio.png', caption: "Portfolio - Écran d'accueil" }]
demo: 'http://dicosaedrique.fr'
source: 'https://github.com/Dicosaedrique/portfolio-next'
technologies:
    [
        { name: 'Typescript', bold: true },
        { name: 'React', bold: true },
        { name: 'Next', bold: true },
        { name: 'Bootstrap', bold: true },
        { name: 'Eslint, Prettier', bold: false }
    ]
tags: ['TypeScript', 'React', 'Next', 'Web App', 'Projet solo']
---

## Description du projet

Dans sa première version, ce portfolio avait été entièrement développé _à la main_ en HTML pur et avec quelques scripts JS à côté. Cela limita rapidement le développement et l'évolutivité du projet puisque chaque modification entraînait des changement à plein d'endroits disjoints dans le code et rendait la maintenanbilité quasi impossible (même si le projet est paradoxalement petit). Pour résoudre cela, il me fallait un moteur de template HTML efficace qui me permettrait de développer des composants réutilisables afin de résoudre ces problèmes. J'ai d'abord essayé de me tourner vers des technologies comme EJS mais ai finalement réalisé qu'il serait dommage de ne pas mettre à profit mes compétences en React pour ce projet. Cependant, puisque l'application reste majoritairement statique, j'ai décidé de m'essayer au framework react **Next** et à sa génération statique de code React.

Ainsi, une grande partie de l'application est généré lors du build et les pages de projets sont décrites via des fichier en markdown <a href="https://github.com/Dicosaedrique/portfolio-next/tree/main/data/projects" class="text-primary">source</a> contenant dans leur en-têtes des données au format JSON permettant de générer des pages plus complètes (title, description, tags, etc).

Le thème du portfolio est tiré du thème Freelancer par Start Bootstrap et le reste de l'application est stylisé essentiellement avec Bootstrap.

#### Déploiement continu

Chaque push sur la branche main du projet déclenche un build de la nouvelle version du projet sur mon application Netlify, une fois le projet build, je peux regardé le résultat et décider de le déployer ou non.
<br/><br/>
```
