import Contact, { ContactInfos } from '../content/Contact';

export interface FooterInfos extends ContactInfos {
    title: string;
}

// footer du portfolio (affichage de la section de contact)
export default function Footer({ title, linkedIn, github, devTo, email }: FooterInfos) {
    return (
        <footer className="footer text-center">
            <h4 className="text-uppercase mb-4">{title}</h4>
            <Contact linkedIn={linkedIn} github={github} devTo={devTo} email={email} />
        </footer>
    );
}
