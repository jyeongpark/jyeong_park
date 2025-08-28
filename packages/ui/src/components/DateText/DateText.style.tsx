import styled from "@emotion/styled";

export const DateTextRoot = styled.div<{ $size: "sm" | "md" }>`
  display: flex;
  color: ${({ theme }) => theme.color.lightText};
  font-size: ${({ $size, theme }) =>
    $size === "sm" ? theme.fontSize.sm : theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  white-space: pre-wrap;
`;
