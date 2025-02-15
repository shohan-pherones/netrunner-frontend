/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import OtpInput from "./OtpInput";

type MockFormData = {
  otp: string;
};

const meta: Meta<typeof OtpInput<MockFormData>> = {
  title: "Components/OtpInput",
  component: OtpInput,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "The label for the OTP input field",
    },
    name: {
      control: { type: "text" },
      description:
        "The name of the OTP input field (used for form registration)",
    },
    length: {
      control: { type: "number" },
      description: "The number of OTP digits",
    },
    error: {
      control: { type: "object" },
      description: "Error object from react-hook-form",
    },
  },
};

export default meta;

type Story = StoryObj<typeof OtpInput<MockFormData>>;

export const Default: Story = {
  render: (args) => {
    const { register, setValue } = useForm<MockFormData>();
    return (
      <OtpInput {...args} register={register} setValue={setValue} name="otp" />
    );
  },
  args: {
    label: "OTP",
    length: 6,
  },
};

export const WithError: Story = {
  render: (args) => {
    const { register, setValue } = useForm<MockFormData>();
    return (
      <OtpInput {...args} register={register} setValue={setValue} name="otp" />
    );
  },
  args: {
    label: "OTP",
    length: 6,
    error: {
      message: "OTP must be 6 digits",
      type: "validate",
    },
  },
};
