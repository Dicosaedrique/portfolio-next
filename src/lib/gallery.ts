// basé sur grid-gallery (https://github.com/jestov/grid-gallery)

interface GalleryOptions {
    containerId: string;
}

export default function gridGallery(options: GalleryOptions) {
    const root = document.querySelector('body, html') as HTMLBodyElement;
    const container = document.querySelector(`#${options.containerId}`) as HTMLDivElement;
    const imageNodes = document.querySelectorAll('.gallery-img') as NodeListOf<HTMLImageElement>;

    const images: HTMLImageElement[] = [];

    imageNodes.forEach((image) => images.push(image));

    if (root === null || container === null || images.length === 0) return;

    // création du modal
    const screen = document.createElement('div');
    screen.id = 'gallery-screen';
    screen.hidden = true;

    screen.innerHTML = `
        <div id="gallery-img-main-div"></div>
        <div class="gallery-btn gallery-close">&times</div>
        `;
    container.prepend(screen);

    // récupération des éléments du modal
    const imageDiv = document.querySelector('#gallery-img-main-div') as HTMLDivElement;
    const close = document.querySelector('.gallery-close') as HTMLDivElement;

    if (imageDiv === null || close === null) return;

    // ajout de l'image zoomée
    const mainImg = document.createElement('img');
    imageDiv.append(mainImg);

    // ouvre le modal avec l'image rentrée
    function show(image: HTMLImageElement) {
        screen.hidden = false;
        root.style.overflow = 'hidden';
        mainImg.src = image.src;
        root.addEventListener('keydown', hide);
    }

    // cache le modal
    function hide() {
        screen.hidden = true;
        root.style.overflow = 'auto';
        root.removeEventListener('keydown', hide);
    }

    // passe à l'image précédente (si possible)
    function prev() {
        const currentImageIdx = images.findIndex((image) => image.src === mainImg.src);
        if (currentImageIdx !== -1 && currentImageIdx !== 0) {
            mainImg.src = images[currentImageIdx - 1].src;
        }
    }

    // passe à l'image suivante (si possible)
    function next() {
        const currentImageIdx = images.findIndex((image) => image.src === mainImg.src);
        if (currentImageIdx !== -1 && currentImageIdx !== images.length - 1) {
            mainImg.src = images[currentImageIdx + 1].src;
        }
    }

    // AJOUTE LES LISTENERS

    screen.addEventListener('click', function (e) {
        if (e.target !== mainImg || e.target == this || e.target == close) hide();
    });

    // ajout des listeners pour les images
    images.forEach((image) => {
        image.addEventListener('click', function () {
            show(image);
        });
    });
}
