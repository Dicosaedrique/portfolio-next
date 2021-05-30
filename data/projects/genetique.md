---
order: 3
pageTitle: 'Portfolio - Projet Algorithme génétique'
title: 'Algorithmes génétique (IA / Web)'
subTitle: 'TypeScript, Web Workers, ChartJS, JQuery'
cover: '/images/portfolio/categories/ia.png'
coverAlt: 'image intelligence artificielle'
abstract: "Un exemple pratique d'algorithmes génétique à travers un problème simple de recherche de phrases et une expérience sur l'efficacité des différents paramètres de cet algorithme"
screenshots:
    [
        {
            src: '/images/portfolio/projects/genetique/exemple_execution.png',
            caption: "Exemple d'exécution de l'algorithme"
        }
    ]
demo: '/projects/genetique/index.html'
source: 'https://github.com/Dicosaedrique/projects-portfolio/tree/main/genetic-project'
technologies:
    [
        { name: 'TypeScript', bold: true },
        { name: 'Web Workers', bold: true },
        { name: 'ChartJS', bold: true },
        { name: 'JQuery', bold: true },
        { name: 'Webpack', bold: false },
        { name: 'Prettier', bold: false }
    ]
tags: ['TypeScript', 'Intelligence Artificielle', 'Web Workers', 'ChartJS', 'Projet groupe']
---

## Description du projet

Projet effectué dans le cadre universitaire d'un cours d'intelligence artificielle. Le travail a été fait en binôme avec
Lucas Gonzalez, je me suis occupé de l'interface front-end, de la modélisation objet et de l'élaboration du système de benchmarking.

##### Problématique

La problématique de départ est de résoudre le <a href="https://fr.wikipedia.org/wiki/Paradoxe_du_singe_savant" class="text-primary">paradoxe du singe savant</a> qui prédit qu'un singe tapant à l'infini sur un clavier finira par taper tout textes existants. L'idée est donc de chercher une alternative à ce genre de recherche de phrase brute (frappe aléatoire) pour privilégier l'utilisation d'algorithmes génétique qui se prête bien à ce type de problème où la "force brute" conduit à une explosion de possibilités.

La résolution du problème n'a pas été très dure à mettre en place c'est pour cela que le véritable intérêt de ce projet était de rendre l'algorithme le plus paramétrable possible pour offrir ensuite la possibilité de tester l'efficacité de ces différents paramètres à travers un benchmarking (voir ci-après).

##### Benchmarking

J'ai réalisé un système de benchmarking simplifié permettant de tester des combinaisons de paramètres sur une ou plusieurs cible. L'utilisation d'un Web Worker m'a permis de faire cela en parallèle de l'exécution de l'application pour gagner en vitesse (par rapport aux autres techniques de traitement asynchrones) et sans bloquer l'exécution de l'application.

Le module de benchmark communique l'avancement de son traitement via les messages et finit par renvoyer les données au format JSON à l'application. J'ai ensuite traité semi automatiquement ces données (via des fonctions) pour les afficher dans différents graphiques que l'on peut voir en bas de la démonstration.

##### Vidéo de démonstration du projet

Voici une courte vidéo de présentation du projet final :

<video controls id="video-demo">
    <source src="/files/demo_projet_algo_genetique.mp4" type="video/mp4">
    <p>Votre navigateur ne prend pas en charge les vidéos HTML5.
        Voici <a href="/files/demo_projet_algo_genetique.mp4">un lien pour télécharger la vidéo</a>.</p>
</video>

##### Rapport final

Voici le <a href="/files/rapport_projet_algo_genetique.pdf" target="_blank" class="text-primary">rapport final</a> à télécharger pour connaître le détail du fonctionnement et des résultats du projet.
