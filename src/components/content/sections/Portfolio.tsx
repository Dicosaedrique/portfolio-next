import PortfolioList, { PortfolioItemProps } from '../../PortfolioList';
import SimpleSection from '../../sections/SimpleSection';
import { AutoSectionProps } from '../../sections/SectionsPage';

// section portfolio, une liste de projets redirigeant vers leur page
export default function Portfolio({ background, text, light }: AutoSectionProps) {
    return (
        <SimpleSection id="portfolio" title="Mon portfolio" icon="fas fa-medal" {...{ background, text, light }}>
            <h4 className="text-center my-5 text-secondary">
                <i className="fas fa-info-circle mr-2"></i>Clique sur un projet pour en voir les détails !
            </h4>
            <div className="portfolio">
                <PortfolioList items={PORTFOLIO_ITEMS} />
            </div>
        </SimpleSection>
    );
}

const PORTFOLIO_ITEMS: PortfolioItemProps[] = [
    {
        title: 'Résolution de Sudoku<br>(IA / Web)',
        text: 'JavaScript, P5.js',
        href: 'portfolio/sudoku',
        image: '/images/portfolio/categories/ia.png',
        alt: 'image intelligence artificielle'
    },
    {
        title: 'Démineur 3D<br>(Web)',
        text: 'TypeScript, React, Three.js, Material-UI',
        href: 'portfolio/demineur',
        image: '/images/portfolio/categories/jeux-video.png',
        alt: 'image jeux vidéo'
    }
];

/*{
    title: '',
    text: '',
    href: 'portfolio/',
    image: '/images/portfolio/categories/',
    alt: ''
} */
