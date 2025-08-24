import { promises as fs } from 'fs';
import path from 'path';

export async function loadTranslations(lng, namespaces = ['common']) {
    const resources = {};
    for(const ns of namespaces) {
        const p = path.join(process.cwd(), 'public', 'locales', lng, `${ns}.json`);
        const raw = await fs.readFile(p, 'utf8');
        resources[ns] = JSON.parse(raw);
    }
    return resources;
}
