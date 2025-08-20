import React from "react";
import { DescriptionRoot } from "./Description.style";

export type DescriptionProps = React.HTMLAttributes<HTMLDivElement> & {
  size: "sm" | "md" | "lg";
  text: string;
};

export const Description = ({ size, text, ...rest }: DescriptionProps) => {
  return (
    <DescriptionRoot
      data-cy="Description"
      $size={size}
      dangerouslySetInnerHTML={{ __html: text }}
      {...rest}
    />
  );
};
