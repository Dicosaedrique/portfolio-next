import {
    SectionContainer,
    SectionContainerProps,
    SectionDivider,
    SectionDividerProps,
    SectionTitle,
    SectionTitleProps
} from './Section';

export interface ComplexSectionProps extends SectionContainerProps, SectionDividerProps, SectionTitleProps {
    subSections: SubSectionProps[];
}

// définit une section nestée c'est à dire une section avec des sous-sections
// le titre principal de la super section est entouré de diviseur au lieu d'en avoir juste au dessus
// les sous sections sont passées par leur props
export default function NestedSection({
    id,
    title,
    background,
    text,
    light,
    icon,
    subSections
}: ComplexSectionProps): JSX.Element {
    return (
        <SectionContainer id={id} background={background} text={text}>
            {/* Section Heading */}
            <div className="mb-5">
                <SectionDivider icon={icon} light={light} />
                <SectionTitle title={title} />
                <SectionDivider light={light} />
            </div>

            {/* Subsections */}
            {subSections.map((subSectionProps) => (
                <SubSection key={subSectionProps.id} {...subSectionProps} />
            ))}
        </SectionContainer>
    );
}

export interface SubSectionProps extends SectionTitleProps, SectionDividerProps {
    id: string;
    children: React.ReactNode;
}

// définit une sous section contenant un titre et un diviseur utilisable dans une section nestée
// le contenu est libre et à définir dans les enfants
function SubSection({ id, title, uppercase = false, icon, light, children }: SubSectionProps) {
    return (
        <div id={id} className="mb-5 pt-5">
            <SectionDivider icon={icon} light={light} />
            <SectionTitle title={title} uppercase={uppercase} />
            {children}
        </div>
    );
}
