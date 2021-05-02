import SimpleSection from '../../sections/SimpleSection';
import { AutoSectionProps } from '../../sections/SectionsPage';

// section à propos
export default function About(props: AutoSectionProps) {
    return (
        <SimpleSection id="about" title="À propos" icon="fas fa-feather-alt" {...props}>
            <div className="row">
                <p className="lead text-center">
                    Étudiant en dernière année à la{' '}
                    <a
                        className="text-dark"
                        href="https://www.uqac.ca/programme/3037-maitrise-en-informatique/"
                        target="_blank">
                        maîtrise en informatique de l'UQAC
                    </a>{' '}
                    au Québec, je souhaite affiner et concrétiser mes compétences à travers un stage de fin d'études.
                    Mes compétences acquises me permettent de modéliser, concevoir et implémenter des applications
                    répondant aux besoins des utilisateurs. En suivant les bonnes pratiques de l'ingénierie logicielle,
                    je m'efforce de produire des solutions adaptées, propres et maintenables.
                </p>
            </div>
        </SimpleSection>
    );
}
