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
  return (
    <ThemeProvider theme={theme}>
      <style>{`
        body {
          max-width: 100vw;
          min-height: 100dvh;
        }
        *{
        box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
      `}</style>
      {children}
    </ThemeProvider>
  );
}
