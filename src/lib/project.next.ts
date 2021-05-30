import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';

import { ProjectData, ProjectPreview } from './project';

const projectsDataDirectory = path.join(process.cwd(), 'data', 'projects');

// renvoi la liste de tous les ids de projet
export function getAllProjectIds(): string[] {
    const fileNames = fs.readdirSync(projectsDataDirectory);
    const ids = fileNames.map((fileName) => fileName.replace(/\.md$/, ''));

    const temp: { id: string; order: number }[] = [];

    for (const id of ids) {
        // on récupère juste l'ordre dans le fichier (si non défini, place l'élément en dernier)
        const order = (matter(readProjectFileFromId(id)).data as { order: number | undefined }).order || id.length;
        temp.push({ id, order });
    }

    // tri des projets par ordre
    temp.sort((a, b) => a.order - b.order);

    return temp.map((obj) => obj.id);
}

// renvoi le contenu d'un fichier de projet à partir de son id
function readProjectFileFromId(id: string): string {
    const fullPath = path.join(projectsDataDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    return fileContents;
}

// renvoi le preview d'un projet à partir de son id
function getProjectPreviewFromId(id: string): ProjectPreview {
    // parse le contenu avec gray matter
    const { title, subTitle, cover, coverAlt } = matter(readProjectFileFromId(id)).data as ProjectPreview;
    return { id, title, subTitle, cover, coverAlt };
}

// renvoi les données complètes d'un projet à partir de son id
export async function getProjectDataFromId(id: string): Promise<ProjectData> {
    // parse le contenu avec gray matter
    const matterResult = matter(readProjectFileFromId(id));

    const projectData = matterResult.data as ProjectData;
    projectData.id = id;

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(matterResult.content);

    projectData.content = processedContent.toString();

    return projectData;
}

// renvoi les previews de tous les projets
export function getAllProjectPreviews(): ProjectPreview[] {
    return getAllProjectIds().map(getProjectPreviewFromId);
}
