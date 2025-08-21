export const tokens = {
  color: {
    primary: "#facc15", // 메인 옐로우
    primaryHover: "#eab308", // hover 시 골드 느낌
    accent: "#2563eb", // 블루 (대비 강조)
    accentHover: "#1d4ed8",
    fg: "#111827", // 진한 글자
    fgSecondary: "#6b7280", // 중간 글자
    fgLight: "#d9dadb", // 밝은 글자
    fgOnPrimary: "#1c1917", // 옐로우 위 글자 (가독성 위해 다크)
    bgLight: "#ffffff", // 밝은 배경
    bgDark: "#0b1020", // 어두운 배경
  },
  radii: { md: "0.75rem", lg: "1rem" }, // 12px, 16px
  spacing: (n: number) => `${0.25 * n}rem`, // 1 = 0.25rem (4px)
  fontSize: {
    xl: "2rem", // 32px
    lg: "1.25rem", // 20px
    md: "1rem", // 16px
    sm: "0.875rem", // 14px
    xs: "0.75rem", // 12px
  },
  fontWeight: {
    bold: 700,
    medium: 500,
    regular: 400,
  },
};
export type Tokens = typeof tokens;
