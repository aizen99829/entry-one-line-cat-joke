import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const JOKE = "My cat pays no rent, eats my food, and still looks at me like I'm the staff.";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, `${JOKE}\n`, "utf8");
