import Layout, { PageInfos } from '../components/layout';
import { GetStaticProps } from 'next';
import { DEFAULT_SCRIPTS } from '../components/template/scripts';
import { defaultContactInfos } from '../components/content/Contact';
import About from '../components/content/sections/About';
import Masthead from '../components/content/Masthead';
import CV from '../components/content/sections/CV';
import Skills from '../components/content/sections/Skills';
import SectionsPages, { AutoSectionProps } from '../components/sections/SectionsPage';
import Portfolio from '../components/content/sections/Portfolio';

// page d'accueil du portfolio
export default function Home({ pageHead, footerInfos, showCopyright, scripts, navbarInfos }: PageInfos) {
    return (
        <Layout
            pageHead={pageHead}
            navbarInfos={navbarInfos}
            showCopyright={showCopyright}
            footerInfos={footerInfos}
            scripts={scripts}>
            {/* Masthead */}
            <Masthead />

            {/* Toutes les sections */}
            <SectionsPages sections={SECTIONS} beginLight />
        </Layout>
    );
}

// listes des sections à mettre dans la page d'accueil
const SECTIONS: React.FunctionComponent<AutoSectionProps>[] = [/*Portfolio*/ Skills, CV, About];

// propriétés statique de la page d'accueil
export const getStaticProps: GetStaticProps = async () => {
    const obj: { props: PageInfos } = {
        props: {
            pageHead: {
                noIndex: false,
                title: 'Antoine Bouabana, Développeur Web Full Stack',
                description:
                    "Bonjour, je m'appelle Antoine Bouabana et ceci est mon portfolio de développeur web full stack",
                author: 'Antoine Bouabana'
            },
            showCopyright: true,
            footerInfos: { title: 'Où me trouver ?', ...defaultContactInfos },
            scripts: DEFAULT_SCRIPTS,
            navbarInfos: {
                main: { title: 'Antoine Bouabana', href: '#page-top' },
                links: [
                    { title: 'Mon portfolio', href: '#portfolio' },
                    { title: 'Mes compétences', href: '#competences' },
                    { title: 'Mon CV', href: '#cv' },
                    { title: 'À propos', href: '#about' }
                ]
            }
        }
    };

    return obj;
};
