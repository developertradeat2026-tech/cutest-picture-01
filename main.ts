// cutest-picture-01 - grader entrypoint (Node 22, standard library only).
//
// Copies the artwork shipped beside this module (entry.png, 1024x1024 PNG) into
// the grader output directory as entry.png, so the bytes read by the gate and the
// judge are exactly the bytes committed in this repo. Deterministic by design:
// no network, no randomness, no wall clock.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// (MAKEFUN_OUTPUT_DIR defaults to /output when unset.)

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL('entry.png', import.meta.url), join(outputDir, 'entry.png'));
