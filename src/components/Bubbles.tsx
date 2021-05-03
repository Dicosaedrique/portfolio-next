export interface BubbleProps {
    title: string;
    text?: string;
    image: string;
    alt?: string;
    small?: boolean;
}

// définit une bulle d'infos (une image arrondie, un titre et du texte optionnel)
function Bubble({ title, text, image, small, alt = '' }: BubbleProps): JSX.Element {
    return (
        <div className={`col my-4 ${small ? '' : 'px-lg-4'}`}>
            <img className="img-fluid w-50 rounded-circle bg-white" src={image} alt={alt} />
            <h4 className="mt-2" dangerouslySetInnerHTML={{ __html: title }}></h4>
            {text && <p style={{ fontSize: '1.1rem' }} dangerouslySetInnerHTML={{ __html: text }}></p>}
        </div>
    );
}

export interface BubblesContainerProps {
    small?: boolean;
    bubbles: BubbleProps[];
}

// définit un conteneur de bulles avec la possibilité de régler leur taille (grosse, petite)
// gestion intelligente des chemins avec "imagePrefix"
export default function BubblesContainer({ small, bubbles }: BubblesContainerProps): JSX.Element {
    let classNames = 'row justify-content-center text-center mt-5';

    if (small) classNames += ' row-cols-2 row-cols-md-3 row-cols-lg-4';
    else classNames += ' row-cols-1 row-cols-md-2 row-cols-lg-3';

    return (
        <div className={classNames}>
            {bubbles.map((bubbleProps, idx) => {
                if (small) bubbleProps.small = true;
                return <Bubble key={idx} {...bubbleProps} />;
            })}
        </div>
    );
}
