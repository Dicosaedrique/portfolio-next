import SimpleSection from '../../sections/SimpleSection';
import { AutoSectionProps } from '../../sections/SectionsPage';
import { useState } from 'react';

import styles from './About.module.css';

// section à propos
export default function About(props: AutoSectionProps) {
    const [isPro, setPro] = useState(true);

    const togglePro = () => setPro(!isPro);

    return (
        <SimpleSection id="about" title="À propos" {...props}>
            <div className="d-flex justify-content-center align-items-center my-4 my-md-5">
                <i className="text-center me-2 fas fa-umbrella-beach"></i>
                <span className="lead me-3">Perso</span>
                <label className={styles.switch}>
                    <input type="checkbox" checked={isPro} onChange={togglePro} />
                    <span className={styles.slider}></span>
                </label>
                <span className="lead ms-3">Pro</span>
                <i className="text-center ms-2 fas fa-briefcase"></i>
            </div>

            {isPro ? (
                <div className="row justify-content-center lead text-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="divider-custom divider-light mt-4 mb-3">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <p>
                            Étudiant en dernière année à la{' '}
                            <a
                                className="text-secondary"
                                href="https://www.uqac.ca/programme/3037-maitrise-en-informatique/"
                                target="_blank">
                                maîtrise en informatique de l'UQAC
                            </a>{' '}
                            au Québec, je souhaite affiner et concrétiser mes compétences à travers un stage de fin
                            d'études.
                        </p>
                        <p>
                            Mes compétences acquises me permettent de modéliser, concevoir et implémenter des
                            applications répondant aux besoins des utilisateurs. En suivant les bonnes pratiques de
                            l'ingénierie logicielle, je m'efforce de produire des solutions adaptées, propres et
                            maintenables.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 text-center">
                    <div className="col lead">
                        <div className="divider-custom divider-light mt-4 mb-3">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <p>
                            Sur mon temps libre j'aime développer des projets pour apprendre de nouvelles technologies
                            du web.
                        </p>
                    </div>
                    <div className="col lead">
                        <div className="divider-custom divider-light mt-4 mb-3">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                                <i className="fas fa-camera-retro"></i>
                            </div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <p>
                            Je prends des photos et réalise des vidéos de mes vacances, des sketchs, des
                            courts-métrages, des vlogs ou autre création vidéo.
                        </p>
                    </div>
                    <div className="col lead">
                        <div className="divider-custom divider-light mt-4 mb-3">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                                <i className="fas fa-film"></i>
                            </div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <p>
                            Je suis un grand fan de film et surtout de série ! Tu peux voir si tu as les mêmes goûts que
                            moi en regardant mon profil{' '}
                            <a
                                href="https://www.tvtime.com/fr/user/49417036/profile"
                                target="_blank"
                                className="text-secondary">
                                TV Time
                            </a>
                            .
                        </p>
                    </div>
                    <div className="col lead">
                        <div className="divider-custom divider-light mt-4 mb-3">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                                <i className="fas fa-gamepad"></i>
                            </div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <p>
                            Une partie de jeu vidéo de temps en temps ne fait jamais de mal, j'aime jouer à des jeux
                            comme Skyrim, Minecraft et Far Cry. Tu peux me défier sur{' '}
                            <a href="https://tetris.com/play-tetris" target="_blank" className="text-secondary">
                                Tetris®
                            </a>{' '}
                            et battre mon score record de <span className="text-secondary">562,965</span> !
                        </p>
                    </div>
                </div>
            )}
        </SimpleSection>
    );
}
