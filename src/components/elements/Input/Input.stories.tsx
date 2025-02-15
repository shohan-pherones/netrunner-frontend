/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import Input from "./Input";

type MockFormData = {
  username: string;
  password: string;
  email: string;
};

const meta: Meta<typeof Input<MockFormData>> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "The label for the input field",
    },
    name: {
      control: { type: "text" },
      description: "The name of the input field (used for form registration)",
    },
    type: {
      control: { type: "select" },
      options: ["text", "password", "email"],
      description: "The type of the input field",
    },
    placeholder: {
      control: { type: "text" },
      description: "The placeholder text for the input field",
    },
    error: {
      control: { type: "object" },
      description: "Error object from react-hook-form",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input<MockFormData>>;

export const Default: Story = {
  render: (args) => {
    const { register } = useForm<MockFormData>();
    return <Input {...args} register={register} />;
  },
  args: {
    label: "Username",
    name: "username",
    type: "text",
    placeholder: "Enter your username",
  },
};

export const Password: Story = {
  render: (args) => {
    const { register } = useForm<MockFormData>();
    return <Input {...args} register={register} />;
  },
  args: {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
};

export const WithError: Story = {
  render: (args) => {
    const { register } = useForm<MockFormData>();
    return <Input {...args} register={register} />;
  },
  args: {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    error: {
      message: "This field is required",
      type: "required",
    },
  },
};
