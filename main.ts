import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const joke = "I bought my cat a $50 bed; he sleeps in the box it came in and judges me for wasting money on the bed.";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, joke + "\n", "utf8");
