import { useEffect } from 'react';

import { jqueryInitScrollToTop } from '../lib/jquery.utils';
import { DefaultFooter } from './template/footer';
import DefaultHead, { PageHead } from './template/head';
import Navbar, { NavBarProps } from './template/nav';
import { DefaultScriptsImport } from './template/scripts';

export interface PageInfos {
    pageHead: PageHead;
    footer?: boolean;
    copyright?: boolean;
    navbarInfos?: NavBarProps;
}

interface LayoutProps extends PageInfos {
    children: React.ReactNode;
}

// définit le layout de base d'une page du portfolio
export default function Layout({
    pageHead: { title, author, description, noIndex },
    navbarInfos,
    footer,
    children,
    copyright
}: LayoutProps): JSX.Element {
    useEffect(() => {
        return jqueryInitScrollToTop();
    }, []);

    return (
        <>
            {/* Head par défaut de la page */}
            <DefaultHead title={title} author={author} description={description} noIndex={noIndex} />

            {/* navbar (optionnel) */}
            {navbarInfos && <Navbar main={navbarInfos.main} links={navbarInfos.links} />}

            {/* contenu de la page */}
            {children}

            {/* le footer (optionnel) */}
            {footer && <DefaultFooter />}

            {/* Copyright / Crédits Section */}
            {copyright && (
                <div className="copyright py-4 text-center text-white">
                    <div className="container">
                        <small>Copyright © Antoine Bouabana (Dicosaedrique) - 2021</small>
                        <br />
                        <small>
                            Site créé à partir du thème{' '}
                            <a
                                href="https://startbootstrap.com/theme/freelancer"
                                className="text-primary"
                                target="_blank"
                                rel="noreferrer">
                                Freelancer
                            </a>{' '}
                            par{' '}
                            <a
                                href="http://startbootstrap.com"
                                className="text-primary"
                                target="_blank"
                                rel="noreferrer">
                                Start Bootstrap
                            </a>
                            . Publié sous la licence{' '}
                            <a
                                href="https://github.com/startbootstrap/startbootstrap-freelancer/blob/master/LICENSE"
                                className="text-primary"
                                target="_blank"
                                rel="noreferrer">
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
            <DefaultScriptsImport />
        </>
    );
}
