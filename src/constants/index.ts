import { TOtpFormData, TSendOtpFormData, TSignUpFormData } from "@/schemas";
import { TInputs } from "@/types";

export const sendOtpInputs: TInputs<TSendOtpFormData>[] = [
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
];

export const otpInputs: TInputs<TOtpFormData>[] = [
  {
    label: "OTP",
    name: "otp",
    placeholder: "Enter 6-digit OTP",
  },
];

export const signUpInputs: TInputs<TSignUpFormData>[] = [
  {
    label: "Username",
    name: "username",
    placeholder: "Enter your username",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
];
