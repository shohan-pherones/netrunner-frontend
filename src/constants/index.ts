import { TSendOtpFormData } from "@/schemas";

export const sendOtpInputs: {
  label: string;
  name: keyof TSendOtpFormData;
  type?: string;
  placeholder?: string;
}[] = [
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
];
