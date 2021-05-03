export interface ContactInfos {
    linkedIn?: string;
    github?: string;
    devTo?: string;
    email?: string;
    color?: string; // couleur bootstrap de la section (des textes et icônes)
}

export const defaultContactInfos: ContactInfos = {
    linkedIn: 'https://www.linkedin.com/in/antoine-bouabana/',
    github: 'https://github.com/Dicosaedrique',
    devTo: 'https://dev.to/dicosaedrique',
    email: 'abouaban2@gmail.com'
};

// définit une section de contact (réutilisable) avec possibilité de personnalisé le thème
export default function Contact({ linkedIn, github, devTo, email, color = 'light' }: ContactInfos): JSX.Element {
    return (
        <div className="text-center">
            {email && (
                <a className={`text-${color} my-3 d-block h6`} href={`mailto:${email}`}>
                    <i className="fas fa-envelope me-2"></i> {email}
                </a>
            )}
            {linkedIn && (
                <a
                    className={`btn btn-outline-${color} btn-social mx-1`}
                    href={linkedIn}
                    target="_blank"
                    rel="noreferrer">
                    <i className="fab fa-fw fa-linkedin-in"></i>
                </a>
            )}
            {github && (
                <a
                    className={`btn btn-outline-${color} btn-social mx-1`}
                    href={github}
                    target="_blank"
                    rel="noreferrer">
                    <i className="fab fa-github fa-lg"></i>
                </a>
            )}
            {devTo && (
                <a className={`btn btn-outline-${color} btn-social mx-1`} href={devTo} target="_blank" rel="noreferrer">
                    <i className="fab fa-dev fa-lg"></i>
                </a>
            )}
        </div>
    );
}
