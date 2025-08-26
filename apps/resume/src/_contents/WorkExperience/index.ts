import { BulletListProps } from "@repo/ui";
import path from "node:path";
import sample from "./sample.data.json";
import { readJsonIfExists } from "../_loader/loader";

export interface Company {
  name: string;
  position: string;
  startDate: string;
  endDate?: string;
  duration?: string;
  description: string;
  experience: BulletListProps[];
}

export interface WorkExperienceData {
  list: Company[];
}

export async function loadWorkExperienceData(): Promise<WorkExperienceData> {
  const repoRoot = process.cwd();
  const dataPath = path.join(
    repoRoot,
    "src",
    "_contents",
    "WorkExperience",
    "data.json"
  );

  const real = await readJsonIfExists<WorkExperienceData>(dataPath);
  return real ?? (sample as WorkExperienceData);
}
