import SimpleSection from '../../sections/SimpleSection';
import { AutoSectionProps } from '../../sections/SectionsPage';

// section CV (avec bouton pour télécharger mon CV)
export default function CV(props: AutoSectionProps) {
    return (
        <SimpleSection id="cv" title="Mon CV" icon="fas fa-file-pdf" {...props}>
            <div className="row justify-content-center lead text-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <p>
                        Pour plus d'informations sur mes diplômes, mes formations, mes expériences professionnelles ou
                        tout simplement pour retrouver l'essentiel de mes informations en un seul endroit : Téléchargez
                        mon CV !
                    </p>
                    <div className="mt-4">
                        <a
                            className={`btn btn-xl btn-outline-${props.light ? 'light' : 'secondary'}`}
                            target="_blank"
                            href="/files/cv_antoine_bouabana_2021.pdf">
                            <i className="fas fa-download me-2"></i>
                            Télécharger (PDF)
                        </a>
                    </div>
                </div>
            </div>
        </SimpleSection>
    );
}
