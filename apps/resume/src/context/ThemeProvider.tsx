"use client";

import { AppThemeProvider } from "@repo/theme";
import styled from "@emotion/styled";
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppThemeProvider mode="light">
      <ResumeLayout>{children}</ResumeLayout>
    </AppThemeProvider>
  );
}

const ResumeLayout = styled.main`
  height: 100vh;
  padding: 2rem;

  & > section {
    margin-block-end: ${({ theme }) => theme.spacing(4)};
  }
`;
