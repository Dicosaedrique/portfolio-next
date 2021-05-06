import Link from 'next/link';
import { useEffect } from 'react';
import Scrollspy from 'react-scrollspy';

import { jqueryInitNavbar } from '../../lib/jquery.utils';

export interface NavBarItem {
    title: string;
    href: string;
    spyId?: string;
}

export interface NavBarProps {
    main: NavBarItem;
    links?: NavBarItem[];
}

// barre de navigation par défaut, offre le lien principal affiché en tout temps
// et une liste de liens(cachée sur les mobiles)
export default function Navbar({ main, links }: NavBarProps): JSX.Element {
    useEffect(() => {
        return jqueryInitNavbar();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <Link href={main.href}>
                    <a className="navbar-brand js-scroll-trigger">{main.title}</a>
                </Link>
                {links && links.length > 0 && (
                    <button
                        className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ms-1"></i>
                    </button>
                )}
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    {links && links.length > 0 && (
                        <Scrollspy
                            items={links.map((link) => link.spyId || '')}
                            currentClassName="active"
                            className="navbar-nav ms-auto"
                            offset={-80}>
                            {links.map(({ title, href, spyId }) => (
                                <li className="nav-item mx-0 mx-lg-1" key={title}>
                                    <Link href={href}>
                                        <a
                                            className={`nav-link py-3 px-0 px-lg-3 rounded ${
                                                spyId ? 'js-scroll-trigger' : ''
                                            }`}>
                                            {title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </Scrollspy>
                    )}
                </div>
            </div>
        </nav>
    );
}
