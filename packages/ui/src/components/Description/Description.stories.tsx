import type { Meta, StoryObj } from "@storybook/react";
import { Description, DescriptionProps } from "./Description";

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

export const Default = (args: DescriptionProps) => {
  return <Description {...args} />;
};

export const WithAccent = (args: DescriptionProps) => {
  return <Description {...args} text="Description <strong>strong</strong>" />;
};
