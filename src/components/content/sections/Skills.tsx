import React from 'react';
import BubblesContainer from '../../Bubbles';
import NestedSection, { SubSectionProps } from '../../sections/NestedSection';
import { AutoSectionProps } from '../../sections/SectionsPage';

// section des compétences soit une section nestée contenant différentes catégories de compétences définit plus bas
export default function Skills(props: AutoSectionProps) {
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

// repertoire racine des images de compétences
const skillImagesFolder = '/images/skills/';

// CONTIENT TOUTES LES COMPÉTENCES QUI SERONT CHARGÉES DANS LA SECTION

const webSkills = {
    id: 'skill_web',
    title: 'Développement web',
    icon: 'fas fa-globe',
    light: true,
    children: (
        <BubblesContainer
            imagePrefix={skillImagesFolder + 'web/'}
            bubbles={[
                { title: 'React JS', image: 'react.png', alt: 'logo reactjs' },
                { title: 'Node JS', image: 'node.png', alt: 'logo nodejs' },
                { title: 'NPM / Yarn', image: 'npmyarn.png', alt: 'logo npm et logo yarn' },
                { title: 'Bootstrap', image: 'bootstrap.png', alt: 'logo bootstrap' }
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
            imagePrefix={skillImagesFolder + 'mobile/'}
            bubbles={[
                { title: 'React Native', image: 'reactnative.png', alt: 'logo react native' },
                { title: 'Android (Java)', image: 'android.png', alt: 'logo android developers' }
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
            imagePrefix={skillImagesFolder + 'software/'}
            bubbles={[{ title: 'Electron JS', image: 'electron.png', alt: 'logo electron js' }]}
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
            imagePrefix={skillImagesFolder + 'languages/'}
            bubbles={[
                { title: 'TypeScript', image: 'typescript.png', alt: 'logo typescript' },
                { title: 'JavaScript', image: 'javascript.png', alt: 'logo javascript' },
                { title: 'JSX', image: 'jsx.png', alt: 'logo jsx' },
                { title: 'HTML', image: 'html.png', alt: 'logo html 5' },
                { title: 'CSS', image: 'css.png', alt: 'logo css 3' }
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
            imagePrefix={skillImagesFolder + 'oop/'}
            bubbles={[
                {
                    title: 'Programmation Orienté Objet',
                    text:
                        "Je maîtrise les concepts de base et avancés de la <strong>POO</strong> comme l`'introspection, la réflexion et la métaprogrammation",
                    image: 'oop.png',
                    alt: 'logo OOP'
                },
                {
                    title: 'Conception / Modélisation Objet',
                    text:
                        'Je maîtrise la conception et la modélisation orientée objet (UML, abstraction), je maîtrise particulièrement les <strong>diagrammes de classes</strong> pour concevoir de bonnes solutions objet',
                    image: 'uml.png',
                    alt: 'logo UML'
                },
                {
                    title: 'Patrons de conception',
                    text:
                        'Je maîtrise plusieurs patrons de conception et continue à les apprendre pour améliorer la qualité de mes solutions',
                    image: 'design.png',
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
            imagePrefix={skillImagesFolder + 'engineering/'}
            bubbles={[
                {
                    title: 'Clean Code',
                    text:
                        'Je code proprement en respectant les <strong>nomenclatures</strong>, une bonne <strong>modélisation</strong>, en utilisant des outils de mise en forme (<strong>Prettier</strong>) et en commentant mon code',
                    image: 'clean_code.png',
                    alt: 'image clean code'
                },
                {
                    title: 'Refactoring',
                    text:
                        'Je comprends <strong>rapidement</strong> le code des autres, je sais améliorer un code existant en identifiant les mauvaises pratiques, les <strong>codes smells</strong> et les <strong>anti-patterns</strong>',
                    image: 'refactoring.png',
                    alt: 'logo refactor (recycler)'
                },
                {
                    title:
                        'DevOps (<abbr title="Continuous Integration">CI</abbr> / <abbr title="Continuous Deployment">CD</abbr>)',
                    text:
                        'Je comprends les bases du <strong>CI/CD</strong> et je sais utiliser des outils tels que les <strong>Github Actions</strong>',
                    image: 'github_actions.png',
                    alt: 'logo github actions'
                },
                {
                    title: 'Testing',
                    text:
                        "Je connais les bases pour rédiger des tests unitaires et des tests d'intégration (<strong>Mocha, Chai</strong>)",
                    image: 'testing.png',
                    alt: 'image testing'
                },
                {
                    title: 'Gestion du code',
                    text: 'Je sais organiser mon code et utiliser des bundlers (<strong>Webpack</strong>)',
                    image: 'webpack.png',
                    alt: 'logo webpack'
                },
                {
                    title: 'Gestion de projet Agile',
                    text: 'Je maîtrise la méthode <strong>Agile SCRUM</strong>',
                    image: 'scrum.png',
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
            imagePrefix={skillImagesFolder + 'others/'}
            bubbles={[
                {
                    title: 'Intelligence Artificielle',
                    text:
                        "Je comprends les concepts d'agent intelligent, d'algorithmes génétiques, d'exploration informée et non informée, d'heuristique et de problème à satisfaction de contraintes (CSP)",
                    image: 'ia.png',
                    alt: 'image cerveau mi-humain / mi-machine'
                },
                {
                    title: 'Graphisme par ordinateur',
                    text:
                        "Je maîtrise l'infographie sur navigateur grâce à des technologies comme <strong>WebGL</strong> ou <strong>P5.js</strong>",
                    image: 'webgl.png',
                    alt: 'logo webgl'
                },
                {
                    title: 'Divers',
                    text:
                        'Les réseaux (modèle OSI)<br />Internet (HTTP, DNS, CDN, etc.)<br />Les bases de la sécurité informatique<br />Les bases de données<br />Le hardware<br />La programmation orientée aspect<br />',
                    image: 'divers.png',
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
