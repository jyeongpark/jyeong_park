import React from "react";
import { HeadingRoot } from "./Heading.style";

export type HeadingProps = React.HTMLAttributes<HTMLDivElement> & {
  color: "primary" | "default";
  size: "lg" | "xl";
  text: string;
};

export const Heading = ({ color, size, text, ...rest }: HeadingProps) => {
  return (
    <HeadingRoot
      data-cy="Heading"
      $color={color}
      $size={size}
      dangerouslySetInnerHTML={{ __html: text }}
      {...rest}
    ></HeadingRoot>
  );
};
