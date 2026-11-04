import fs from "node:fs";
import path from "node:path";

function listDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

export function resolvePublicAsset(baseName: string): string | null {
  const publicDir = path.join(process.cwd(), "public");
  const assetsDir = path.join(publicDir, "assets");

  const assetsFiles = listDir(assetsDir);
  const match = assetsFiles.find((file) => file.startsWith(baseName));
  if (match) return `/assets/${match}`;

  const publicFiles = listDir(publicDir);
  const rootMatch = publicFiles.find((file) => file.startsWith(baseName));
  if (rootMatch) return `/${rootMatch}`;

  return null;
}
