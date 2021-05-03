import { GetStaticProps } from 'next';

import Masthead from '../components/content/Masthead';
import About from '../components/content/sections/About';
import CV from '../components/content/sections/CV';
import Portfolio from '../components/content/sections/Portfolio';
import Skills from '../components/content/sections/Skills';
import Layout, { PageInfos } from '../components/layout';
import SectionsPages, { AutoSectionProps } from '../components/sections/SectionsPage';
import { ProjectPreview } from '../lib/project';
import { getAllProjectPreviews } from '../lib/project.next';
import { bodyId } from './_document';

interface HomePage extends PageInfos {
    projectPreviews: ProjectPreview[];
}

// page d'accueil du portfolio
export default function HomePage({ pageHead, footer, copyright, navbarInfos, projectPreviews }: HomePage): JSX.Element {
    return (
        <Layout pageHead={pageHead} navbarInfos={navbarInfos} copyright={copyright} footer={footer}>
            {/* Masthead */}
            <Masthead />

            <Portfolio text="secondary" projectPreviews={projectPreviews} />

            {/* Toutes les sections */}
            <SectionsPages sections={SECTIONS} />
        </Layout>
    );
}

// listes des sections à mettre dans la page d'accueil
const SECTIONS: React.FunctionComponent<AutoSectionProps>[] = [Skills, CV, About];

// propriétés statique de la page d'accueil
export const getStaticProps: GetStaticProps = async () => {
    const projectPreviews = getAllProjectPreviews();

    const obj: { props: HomePage } = {
        props: {
            pageHead: {
                noIndex: false,
                title: 'Antoine Bouabana, Développeur Web Full Stack',
                description:
                    "Bonjour, je m'appelle Antoine Bouabana et ceci est mon portfolio de développeur web full stack",
                author: 'Antoine Bouabana'
            },
            copyright: true,
            footer: true,
            navbarInfos: {
                main: { title: 'Antoine Bouabana', href: `#${bodyId}` },
                // devrait être plus intelligent
                links: [
                    { title: 'Mon portfolio', href: '#portfolio' },
                    { title: 'Mes compétences', href: '#competences' },
                    { title: 'Mon CV', href: '#cv' },
                    { title: 'À propos', href: '#about' }
                ]
            },
            projectPreviews
        }
    };

    return obj;
};
