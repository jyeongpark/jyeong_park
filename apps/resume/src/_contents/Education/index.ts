import { BulletListProps } from "@repo/ui";
import { loadWithFallback } from "../_loader/loader";

export interface EducationData {
  list: {
    title: string;
    startDate: string;
    endDate?: string;
    experience: BulletListProps[];
  }[];
}

export async function loadEducationData(): Promise<EducationData> {
  return loadWithFallback<EducationData>(
    // real
    async () => {
      const mod = await import("./data.json");
      const data = mod.default satisfies EducationData;
      return data;
    },
    // sample
    async () => {
      const mod = await import("./sample.data.json");
      const data = mod.default satisfies EducationData;
      return data;
    }
  );
}
