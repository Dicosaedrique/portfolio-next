import Layout, { PageInfos } from '../components/layout';
import { GetStaticProps } from 'next';
import { DEFAULT_SCRIPTS } from '../components/template/scripts';
import { bodyId } from './_document';
import About from '../components/content/sections/About';
import Masthead from '../components/content/Masthead';
import CV from '../components/content/sections/CV';
import Skills from '../components/content/sections/Skills';
import SectionsPages, { AutoSectionProps } from '../components/sections/SectionsPage';
import Portfolio from '../components/content/sections/Portfolio';
import { getAllProjectPreviews } from '../lib/project.next';
import { ProjectPreview } from '../lib/project';

interface HomePage extends PageInfos {
    projectPreviews: ProjectPreview[];
}

// page d'accueil du portfolio
export default function HomePage({ pageHead, footer, copyright, scripts, navbarInfos, projectPreviews }: HomePage) {
    return (
        <Layout pageHead={pageHead} navbarInfos={navbarInfos} copyright={copyright} footer={footer} scripts={scripts}>
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
            scripts: DEFAULT_SCRIPTS,
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
