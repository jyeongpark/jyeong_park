import { loadWithFallback } from "../_loader/loader";

export interface ContactData {
  [key: string]: { link?: string; value: string };
}

export async function loadContactData(): Promise<ContactData> {
  return loadWithFallback<ContactData>(
    // real
    async () => {
      const mod = await import("./data.json");
      const data = mod.default satisfies ContactData;
      return data;
    },
    // sample
    async () => {
      const mod = await import("./sample.data.json");
      const data = mod.default satisfies ContactData;
      return data;
    }
  );
}
