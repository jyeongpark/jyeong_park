import styled from "@emotion/styled";

export const DescriptionRoot = styled.p<{
  $size: "sm" | "md" | "lg";
  $fontWeight: "bold" | "medium" | "regular";
}>`
  display: flex;
  color: ${({ theme }) => theme.color.text};
  white-space: pre-wrap;
  font-size: ${({ $size, theme }) =>
    $size === "sm"
      ? theme.fontSize.sm
      : $size === "md"
        ? theme.fontSize.md
        : theme.fontSize.lg};
  font-weight: ${({ $fontWeight, theme }) =>
    $fontWeight === "bold"
      ? theme.fontWeight.bold
      : $fontWeight === "medium"
        ? theme.fontWeight.medium
        : theme.fontWeight.regular};

  & > mark {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.markText};
    font-weight: ${({ $fontWeight, theme }) =>
      $fontWeight === "bold"
        ? theme.fontWeight.bold
        : $fontWeight === "medium"
          ? theme.fontWeight.medium
          : theme.fontWeight.regular};
  }
`;
