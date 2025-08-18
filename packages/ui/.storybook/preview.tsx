import React from "react";
import type { Preview } from "@storybook/react-vite";
import { AppThemeProvider } from "@repo/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (Story, context) => {
      const mode = (context.globals.theme === "dark" ? "dark" : "light") as
        | "light"
        | "dark";
      return (
        <AppThemeProvider mode={mode}>
          <Story />
        </AppThemeProvider>
      );
    },
  ],
};

export default preview;
