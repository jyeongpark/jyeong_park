import { ThemeProvider } from "@emotion/react";
import { useMemo } from "react";
import { tokens } from "./tokens";
import { lightTheme, darkTheme, type ThemeMode } from "./themes";

export function AppThemeProvider({
  mode = "light",
  children,
}: {
  mode?: ThemeMode;
  children: React.ReactNode;
}) {
  const theme = useMemo(
    () => (mode === "dark" ? darkTheme(tokens) : lightTheme(tokens)),
    [mode]
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
