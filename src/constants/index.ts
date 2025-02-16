import {
  TCreateProfileFormData,
  TOtpFormData,
  TSendOtpFormData,
  TSignInFormData,
  TSignUpFormData,
} from "@/schemas";
import { TInputs, TMenu } from "@/types";
import { Sex } from "@/types/generated/graphql";
import { Home, User } from "lucide-react";

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

export const signInInputs: TInputs<TSignInFormData>[] = [
  {
    label: "Username or Email",
    name: "identifier",
    placeholder: "Enter your username or email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
];

export const navMenus: TMenu[] = [
  { route: "/", label: "Home", icon: Home },
  { route: "/profile", label: "Profile", icon: User },
];

export const createProfileInputs: TInputs<TCreateProfileFormData>[] = [
  {
    label: "First Name",
    name: "firstName",
    placeholder: "Enter your first name",
  },
  {
    label: "Last Name",
    name: "lastName",
    placeholder: "Enter your last name",
  },
  {
    label: "Nickname",
    name: "nickName",
    placeholder: "Enter your nickname (optional)",
  },
  {
    label: "Cover Photo URL",
    name: "coverPhoto",
    type: "url",
    placeholder: "Enter a valid URL for your cover photo (optional)",
  },
  {
    label: "Profile Photo URL",
    name: "profilePhoto",
    type: "url",
    placeholder: "Enter a valid URL for your profile photo (optional)",
  },
  {
    label: "Bio",
    name: "bio",
    placeholder: "Tell us about yourself (optional)",
  },
  {
    label: "Sex",
    name: "sex",
    type: "select",
    placeholder: "Select your sex",
    options: Object.values(Sex),
  },
  {
    label: "Date of Birth",
    name: "dateOfBirth",
    type: "date",
    placeholder: "Enter your date of birth (YYYY-MM-DD)",
  },
  {
    label: "Website",
    name: "website",
    type: "url",
    placeholder: "Enter your website URL (optional)",
  },
];

export const coverPhotos = [
  "/images/cover-photo-placeholder-1.jpg",
  "/images/cover-photo-placeholder-2.jpg",
  "/images/cover-photo-placeholder-3.jpg",
];

export const profilePhotos = [
  "/images/profile-photo-placeholder-1.jpg",
  "/images/profile-photo-placeholder-2.jpg",
  "/images/profile-photo-placeholder-3.jpg",
];
