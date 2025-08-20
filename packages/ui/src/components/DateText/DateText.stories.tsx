import type { Meta, StoryObj } from "@storybook/react";
import { DateText } from "./DateText";

const meta = {
  title: "Components/DateText",
  component: DateText,
  args: { startDate: "2021.01", endDate: "2022.01", size: "sm" },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md"],
    },
    startDate: {
      control: { type: "text" },
    },
    endDate: {
      description: "종료 날짜",
      control: {
        type: "radio",
      },
      options: ["2022.01", "2022년 말", undefined],
    },
  },
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof DateText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const NoEndDate: Story = {
  args: { endDate: undefined },
};
