import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
  args: { text: "Heading", color: "primary", size: "lg" },
  argTypes: {
    color: {
      description: "색상 종류",
      control: { type: "radio" },
      options: ["primary", "default"],
      table: {
        type: { summary: "primary | default" },
      },
    },
    size: {
      description: "크기 종류",
      control: { type: "radio" },
      options: ["lg", "xl"],
      table: {
        type: { summary: "lg | xl" },
      },
    },
  },
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryColor: Story = {
  args: {
    color: "primary",
    size: "lg",
    text: "제목",
  },
  argTypes: {
    color: { control: false }, // color는 수정 못하게
  },
};

export const DefaultColor: Story = {
  args: {
    color: "default",
    size: "lg",
    text: "제목",
  },
  argTypes: {
    color: { control: false }, // color는 수정 못하게
  },
};

export const WithAccent: Story = {
  args: {
    color: "default",
    size: "lg",
    text: "제목 <strong>강조</strong>",
  },
  argTypes: {
    text: {
      control: { type: "radio" },
      options: [
        "제목 <em>강조</em>",
        "제목 <strong>강조</strong>",
        "제목 <u>강조</u>",
        "제목 <a href='https://www.naver.com'>강조</a>",
      ], // 고정된 후보만
    },
  },
};
