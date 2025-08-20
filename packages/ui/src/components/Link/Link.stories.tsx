import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta = {
  title: "Components/Link",
  component: Link,
  args: {
    text: "Link",
    href: "https://www.google.com",
    size: "sm",
    fontWeight: "bold",
  },
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
