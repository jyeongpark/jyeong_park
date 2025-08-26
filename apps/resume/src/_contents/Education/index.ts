import { BulletListProps } from "@repo/ui";
import path from "node:path";
import sample from "./sample.data.json";
import { readJsonIfExists } from "../_loader/loader";

export interface EducationData {
  list: {
    title: string;
    startDate: string;
    endDate?: string;
    experience: BulletListProps[];
  }[];
}

export async function loadEducationData(): Promise<EducationData> {
  const repoRoot = process.cwd();
  const dataPath = path.join(
    repoRoot,
    "src",
    "_contents",
    "Education",
    "data.json"
  );

  const real = await readJsonIfExists<EducationData>(dataPath);
  return real ?? (sample as EducationData);
}
