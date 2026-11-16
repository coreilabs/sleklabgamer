// Adaptação do helper do projeto sleklab para a ponte estática.
// Execute uma vez na preparação local, nunca a cada visita.
import { readFile, writeFile } from 'node:fs/promises';
import { randomBytes } from 'node:crypto';
const root = new URL('../', import.meta.url);
const token = randomBytes(8).toString('hex');
const manifest = {};
for (const directory of ['', 'login/']) {
 const page = new URL(`${directory}index.html`, root);
 let html = await readFile(page, 'utf8');
 html = html.replace(/redirect\.js\?v=[a-zA-Z0-9_]+/g, `redirect.js?v=${token}`);
 await writeFile(page, html);
 manifest[`${directory}redirect.js`] = token;
}
await writeFile(new URL('assets.json', root), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Token de publicação: ${token}`);
