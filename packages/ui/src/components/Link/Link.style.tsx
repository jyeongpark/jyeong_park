import styled from "@emotion/styled";

export const LinkRoot = styled.a<{
  $size: "sm" | "md" | "lg";
  $fontWeight: "bold" | "medium" | "regular";
}>`
  display: flex;
  color: ${({ theme }) => theme.color.fg};
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
  text-decoration: underline;
  gap: ${({ theme }) => theme.spacing(0.5)};

  &:focus-visible {
    outline: 0.125rem solid ${({ theme }) => theme.color.primary};
    outline-offset: 0.125rem;
    border-radius: 0.25rem;
  }
`;
