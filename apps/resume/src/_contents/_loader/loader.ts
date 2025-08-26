import { promises as fs } from "node:fs";

// 로더. 실제 데이터 우선 로드, 실패 시 샘플 데이터 로드
function isNodeErrnoException(err: unknown): err is NodeJS.ErrnoException {
  return typeof err === "object" && err !== null && "code" in err;
}

export async function readJsonIfExists<T>(absPath: string): Promise<T | null> {
  try {
    const content = await fs.readFile(absPath, "utf-8");
    return JSON.parse(content) as T;
  } catch (err: unknown) {
    if (isNodeErrnoException(err) && err.code === "ENOENT") return null;
    throw err;
  }
}
