import React from "react";
import { HeadingRoot } from "./Heading.style";

export type HeadingProps = React.HTMLAttributes<HTMLDivElement> & {
  color: "primary" | "default";
  size: "lg" | "xl";
  text: string;
  textDecoration?: "underline";
};

export const Heading = ({
  color,
  size,
  text,
  textDecoration,
  ...rest
}: HeadingProps) => {
  return (
    <HeadingRoot
      data-cy="Heading"
      $color={color}
      $size={size}
      $textDecoration={textDecoration}
      dangerouslySetInnerHTML={{ __html: text }}
      {...rest}
    ></HeadingRoot>
  );
};
