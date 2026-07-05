import { rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const targets = [
  "node_modules",
  ".turbo",
  ".cache",
  "coverage",
  "dist",
  "build",
  "apps/web/dist",
  "apps/web/build",
  "apps/server/dist",
  "apps/server/build",
  "packages/ui/dist",
  "packages/types/dist",
  "packages/utils/dist",
  "packages/config/dist"
];

await Promise.all(
  targets.map((target) =>
    rm(join(root, target), { force: true, recursive: true })
  )
);

console.log("Cleaned workspace artifacts.");