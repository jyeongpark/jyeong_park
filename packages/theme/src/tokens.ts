export const tokens = {
  color: {
    primary: "#facc15", // 메인 컬러
    accent: "#2563eb", // 메인 컬러 대비 강조 컬러
    text: "#111827", // 기본 텍스트
    lightText: "#6b7280", // 밝은 텍스트
    border: "#d9dadb", // 구분선
    markText: "#111827", // 메인 컬러 위에 들어갈 텍스트 컬러
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
