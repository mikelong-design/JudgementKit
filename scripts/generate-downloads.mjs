import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const matrixPath = path.join(projectRoot, 'src', 'data', 'matrix.json');
const raciPath = path.join(projectRoot, 'src', 'data', 'raci.json');
const outDir = path.join(projectRoot, 'public', 'downloads');

const matrixColumns = ['area', 'own', 'weekToWeek', 'guardrails', 'warning'];
const raciColumns = ['decisionType', 'designer', 'pm', 'engineering'];

function toCsv(rows, columns) {
  const escapeValue = (value) => {
    const raw = String(value ?? '');
    const escaped = raw.replace(/"/g, '""');

    if (/[,"\n\r]/.test(escaped)) {
      return `"${escaped}"`;
    }

    return escaped;
  };

  const header = columns.join(',');
  const body = rows
    .map((row) => columns.map((column) => escapeValue(row[column])).join(','))
    .join('\n');

  return `${header}\n${body}\n`;
}

async function main() {
  const matrix = JSON.parse(await readFile(matrixPath, 'utf8'));
  const raci = JSON.parse(await readFile(raciPath, 'utf8'));

  await mkdir(outDir, { recursive: true });

  await writeFile(path.join(outDir, 'matrix.csv'), toCsv(matrix, matrixColumns), 'utf8');
  await writeFile(path.join(outDir, 'raci.csv'), toCsv(raci, raciColumns), 'utf8');

  console.log('Generated downloads/matrix.csv and downloads/raci.csv');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
