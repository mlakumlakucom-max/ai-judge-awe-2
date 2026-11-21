// A quiet piece about afternoon light, written for a slow reader.
// One short text, one file, no network — just words and a little patience.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "Afternoon light lies across the floor, and dust drifts through it " +
  "like slow snow. This morning it rested on a far field; by evening " +
  "it will reach the rooftops. When the room goes dark, the light " +
  "does not end. It keeps travelling, still warm on some wall you " +
  "will never see.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
