import { loadWithFallback } from "../_loader/loader";

export interface SkillData {
  list: { title: string; skills: string[] }[];
}

export async function loadSkillData(): Promise<SkillData> {
  return loadWithFallback<SkillData>(
    // real
    async () => {
      const mod = await import("./data.json");
      const data = mod.default satisfies SkillData; // 컴파일타임 검증
      return data;
    },
    // sample
    async () => {
      const mod = await import("./sample.data.json");
      const data = mod.default satisfies SkillData;
      return data;
    }
  );
}
