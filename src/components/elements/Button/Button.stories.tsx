import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
    outline: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default Button",
    size: "md",
    color: "primary",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    color: "secondary",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    color: "danger",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    outline: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const CustomClassName: Story = {
  args: {
    children: "Custom Class Button",
    className: "custom-class",
  },
};
