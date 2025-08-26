import React from "react";
import { DateTextRoot } from "./DateText.style";

export type DateTextProps = React.HTMLAttributes<HTMLDivElement> & {
  startDate: string;
  endDate?: string;
  duration?: string;
  size?: "sm" | "md";
};

export const DateText = ({
  startDate,
  endDate = "현재",
  duration,
  size = "sm",
  ...rest
}: DateTextProps) => {
  return (
    <DateTextRoot data-cy="DateText" $size={size} {...rest}>
      ({startDate} - {endDate}
      {duration ? ` / ${duration}` : ""})
    </DateTextRoot>
  );
};
