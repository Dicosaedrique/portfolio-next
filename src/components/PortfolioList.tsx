import Link from 'next/link';

import { getProjectLinkFromId, ProjectPreview } from '../lib/project';

// défini un item de portfolio avec un titre, du texte optionnel,
// une image et un lien vers la page du projet dans le portfolio
export function PortfolioItem({ id, title, subTitle, cover, coverAlt = '' }: ProjectPreview): JSX.Element {
    return (
        <div className="col my-4">
            <Link href={getProjectLinkFromId(id)}>
                <a>
                    <div className="portfolio-item mx-auto">
                        <div className="portfolio-item-fader h-100 w-100">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content d-flex flex-column justify-content-center text-center text-white h-100 w-100 p-3">
                                    <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                                    {subTitle && (
                                        <p className="lead" dangerouslySetInnerHTML={{ __html: subTitle }}></p>
                                    )}
                                </div>
                            </div>
                            <div className="portfolio-item-caption-button d-flex flex-column text-white align-items-center justify-content-center h-100 w-100">
                                <h3>Plus d&apos;infos</h3>
                                <i className="fas fa-info-circle fa-3x"></i>
                            </div>
                        </div>
                        <img className="img-fluid" src={cover} alt={coverAlt} />
                    </div>
                </a>
            </Link>
        </div>
    );
}

export interface PortfolioListProps {
    items: ProjectPreview[];
}

// définit une liste d'item de portfolio
export default function PortfolioList({ items }: PortfolioListProps): JSX.Element {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
            {items.map((itemProps) => (
                <PortfolioItem key={itemProps.title} {...itemProps} />
            ))}
        </div>
    );
}
