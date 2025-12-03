#!/usr/bin/env node
/**
 * Safely detect unused assets inside the public/ folder.
 * By default, it only reports. Use --delete to remove unused assets (with a prompt).
 *
 * Examples:
 *   node scripts/clean-public-assets.mjs          # dry-run report
 *   node scripts/clean-public-assets.mjs --delete # delete after confirmation
 *   node scripts/clean-public-assets.mjs --delete --force # delete without prompt
 */

import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "public");
const searchRoots = [
  path.join(projectRoot, "src"),
  publicDir,
];
const ignoreNames = new Set([
  ".DS_Store",
  ".gitkeep",
]);

const args = process.argv.slice(2);
const shouldDelete = args.includes("--delete");
const forceDelete = args.includes("--force");

if (!fs.existsSync(publicDir)) {
  console.error("public/ directory not found. Run from project root.");
  process.exit(1);
}

const hasRipgrep = (() => {
  const res = spawnSync("rg", ["--version"], { stdio: "ignore" });
  return res.status === 0;
})();

const listFiles = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    if (ignoreNames.has(entry.name)) return [];
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return listFiles(fullPath);
    }
    return [fullPath];
  });
};

const publicFiles = listFiles(publicDir);

const makeTokens = (filePath) => {
  const rel = path.relative(publicDir, filePath).split(path.sep).join("/");
  const webPath = `/${rel}`;
  return [webPath, rel, path.basename(rel)];
};

const textFilesCache = (() => {
  if (hasRipgrep) return null;
  const textExt = new Set([
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".json",
    ".css",
    ".scss",
    ".md",
    ".html",
    ".mjs",
    ".cjs",
  ]);
  const files = [];
  for (const root of searchRoots) {
    if (!fs.existsSync(root)) continue;
    const stack = [root];
    while (stack.length) {
      const current = stack.pop();
      const stats = fs.statSync(current);
      if (stats.isDirectory()) {
        const children = fs.readdirSync(current);
        for (const child of children) {
          if (ignoreNames.has(child)) continue;
          stack.push(path.join(current, child));
        }
      } else if (textExt.has(path.extname(current))) {
        try {
          files.push(fs.readFileSync(current, "utf8"));
        } catch {
          // skip unreadable file
        }
      }
    }
  }
  return files.join("\n");
})();

const isReferenced = (tokens) => {
  if (hasRipgrep) {
    for (const token of tokens) {
      if (!token) continue;
      const res = spawnSync(
        "rg",
        ["--fixed-strings", "--quiet", "--glob", "*", token, ...searchRoots],
        { stdio: "ignore" },
      );
      if (res.status === 0) return true;
    }
    return false;
  }

  if (!textFilesCache) return false;
  return tokens.some((token) => token && textFilesCache.includes(token));
};

const unused = [];

for (const file of publicFiles) {
  const tokens = makeTokens(file);
  if (!isReferenced(tokens)) {
    unused.push(file);
  }
}

const toHuman = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB"];
  let size = bytes / 1024;
  let unit = 0;
  while (size >= 1024 && unit < units.length - 1) {
    size /= 1024;
    unit++;
  }
  return `${size.toFixed(1)} ${units[unit]}`;
};

console.log(`Scanned ${publicFiles.length} file(s) in public/.`);

if (!unused.length) {
  console.log("No unused assets found.");
  process.exit(0);
}

console.log("\nUnused assets:");
let totalSize = 0;
for (const file of unused) {
  const size = fs.statSync(file).size;
  totalSize += size;
  console.log(`- ${path.relative(projectRoot, file)} (${toHuman(size)})`);
}
console.log(`Total candidate size: ${toHuman(totalSize)}`);

if (!shouldDelete) {
  console.log("\nDry run only. Re-run with --delete to remove these files.");
  process.exit(0);
}

const prompt = async (question) => {
  process.stdout.write(question);
  return new Promise((resolve) => {
    const onData = (data) => {
      process.stdin.pause();
      resolve(String(data).trim().toLowerCase());
    };
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    process.stdin.once("data", onData);
  });
};

const confirmDeletion = async () => {
  if (forceDelete) return true;
  const answer = await prompt(
    "\nDelete all unused assets listed above? (y/N): ",
  );
  return answer === "y" || answer === "yes";
};

const run = async () => {
  const confirmed = await confirmDeletion();
  if (!confirmed) {
    console.log("Aborted. No files were deleted.");
    process.exit(0);
  }

  let removed = 0;
  for (const file of unused) {
    if (!file.startsWith(publicDir)) continue; // extra safety
    fs.rmSync(file, { force: true });
    removed++;
  }

  console.log(`Removed ${removed} file(s) from public/.`);
};

run();
