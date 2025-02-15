import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    inverted: {
      control: { type: "boolean" },
      description: "Whether the logo should use inverted colors",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    inverted: false,
  },
};

export const Inverted: Story = {
  args: {
    inverted: true,
  },
};
