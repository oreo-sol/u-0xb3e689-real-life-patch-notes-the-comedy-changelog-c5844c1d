import { mkdirSync, writeFileSync } from "node:fs";

// One-line patch note for a real-life bug: the laundry dryer's missing-sock
// behaviour, reported in the terse register of a real release note.
const entry =
  "v2.7.1: fixed a bug where the dryer returned one sock per pair and kept the other as a service fee.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
