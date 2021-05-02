import Header from '../template/header';
import Contact, { defaultContactInfos } from './Contact';

// définit le master head de la page d'accueil
export default function Masthead() {
    return (
        <Header>
            {/* Masthead Avatar Image */}
            <img src="/images/profil.png" className="masthead-avatar mb-5 rounded-circle" alt="photo de l'auteur" />
            {/* Masthead Heading */}
            <h1 className="masthead-heading text-uppercase mb-0">
                Développeur Web
                <br />
                Full Stack
            </h1>

            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                    <i className="fas fa-code"></i>
                </div>
                <div className="divider-custom-line"></div>
            </div>

            {/* Masthead Subheading */}
            <p className="masthead-subheading font-weight-light">Étudiant en Informatique à l'UQAC (Québec)</p>
            <a className="text-light mb-4" href="https://goo.gl/maps/j2K89sgKMcmoL1eQA" target="_blank">
                <i className="fa fa-map-marker-alt mr-2"></i> Chicoutimi (QC), Canada
            </a>
            <br />
            <br />

            {/* Contact Section */}
            <div className="font-weight-light mt-4">
                <h2 className="text-uppercase mb-4">Pour me contacter</h2>
                <Contact
                    linkedIn={defaultContactInfos.linkedIn}
                    github={defaultContactInfos.github}
                    devTo={defaultContactInfos.devTo}
                    email={defaultContactInfos.email}
                />
            </div>
        </Header>
    );
}
