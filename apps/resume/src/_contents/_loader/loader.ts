// 로더. 실제 데이터 우선 로드, 실패 시 샘플 데이터 로드
export async function loadWithFallback<T>(
  realLoader: () => Promise<T>,
  sampleLoader: () => Promise<T>
): Promise<T> {
  try {
    return await realLoader();
  } catch {
    return await sampleLoader();
  }
}
