import { z } from "zod";

export const sendOtpSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type TSendOtpFormData = z.infer<typeof sendOtpSchema>;

export const otpSchema = z.object({
  otp: z
    .string()
    .min(6, "OTP must be exactly 6 digits")
    .max(6, "OTP must be exactly 6 digits")
    .regex(/^\d{6}$/, "OTP must be a 6-digit number"),
});

export type TOtpFormData = z.infer<typeof otpSchema>;
