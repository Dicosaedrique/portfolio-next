export interface BubbleProps {
    title: string;
    text?: string;
    image: string;
    alt?: string;
}

// définit une bulle d'infos (une image arrondie, un titre et du texte optionnel)
function Bubble({ title, text, image, alt = '' }: BubbleProps) {
    return (
        <div className="col my-4">
            <img className="img-fluid w-50 rounded-circle bg-white" src={image} alt={alt} />
            <h4 className="mt-2" dangerouslySetInnerHTML={{ __html: title }}></h4>
            {text && <p dangerouslySetInnerHTML={{ __html: text }}></p>}
        </div>
    );
}

export interface BubblesContainerProps {
    small?: boolean;
    imagePrefix?: string;
    bubbles: BubbleProps[];
}

// définit un conteneur de bulles avec la possibilité de régler leur taille (grosse, petite)
// gestion intelligente des chemins avec "imagePrefix"
export default function BubblesContainer({ small, imagePrefix, bubbles }: BubblesContainerProps) {
    let classNames = 'row justify-content-center text-center mt-5';

    if (small) classNames += ' row-cols-2 row-cols-lg-4 row-cols-md-3';
    else classNames += ' row-cols-1 row-cols-lg-3 row-cols-md-2';

    if (imagePrefix)
        bubbles.forEach((bubble) => {
            bubble.image = imagePrefix + bubble.image;
        });

    return (
        <div className={classNames}>
            {bubbles.map((bubbleProps, idx) => (
                <Bubble key={idx} {...bubbleProps} />
            ))}
        </div>
    );
}
