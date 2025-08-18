export const tokens = {
  color: {
    primary: "#facc15", // 메인 옐로우
    primaryHover: "#eab308", // hover 시 골드 느낌
    accent: "#2563eb", // 블루 (대비 강조)
    accentHover: "#1d4ed8",
    fg: "#111827", // 진한 글자
    fgOnPrimary: "#1c1917", // 옐로우 위 글자 (가독성 위해 다크)
    bgLight: "#ffffff", // 밝은 배경
    bgDark: "#0b1020", // 어두운 배경
  },
  radii: { md: 12, lg: 16 },
  spacing: (n: number) => `${4 * n}px`,
};
export type Tokens = typeof tokens;
