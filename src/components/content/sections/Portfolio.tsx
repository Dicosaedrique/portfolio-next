import PortfolioList from '../../PortfolioList';
import SimpleSection from '../../sections/SimpleSection';
import { AutoSectionProps } from '../../sections/SectionsPage';
import { ProjectPreview } from '../../../lib/project';

interface Props extends AutoSectionProps {
    projectPreviews: ProjectPreview[];
}

// section portfolio, une liste de projets redirigeant vers leur page
export default function Portfolio({ background, text, light, projectPreviews }: Props) {
    return (
        <SimpleSection id="portfolio" title="Mon portfolio" icon="fas fa-medal" {...{ background, text, light }}>
            <h4 className="text-center my-5 text-secondary">
                <i className="fas fa-info-circle me-2"></i>Clique sur un projet pour en voir les détails !
            </h4>
            <div className="portfolio">
                <PortfolioList items={projectPreviews} />
            </div>
        </SimpleSection>
    );
}
