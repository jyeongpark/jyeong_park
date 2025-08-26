import { loadWithFallback } from "../_loader/loader";

export interface IntroData {
  title: string;
  description: string;
}

export async function loadIntroData(): Promise<IntroData> {
  return loadWithFallback<IntroData>(
    // real
    async () => {
      const mod = await import("./data.json");
      const data = mod.default satisfies IntroData; // 컴파일타임 검증
      return data;
    },
    // sample
    async () => {
      const mod = await import("./sample.data.json");
      const data = mod.default satisfies IntroData;
      return data;
    }
  );
}
