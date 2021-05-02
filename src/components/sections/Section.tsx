export interface SectionContainerProps {
    id: string;
    background?: string;
    text?: string;
}

interface SectionContainerActualProps extends SectionContainerProps {
    children: React.ReactNode;
}

// définit le conteneur d'une section (réglage de la couleur de fond et de la couleur du texte disponible)
export function SectionContainer({ id, background, text, children }: SectionContainerActualProps) {
    let classNames = 'page-section mb-0';
    if (background) classNames += ` bg-${background}`;
    if (text) classNames += ` text-${text}`;

    return (
        <section className={classNames} id={id}>
            <div className="container">{children}</div>
        </section>
    );
}

export interface SectionDividerProps {
    icon?: string;
    light?: boolean;
}

// définit un diviseur dans une section, il peut contenir un icône ou non
export function SectionDivider({ icon, light = false }: SectionDividerProps) {
    return (
        <div className={`divider-custom divider${light ? '-light' : ''}`}>
            {icon && (
                <>
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className={icon}></i>
                    </div>
                </>
            )}
            <div className="divider-custom-line"></div>
        </div>
    );
}

export interface SectionTitleProps {
    title: string;
    uppercase?: boolean;
}

// définit le titre d'une section (titre en majuscules optionnel)
export function SectionTitle({ title, uppercase = true }: SectionTitleProps) {
    let classNames = 'page-section-heading text-center ';
    if (uppercase) classNames += 'text-uppercase';
    return <h2 className={classNames}>{title}</h2>;
}
