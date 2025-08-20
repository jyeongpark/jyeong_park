import React from "react";
import { SectionRoot } from "./Section.style";

export type SectionProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Section = ({ children, ...rest }: SectionProps) => {
  return (
    <SectionRoot data-cy="Section" {...rest}>
      {children}
    </SectionRoot>
  );
};
