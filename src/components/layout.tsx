import Footer, { FooterInfos } from './template/footer';
import DefaultHead, { PageHead } from './template/head';
import Navbar, { NavBarProps } from './template/nav';
import StaticImportScripts from './template/scripts';

export interface PageInfos {
    pageHead: PageHead;
    footerInfos?: FooterInfos;
    showCopyright?: boolean;
    navbarInfos?: NavBarProps;
    scripts: string[];
}

interface LayoutProps extends PageInfos {
    children: React.ReactNode;
}

// définit le layout de base d'une page du portfolio
export default function Layout({
    pageHead: { title, author, description, noIndex },
    navbarInfos,
    footerInfos,
    children,
    showCopyright,
    scripts
}: LayoutProps) {
    return (
        <>
            {/* Head par défaut de la page */}
            <DefaultHead title={title} author={author} description={description} noIndex={noIndex} />

            {/* navbar (optionnel) */}
            {navbarInfos && <Navbar main={navbarInfos.main} links={navbarInfos.links} />}

            {/* contenu de la page */}
            {children}

            {/* le footer (optionnel) */}
            {footerInfos && (
                <Footer
                    title={footerInfos.title}
                    linkedIn={footerInfos.linkedIn}
                    github={footerInfos.github}
                    devTo={footerInfos.devTo}
                    email={footerInfos.email}
                />
            )}

            {/* Copyright / Crédits Section */}
            {showCopyright && (
                <div className="copyright py-4 text-center text-white">
                    <div className="container">
                        <small>Copyright © Antoine Bouabana (Dicosaedrique) - 2021</small>
                        <br />
                        <small>
                            Site créé à partir du thème{' '}
                            <a href="https://startbootstrap.com/theme/freelancer" target="_blank">
                                Freelancer
                            </a>{' '}
                            par{' '}
                            <a href="http://startbootstrap.com" target="_blank">
                                Start Bootstrap
                            </a>
                            . Publié sous la licence{' '}
                            <a
                                href="https://github.com/startbootstrap/startbootstrap-freelancer/blob/master/LICENSE"
                                target="_blank">
                                MIT
                            </a>
                            . Version 6.0.5
                        </small>
                    </div>
                </div>
            )}

            {/* Scroll to Top Button (Only visible on small and extra-small screen sizes) */}
            <div className="scroll-to-top d-lg-none position-fixed">
                <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
                    <i className="fa fa-chevron-up"></i>
                </a>
            </div>

            {/* Imports des scripts statiques */}
            <StaticImportScripts scripts={scripts} />
        </>
    );
}
