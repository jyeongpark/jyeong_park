import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const HeadingRoot = styled.div<{
  $color: "primary" | "default";
  $size: "lg" | "xl";
  $textDecoration?: "underline" | "none";
}>`
  color: ${({ $color, theme }) =>
    $color === "primary" ? theme.color.primary : theme.color.fg};
  display: flex;
  align-items: center;
  font-size: ${({ $size, theme }) =>
    $size === "lg" ? theme.fontSize.lg : theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  white-space: pre-wrap;
  flex-wrap: wrap;

  ${({ $textDecoration, theme, $color }) =>
    $textDecoration &&
    css`
      border-bottom: 0.125rem solid
        ${$color === "primary" ? theme.color.primary : theme.color.fg};
      width: 100%;
      margin-bottom: ${theme.spacing(1)};
    `}

  & > mark {
    background-color: ${({ $color, theme }) =>
      $color === "primary" ? theme.color.accent : theme.color.primary};
    color: ${({ $color, theme }) =>
      $color === "primary" ? theme.color.primary : theme.color.fg};
  }
`;
