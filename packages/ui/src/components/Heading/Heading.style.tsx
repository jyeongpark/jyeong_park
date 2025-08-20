import styled from "@emotion/styled";

export const HeadingRoot = styled.div<{
  $color: "primary" | "default";
  $size: "lg" | "xl";
}>`
  color: ${({ $color, theme }) =>
    $color === "primary" ? theme.color.primary : theme.color.fg};
  display: flex;
  align-items: center;
  font-size: ${({ $size, theme }) =>
    $size === "lg" ? theme.fontSize.lg : theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  white-space: pre-wrap;
`;
