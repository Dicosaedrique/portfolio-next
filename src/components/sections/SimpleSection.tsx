import {
    SectionContainer,
    SectionContainerProps,
    SectionDivider,
    SectionDividerProps,
    SectionTitle,
    SectionTitleProps
} from './Section';

export interface SimpleSectionProps extends SectionContainerProps, SectionDividerProps, SectionTitleProps {
    children: React.ReactNode;
}

// définit une section simple avec un titre, un diviseur et le contenu à définir dans les enfants
export default function SimpleSection({
    id,
    title,
    background,
    text,
    light,
    icon,
    children
}: SimpleSectionProps): JSX.Element {
    return (
        <SectionContainer id={id} background={background} text={text}>
            {/* Section Heading */}
            <SectionTitle title={title} />

            {/* Icon Divider */}
            <SectionDivider icon={icon} light={light} />

            {/* Section Content */}
            {children}
        </SectionContainer>
    );
}
