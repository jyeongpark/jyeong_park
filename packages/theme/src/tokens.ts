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
  radii: { md: "12px", lg: "16px" },
  spacing: (n: number) => `${4 * n}px`,
  fontSize: {
    xl: "24px",
    lg: "20px",
    md: "16px",
    sm: "14px",
    xs: "12px",
  },
  fontWeight: {
    bold: 700,
    medium: 500,
    regular: 400,
  },
};
export type Tokens = typeof tokens;
