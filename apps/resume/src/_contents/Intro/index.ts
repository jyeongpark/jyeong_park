import path from "node:path";
import sample from "./sample.data.json";
import { readJsonIfExists } from "../_loader/loader";

export interface IntroData {
  title: string;
  description: string;
}

export async function loadIntroData(): Promise<IntroData> {
  const repoRoot = process.cwd();
  const dataPath = path.join(
    repoRoot,
    "src",
    "_contents",
    "Intro",
    "data.json"
  );

  const real = await readJsonIfExists<IntroData>(dataPath);
  return real ?? (sample as IntroData);
}
