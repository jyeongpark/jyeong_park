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
    text: "#111827",
  },
});

export const darkTheme = (t: Tokens): AppTheme => ({
  ...t,
  mode: "dark",
  color: {
    ...t.color,
    text: "#f9fafb",
  },
});
