import { TOtpFormData, TSendOtpFormData } from "@/schemas";

export const sendOtpInputs: {
  label: string;
  name: keyof TSendOtpFormData;
  type: string;
  placeholder: string;
}[] = [
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
];

export const otpInputs: {
  label: string;
  name: keyof TOtpFormData;
  placeholder: string;
}[] = [
  {
    label: "OTP",
    name: "otp",
    placeholder: "Enter 6-digit OTP",
  },
];
