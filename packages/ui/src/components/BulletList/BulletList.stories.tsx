import type { Meta, StoryObj } from "@storybook/react";
import { BulletList } from "./BulletList";

const meta = {
  title: "Components/BulletList",
  component: BulletList,
  args: {
    title: {
      showBar: true,
      text: "제목입니다.",
    },
    items: [
      {
        label: "내용1",
        bullet: "dot",
        children: [
          { label: "내용2-1" },
          { label: "내용2-2" },
          { label: "내용2-3" },
        ],
      },
    ],
  },
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof BulletList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
export const DashMarker: Story = {
  args: {
    items: [{ label: "deps1", bullet: "dash", children: [{ label: "deps2" }] }],
  },
};
export const CustomMarker: Story = {
  args: {
    items: [
      {
        label: "내용1",
        bullet: "custom",
        customBullet: <span style={{ fontSize: 16 }}>★</span>,
        children: [
          { label: "내용2", bullet: "custom", customBullet: <span>#</span> },
        ],
      },
    ],
  },
};
export const NoTitle: Story = {
  args: {
    title: undefined,
  },
};
export const NoTitleBar: Story = {
  args: {
    title: {
      showBar: false,
      text: "제목입니다.",
    },
  },
};

export const BoldLabel: Story = {
  args: {
    items: [{ label: "<strong>내용1</strong>" }],
  },
};
