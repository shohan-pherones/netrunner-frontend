import type { Meta, StoryObj } from "@storybook/react";
import SectionTitle from "./SectionTitle";

const meta: Meta<typeof SectionTitle> = {
  title: "Components/SectionTitle",
  component: SectionTitle,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "The main title of the section",
    },
    subtitle: {
      control: { type: "text" },
      description: "The optional subtitle of the section",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {
  args: {
    title: "Section Title",
  },
};

export const WithSubtitle: Story = {
  args: {
    title: "Section Title",
    subtitle: "This is a subtitle for the section",
  },
};

export const CustomClassName: Story = {
  args: {
    title: "Section Title",
    subtitle: "This is a subtitle for the section",
    className: "text-center",
  },
};
