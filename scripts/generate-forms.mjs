// Génère les formulaires PDF de public/forms/ à partir de leurs sources HTML (scripts/formulaires/).
// Utilise Chrome (ou Chromium) en mode headless : `pnpm forms` après modification d'un formulaire.
// Variable CHROME pour indiquer un autre exécutable, ex. CHROME=chromium pnpm forms
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const chrome = process.env.CHROME || 'google-chrome';

// Source HTML -> PDF publié (noms conservés : la page Inscriptions y fait référence)
const FORMS = {
  'formulaire-inscription.html': 'formulaire-inscription-complet.pdf',
  'fiche-medicale.html': 'fiche-medicale-complete.pdf',
};

for (const [source, output] of Object.entries(FORMS)) {
  const input = pathToFileURL(path.join(rootDir, 'scripts/formulaires', source)).href;
  const target = path.join(rootDir, 'public/forms', output);
  execFileSync(chrome, [
    '--headless=new',
    '--no-sandbox',
    '--no-pdf-header-footer',
    '--allow-file-access-from-files',
    '--virtual-time-budget=3000',
    `--print-to-pdf=${target}`,
    input,
  ], { stdio: 'ignore' });
  console.log(`  public/forms/${output}`);
}
