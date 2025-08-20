import React from "react";
import { LinkRoot } from "./Link.style";

export type LinkFontSize = "sm" | "md" | "lg";
export type LinkFontWeight = "bold" | "medium";

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  size: LinkFontSize;
  fontWeight: LinkFontWeight;
  text: string;
  href: string;
};

const ExternalLinkIcon: React.FC<
  React.SVGProps<SVGSVGElement> & { strokeWidth?: number }
> = ({ strokeWidth = 2, ...props }) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M13 6L15 4C16 3 18 3 19 4L20 5C21 6 21 8 20 9L15 14C14 15 12 15 11 14M11 18L9 20C8 21 6 21 5 20L4 19C3 18 3 16 4 15L9 10C10 9 12 9 13 10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const Link = ({ size, fontWeight, text, href, ...rest }: LinkProps) => {
  const iconSize = size === "sm" ? 14 : size === "md" ? 16 : 20;
  return (
    <LinkRoot
      data-cy="Link"
      $size={size}
      $fontWeight={fontWeight}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      <ExternalLinkIcon
        width={iconSize}
        height={iconSize}
        strokeWidth={fontWeight === "bold" ? 2.5 : 2}
      />
      <span>{text}</span>
    </LinkRoot>
  );
};
