// One word, first thought, written to /output/entry.txt.
// Node 22, standard library only; MAKEFUN_OUTPUT_DIR stands in for /output
// outside the grader. The file is byte-identical on every run.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = 'coffee';

// The competition gate for this entry: exactly one word.
const LIMIT = 30;

function checkEntry(line: string, limit: number): void {
  if (line.length > limit || line.includes(' ')) {
    console.error(`entry must be one word of at most ${limit} characters`);
    process.exit(1);
  }
}

checkEntry(LINE, LIMIT);

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
// No trailing newline: the file is exactly the word, nothing more.
