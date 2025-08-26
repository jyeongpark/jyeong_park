import { BulletListProps } from "@repo/ui";
import { loadWithFallback } from "../_loader/loader";

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
  return loadWithFallback<WorkExperienceData>(
    // real
    async () => {
      const mod = await import("./data.json");
      const data = mod.default satisfies WorkExperienceData; // 컴파일타임 검증
      return data;
    },
    // sample
    async () => {
      const mod = await import("./sample.data.json");
      const data = mod.default satisfies WorkExperienceData;
      return data;
    }
  );
}
