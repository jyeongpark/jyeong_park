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
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  & > mark {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.fg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
