import { BulletListProps } from "@repo/ui";
import path from "node:path";
import sample from "./sample.data.json";
import { readJsonIfExists } from "../_loader/loader";

export interface ActivityData {
  list: {
    title: string;
    description: string;
    link?: string;
    startDate: string;
    endDate?: string;
    experience: BulletListProps[];
  }[];
}

export async function loadActivityData(): Promise<ActivityData> {
  const repoRoot = process.cwd();
  const dataPath = path.join(
    repoRoot,
    "src",
    "_contents",
    "Activity",
    "data.json"
  );

  const real = await readJsonIfExists<ActivityData>(dataPath);
  return real ?? (sample as ActivityData);
}
