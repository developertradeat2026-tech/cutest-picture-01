// cutest-picture-01 entry point (Node 22, standard library only).
// The picture ships as entry.png beside this file; the program copies it to
// /output/entry.png, which is exactly the bytes the gate and the judge read.
// Deterministic: no network, no randomness, no wall clock.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));