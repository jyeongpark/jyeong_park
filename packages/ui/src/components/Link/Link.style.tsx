import styled from "@emotion/styled";
import { LinkFontSize, LinkFontWeight } from "./Link";

export const LinkRoot = styled.a<{
  $size: LinkFontSize;
  $fontWeight: LinkFontWeight;
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
    $fontWeight === "bold" ? theme.fontWeight.bold : theme.fontWeight.medium};
  text-decoration: underline;
  gap: ${({ theme }) => theme.spacing(0.5)};
  &:hover {
    scale: 1.05;
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;
