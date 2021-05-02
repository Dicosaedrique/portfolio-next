// propriétés d'un projet (uniquement pour son aperçu)
export interface ProjectPreview {
    id: string;
    title: string;
    subTitle?: string;
    cover: string;
    coverAlt?: string;
}

// propriétés complètes d'un projet
export interface ProjectData extends ProjectPreview {
    pageTitle?: string; // titre de la page html (optionnel, sinon prend title)
    abstract: string;
    screenshots?: { src: string; caption: string }[];
    demo?: string;
    source?: string;
    technologies: { name: string; bold: boolean }[]; // les technologies utilisées dans le projet
    tags: string[];
    content?: string; // contenu du projet (HTML) -> généré par markdown
}

// renvoi le lien vers un projet à partir de son id
export function getProjectLinkFromId(id: string) {
    return `/portfolio/${id}`;
}
