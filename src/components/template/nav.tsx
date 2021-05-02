import Link from 'next/link';

export interface NavBarItem {
    title: string;
    href: string;
}

export interface NavBarProps {
    main: NavBarItem;
    links: NavBarItem[];
}

// barre de navigation par défaut, offre le lien principal affiché en tout temps
// et une liste de liens(cachée sur les mobiles)
export default function Navbar({ main, links }: NavBarProps) {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <Link href={main.href}>
                    <a className="navbar-brand js-scroll-trigger">{main.title}</a>
                </Link>
                <button
                    className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ml-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    {links.length > 0 && (
                        <ul className="navbar-nav ml-auto">
                            {links.map(({ title, href }) => (
                                <li className="nav-item mx-0 mx-lg-1" key={title}>
                                    <Link href={href}>
                                        <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger scroll-spy">
                                            {title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
}
