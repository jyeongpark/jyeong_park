import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "./Section";

const meta = {
  title: "Components/Section",
  component: Section,
  args: {
    children: (
      <>
        <div className="space-4">Intro</div>
        <div className="space-4">Contact</div>
        <div className="space-6">Work Experience</div>
        <div className="divider" />
      </>
    ),
  },
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
