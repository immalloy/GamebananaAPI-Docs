import fs from "node:fs/promises";
import path from "node:path";

const sourcePath = path.join(
  process.cwd(),
  "node_modules",
  "rapidoc",
  "dist",
  "rapidoc-min.js"
);
const targetDir = path.join(process.cwd(), "static", "vendor");
const targetPath = path.join(targetDir, "rapidoc-min.js");

await fs.mkdir(targetDir, { recursive: true });
await fs.copyFile(sourcePath, targetPath);
