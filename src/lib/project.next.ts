import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { ProjectData, ProjectPreview } from './project';

const projectsDataDirectory = path.join(process.cwd(), 'data', 'projects');

// renvoi la liste de tous les ids de projet
export function getAllProjectIds() {
    const fileNames = fs.readdirSync(projectsDataDirectory);
    return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
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
