import { Sex } from "@/types/generated/graphql";
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

export const signUpSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\W_]{6,}$/, {
      message: "Password must contain at least one letter and one number",
    }),
});

export type TSignUpFormData = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  identifier: z.string().min(1, { message: "Username or email is required" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type TSignInFormData = z.infer<typeof signInSchema>;

export const createProfileSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  nickName: z.string().optional(),
  coverPhoto: z.string().optional(),
  profilePhoto: z.string().optional(),
  bio: z.string().optional(),
  sex: z.nativeEnum(Sex, { message: "Sex must be MALE, FEMALE, or OTHER" }),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message:
      "Date of birth must be a valid date string in the format YYYY-MM-DD",
  }),
  website: z.string().optional(),
  address: z.string().optional(),
});

export type TCreateProfileFormData = z.infer<typeof createProfileSchema>;
