import styled from "@emotion/styled";

export const DescriptionRoot = styled.p<{ $size: "sm" | "md" | "lg" }>`
  display: flex;
  color: ${({ theme }) => theme.color.fg};
  white-space: pre-wrap;
  font-size: ${({ $size, theme }) =>
    $size === "sm"
      ? theme.fontSize.sm
      : $size === "md"
        ? theme.fontSize.md
        : theme.fontSize.lg};
`;
