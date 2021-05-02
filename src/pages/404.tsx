import Layout, { PageInfos } from '../components/layout';
import { GetStaticProps } from 'next';
import { DEFAULT_SCRIPTS } from '../components/template/scripts';
import { defaultContactInfos } from '../components/content/Contact';
import Link from 'next/link';

// page d'erreur 404 du portfolio
export default function Custom404({ pageHead, footerInfos, showCopyright, scripts }: PageInfos) {
    return (
        <Layout pageHead={pageHead} showCopyright={showCopyright} footerInfos={footerInfos} scripts={scripts}>
            <div className="container my-5 py-5">
                <div className="text-center mb-5">
                    {/* animation glitch error tiré du style du template SB Admin 2 : https://startbootstrap.com/theme/sb-admin-2 */}
                    <div className="error mx-auto" data-text="404">
                        404
                    </div>
                    <p className="lead mb-2 error-color">Cette page n'existe pas...</p>
                    <Link href="/">
                        <a>&larr; Retour à l'accueil</a>
                    </Link>
                </div>
                <div className="row justify-content-center w-100">
                    <div className="col col-8 col-lg-4">
                        <img className="img-fluid" src="/images/404_void.svg" alt="image d'un vide profond" />
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    html,
                    body {
                        width: 100%;
                        height: 100%;
                    }
                `}
            </style>
        </Layout>
    );
}

// propriétés statique de la page d'accueil
export const getStaticProps: GetStaticProps = async () => {
    const obj: { props: PageInfos } = {
        props: {
            pageHead: {
                noIndex: true,
                title: '404 - Not Found',
                author: 'Antoine Bouabana'
            },
            showCopyright: true,
            footerInfos: { title: 'Où me trouver ?', ...defaultContactInfos },
            scripts: []
        }
    };

    return obj;
};
