import path from "node:path";
import sample from "./sample.data.json";
import { readJsonIfExists } from "../_loader/loader";

export interface SkillData {
  list: { title: string; skills: string[] }[];
}

export async function loadSkillData(): Promise<SkillData> {
  const repoRoot = process.cwd();
  const dataPath = path.join(
    repoRoot,
    "src",
    "_contents",
    "Skill",
    "data.json"
  );

  const real = await readJsonIfExists<SkillData>(dataPath);
  return real ?? (sample as SkillData);
}
