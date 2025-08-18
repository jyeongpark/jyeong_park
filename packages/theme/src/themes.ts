import type { Tokens } from "./tokens";

export type ThemeMode = "light" | "dark";
export interface AppTheme extends Tokens {
  mode: ThemeMode;
}

export const lightTheme = (t: Tokens): AppTheme => ({
  ...t,
  mode: "light",
  color: {
    ...t.color,
    fg: "#111827",
    bgLight: t.color.bgLight,
    bgDark: t.color.bgDark,
  },
});

export const darkTheme = (t: Tokens): AppTheme => ({
  ...t,
  mode: "dark",
  color: {
    ...t.color,
    fg: "#f9fafb",
    bgLight: t.color.bgLight,
    bgDark: t.color.bgDark,
  },
});
