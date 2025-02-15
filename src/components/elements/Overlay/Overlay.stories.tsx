import type { Meta, StoryObj } from "@storybook/react";
import Overlay from "./Overlay";

const meta: Meta<typeof Overlay> = {
  title: "Components/Overlay",
  component: Overlay,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "text" },
      description: "The background color of the overlay",
    },
    opacity: {
      control: { type: "text" },
      description: "The opacity of the overlay",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply",
    },
    zIndex: {
      control: { type: "text" },
      description: "The z-index of the overlay",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
  args: {
    color: "bg-black",
    opacity: "opacity-50",
    zIndex: "z-10",
  },
};

export const CustomColor: Story = {
  args: {
    color: "bg-blue-500",
    opacity: "opacity-70",
    zIndex: "z-20",
  },
};

export const CustomOpacity: Story = {
  args: {
    color: "bg-black",
    opacity: "opacity-30",
    zIndex: "z-10",
  },
};

export const CustomZIndex: Story = {
  args: {
    color: "bg-black",
    opacity: "opacity-50",
    zIndex: "z-50",
  },
};

export const CustomClassName: Story = {
  args: {
    color: "bg-black",
    opacity: "opacity-50",
    zIndex: "z-10",
    className: "rounded-lg",
  },
};
