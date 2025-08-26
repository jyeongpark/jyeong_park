import { BulletListProps } from "@repo/ui";
import { loadWithFallback } from "../_loader/loader";

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
  return loadWithFallback<ActivityData>(
    // real
    async () => {
      const mod = await import("./data.json");
      const data = mod.default satisfies ActivityData;
      return data;
    },
    // sample
    async () => {
      const mod = await import("./sample.data.json");
      const data = mod.default satisfies ActivityData;
      return data;
    }
  );
}
