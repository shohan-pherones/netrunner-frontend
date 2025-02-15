import type { Meta, StoryObj } from "@storybook/react";
import FullScreenVideo from "./FullScreenVideo";

const meta: Meta<typeof FullScreenVideo> = {
  title: "Components/FullScreenVideo",
  component: FullScreenVideo,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: { type: "text" },
      description: "The source URL of the video",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply",
    },
    zIndex: {
      control: { type: "text" },
      description: "The z-index of the video",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FullScreenVideo>;

export const Default: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    className: "",
    zIndex: "-z-50",
  },
};

export const CustomZIndex: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    zIndex: "z-10",
  },
};

export const CustomClassName: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    className: "brightness-50",
  },
};
