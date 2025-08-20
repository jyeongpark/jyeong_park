import type { Meta, StoryObj } from "@storybook/react";
import { Description } from "./Description";

const meta = {
  title: "Components/Description",
  component: Description,
  args: { text: "Description", size: "md" },
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Description>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithAccent: Story = {
  args: {
    size: "md",
    text: "내용 <strong>강조</strong>",
  },
  argTypes: {
    text: {
      control: { type: "radio" },
      options: [
        "내용 <em>강조</em>",
        "내용 <strong>강조</strong>",
        "내용 <u>강조</u>",
        "내용 <a href='https://www.naver.com'>강조</a>",
        "내용 <mark>강조</mark>",
      ], // 고정된 후보만
    },
  },
};
