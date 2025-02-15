import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
};

export const OnSignUpPage: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/sign-up",
      },
    },
  },
};

export const OnSignInPage: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/sign-in",
      },
    },
  },
};
