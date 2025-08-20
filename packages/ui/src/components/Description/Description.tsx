import React from "react";
import { DescriptionRoot } from "./Description.style";

export type DescriptionProps = React.HTMLAttributes<HTMLDivElement> & {
  size: "sm" | "md" | "lg";
  fontWeight: "bold" | "medium" | "regular";
  text: string;
};

export const Description = ({
  size,
  fontWeight,
  text,
  ...rest
}: DescriptionProps) => {
  return (
    <DescriptionRoot
      data-cy="Description"
      $size={size}
      $fontWeight={fontWeight}
      dangerouslySetInnerHTML={{ __html: text }}
      {...rest}
    />
  );
};
