import path from "node:path";
import sample from "./sample.data.json";
import { readJsonIfExists } from "../_loader/loader";

export interface ContactData {
  [key: string]: { link?: string; value: string };
}

export async function loadContactData(): Promise<ContactData> {
  const repoRoot = process.cwd();
  const dataPath = path.join(
    repoRoot,
    "src",
    "_contents",
    "Contact",
    "data.json"
  );

  const real = await readJsonIfExists<ContactData>(dataPath);
  return real ?? (sample as ContactData);
}
