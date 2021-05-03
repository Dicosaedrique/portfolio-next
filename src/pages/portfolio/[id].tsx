import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect } from 'react';

import Layout, { PageInfos } from '../../components/layout';
import Header from '../../components/template/header';
import setupGallery from '../../lib/gallery';
import { ProjectData } from '../../lib/project';
import { getAllProjectIds, getProjectDataFromId } from '../../lib/project.next';

interface ProjectPageProps {
    pageInfos: PageInfos;
    project: ProjectData;
}

// page template d'un projet du portfolio
export default function ProjectPage({ pageInfos, project }: ProjectPageProps): JSX.Element {
    // créer la gallerie
    useEffect(() => {
        setupGallery({ containerId: 'gallery' });
    });

    return (
        <Layout {...pageInfos}>
            {/* Header */}
            <Header>
                <h1
                    className="masthead-heading text-uppercase mb-0"
                    dangerouslySetInnerHTML={{ __html: project.title }}></h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-medal"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
            </Header>

            {/* Contenu du projet */}
            <section className="page-section mt-5">
                <div className="container">
                    <div className="row text-secondary">
                        <div className="col-12 col-lg-8 mb-4">
                            <div className="row mb-4" id="gallery">
                                {project.screenshots &&
                                    project.screenshots.map(({ src, caption }) => (
                                        <div key={src} className="col-md-6">
                                            <div className="thumbnail gg-box">
                                                <img className="w-100 gallery-img" src={src} alt={caption} />
                                                <div className="caption text-center">
                                                    <p>{caption}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>

                            <h1 className="mb-2">TD;LR</h1>
                            <p className="lead">{project.abstract}</p>
                            {project.demo && (
                                <a
                                    className="btn btn mb-3 me-2 btn-outline-secondary"
                                    href={project.demo}
                                    role="button">
                                    <i className="fas fa-lg fa-eye me-2"></i> Démo
                                </a>
                            )}
                            {project.source && (
                                <a
                                    className="btn btn mb-3 btn-outline-secondary"
                                    href={project.source}
                                    target="_blank"
                                    role="button"
                                    rel="noreferrer">
                                    <i className="fab fa-lg fa-github me-2"></i> Code source
                                </a>
                            )}

                            {project.content && <div dangerouslySetInnerHTML={{ __html: project.content }}></div>}
                        </div>

                        <div className="col-12 col-lg-4">
                            <h3>Technologies utilisées</h3>
                            <ul>
                                {project.technologies.map(({ name, bold }) => (
                                    <li key={name} className={`mb-1 ${bold ? 'lead' : ''}`}>
                                        {name}
                                    </li>
                                ))}
                            </ul>

                            <h3 className="mt-4">Catégories</h3>
                            {project.tags.map((tag) => (
                                <span key={tag} className="badge bg-primary px-2 py-1 me-1 text-white">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

// récupération des routes dynamiques
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllProjectIds();

    return {
        paths: paths.map((path) => ({ params: { id: path } })),
        fallback: false
    };
};

// récupération des informations de la page
export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (params === undefined || !('id' in params)) throw 'Une erreur est survenue !';

    const project = await getProjectDataFromId(params.id as string);

    const pageInfos: PageInfos = {
        pageHead: {
            noIndex: false,
            title: project.pageTitle !== undefined ? project.pageTitle : project.title,
            description: project.abstract,
            author: 'Antoine Bouabana'
        },
        copyright: true,
        footer: true,
        navbarInfos: {
            main: { title: 'Antoine Bouabana', href: '/#portfolio' }
        }
    };

    return {
        props: {
            pageInfos,
            project
        }
    };
};
