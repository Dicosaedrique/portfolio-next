import React from 'react';

import BubblesContainer from '../../Bubbles';
import NestedSection, { SubSectionProps } from '../../sections/NestedSection';
import { AutoSectionProps } from '../../sections/SectionsPage';

// section des compétences soit une section nestée contenant différentes catégories de compétences définit plus bas
export default function Skills(props: AutoSectionProps): JSX.Element {
    SKILL_SUBSECTION.forEach((subSection) => (subSection.light = props.light));

    return (
        <NestedSection
            id="competences"
            title="Mes compétences"
            icon="fas fa-toolbox"
            subSections={SKILL_SUBSECTION}
            {...props}
        />
    );
}

// CONTIENT TOUTES LES COMPÉTENCES QUI SERONT CHARGÉES DANS LA SECTION

const webSkills = {
    id: 'skill_web',
    title: 'Développement web',
    icon: 'fas fa-globe',
    light: true,
    children: (
        <BubblesContainer
            bubbles={[
                { title: 'React JS', image: '/images/skills/web/react.png', alt: 'logo reactjs' },
                { title: 'Node JS', image: '/images/skills/web/node.png', alt: 'logo nodejs' },
                { title: 'NPM / Yarn', image: '/images/skills/web/npmyarn.png', alt: 'logo npm et logo yarn' },
                { title: 'Bootstrap', image: '/images/skills/web/bootstrap.png', alt: 'logo bootstrap' }
            ]}
            small
        />
    )
};

const mobileSkills = {
    id: 'skill_mobile',
    title: 'Développement mobile',
    icon: 'fas fa-mobile-alt',
    light: true,
    children: (
        <BubblesContainer
            bubbles={[
                { title: 'React Native', image: '/images/skills/mobile/reactnative.png', alt: 'logo react native' },
                { title: 'Android (Java)', image: '/images/skills/mobile/android.png', alt: 'logo android developers' }
            ]}
            small
        />
    )
};

const softwareSkills = {
    id: 'skill_software',
    title: 'Développement logiciel',
    icon: 'fab fa-buffer',
    light: true,
    children: (
        <BubblesContainer
            bubbles={[{ title: 'Electron JS', image: '/images/skills/software/electron.png', alt: 'logo electron js' }]}
            small
        />
    )
};

const languagesSkills = {
    id: 'skill_languages',
    title: 'Langages favoris',
    icon: 'fas fa-code',
    light: true,
    children: (
        <BubblesContainer
            bubbles={[
                { title: 'TypeScript', image: '/images/skills/languages/typescript.png', alt: 'logo typescript' },
                { title: 'JavaScript', image: '/images/skills/languages/javascript.png', alt: 'logo javascript' },
                { title: 'JSX', image: '/images/skills/languages/jsx.png', alt: 'logo jsx' },
                { title: 'HTML', image: '/images/skills/languages/html.png', alt: 'logo html 5' },
                { title: 'CSS', image: '/images/skills/languages/css.png', alt: 'logo css 3' }
            ]}
            small
        />
    )
};

// { title: '', text: '', image: '', alt: '' }
const oopSkills = {
    id: 'skill_oop',
    title: 'Paradigme Objet',
    icon: 'fas fa-cube',
    light: true,
    children: (
        <BubblesContainer
            bubbles={[
                {
                    title: 'Programmation Orienté Objet',
                    text:
                        "Je maîtrise les concepts de base et avancés de la <strong>POO</strong> comme l`'introspection, la réflexion et la métaprogrammation",
                    image: '/images/skills/oop/oop.png',
                    alt: 'logo OOP'
                },
                {
                    title: 'Conception / Modélisation Objet',
                    text:
                        'Je maîtrise la conception et la modélisation orientée objet (UML, abstraction), je maîtrise particulièrement les <strong>diagrammes de classes</strong> pour concevoir de bonnes solutions objet',
                    image: '/images/skills/oop/uml.png',
                    alt: 'logo UML'
                },
                {
                    title: 'Patrons de conception',
                    text:
                        'Je maîtrise plusieurs patrons de conception et continue à les apprendre pour améliorer la qualité de mes solutions',
                    image: '/images/skills/oop/design.png',
                    alt: 'logo design patterns'
                }
            ]}
        />
    )
};

const softwareEngineeringSkills = {
    id: 'skill_softwate_engineering',
    title: 'Génie logiciel',
    icon: 'fas fa-brain',
    light: true,
    children: (
        <BubblesContainer
            bubbles={[
                {
                    title: 'Clean Code',
                    text:
                        'Je code proprement en respectant les <strong>nomenclatures</strong>, une bonne <strong>modélisation</strong>, en utilisant des outils de mise en forme (<strong>Prettier</strong>) et en commentant mon code',
                    image: '/images/skills/engineering/clean_code.png',
                    alt: 'image clean code'
                },
                {
                    title: 'Refactoring',
                    text:
                        'Je comprends <strong>rapidement</strong> le code des autres, je sais améliorer un code existant en identifiant les mauvaises pratiques, les <strong>codes smells</strong> et les <strong>anti-patterns</strong>',
                    image: '/images/skills/engineering/refactoring.png',
                    alt: 'logo refactor (recycler)'
                },
                {
                    title:
                        'DevOps (<abbr title="Continuous Integration">CI</abbr> / <abbr title="Continuous Deployment">CD</abbr>)',
                    text:
                        'Je comprends les bases du <strong>CI/CD</strong> et je sais utiliser des outils tels que les <strong>Github Actions</strong>',
                    image: '/images/skills/engineering/github_actions.png',
                    alt: 'logo github actions'
                },
                {
                    title: 'Testing',
                    text:
                        "Je connais les bases pour rédiger des tests unitaires et des tests d'intégration (<strong>Mocha, Chai</strong>)",
                    image: '/images/skills/engineering/testing.png',
                    alt: 'image testing'
                },
                {
                    title: 'Gestion du code',
                    text: 'Je sais organiser mon code et utiliser des bundlers (<strong>Webpack</strong>)',
                    image: '/images/skills/engineering/webpack.png',
                    alt: 'logo webpack'
                },
                {
                    title: 'Gestion de projet Agile',
                    text: 'Je maîtrise la méthode <strong>Agile SCRUM</strong>',
                    image: '/images/skills/engineering/scrum.png',
                    alt: 'image scrum'
                }
            ]}
        />
    )
};

const othersSkills = {
    id: 'skill_others',
    title: 'Autres notions',
    icon: 'fas fa-cubes',
    light: true,
    children: (
        <BubblesContainer
            bubbles={[
                {
                    title: 'Intelligence Artificielle',
                    text:
                        "Je comprends les concepts d'agent intelligent, d'algorithmes génétiques, d'exploration informée et non informée, d'heuristique et de problème à satisfaction de contraintes (CSP)",
                    image: '/images/skills/others/ia.png',
                    alt: 'image cerveau mi-humain / mi-machine'
                },
                {
                    title: 'Graphisme par ordinateur',
                    text:
                        "Je maîtrise l'infographie sur navigateur grâce à des technologies comme <strong>WebGL</strong> ou <strong>P5.js</strong>",
                    image: '/images/skills/others/webgl.png',
                    alt: 'logo webgl'
                },
                {
                    title: 'Divers',
                    text:
                        'Les réseaux (modèle OSI)<br />Internet (HTTP, DNS, CDN, etc.)<br />Les bases de la sécurité informatique<br />Les bases de données<br />Le hardware<br />La programmation orientée aspect<br />',
                    image: '/images/skills/others/divers.png',
                    alt: 'image informatique divers'
                }
            ]}
        />
    )
};

const SKILL_SUBSECTION: SubSectionProps[] = [
    webSkills,
    mobileSkills,
    softwareSkills,
    languagesSkills,
    oopSkills,
    softwareEngineeringSkills,
    othersSkills
];
