import React from 'react';

export interface AutoSectionProps {
    background?: string; // couleur de fond (optionnel par défaut clair = blanc)
    text?: string; // couleur du texte (optionnel par défaut fond foncé = texte blanc)
    light?: boolean; // pour les diviseur (true = fond foncé)
}

export interface SectionsPagesProps {
    beginLight: boolean; // premier élément du contneur est clair ?
    sections: React.FunctionComponent<AutoSectionProps>[]; // les sections à afficher
    lightText?: string; // couleur bootstrap du texte d'une section à fond clair
    darkText?: string; // couleur bootstrap du texte d'une section à fond foncé
    darkBackground?: string; // couleur d'un fond foncé
}

// définit un conteneur intelligent de section qui permet de
// faire alterner les couleurs des sections selon un thème paramétrable
export default function SectionsPages({
    beginLight,
    sections,
    lightText = 'secondary',
    darkText = 'white',
    darkBackground = 'primary'
}: SectionsPagesProps) {
    const lightProps: AutoSectionProps = { text: lightText, light: false };
    const darkProps: AutoSectionProps = { background: darkBackground, text: darkText, light: true };

    return (
        <>
            {sections.map((Section, idx) => {
                const isLight = (idx === 0 && beginLight) || idx % 2 === (beginLight ? 0 : 1);
                if (isLight) return <Section key={idx} {...lightProps} />;
                else return <Section key={idx} {...darkProps} />;
            })}
        </>
    );
}
