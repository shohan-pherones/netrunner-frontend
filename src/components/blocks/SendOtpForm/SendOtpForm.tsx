"use client";

import { Button, Input, SectionTitle } from "@/components/elements";
import OtpInput from "@/components/elements/OtpInput/OtpInput";
import { otpInputs, sendOtpInputs } from "@/constants";
import {
  otpSchema,
  sendOtpSchema,
  TOtpFormData,
  TSendOtpFormData,
} from "@/schemas";
import {
  useSendOtpMutation,
  useVerifyOtpMutation,
} from "@/types/generated/graphql";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SendOtpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSendOtpFormData>({
    resolver: zodResolver(sendOtpSchema),
  });
  const {
    register: registerForOtp,
    handleSubmit: handleSubmitForOtp,
    setValue: setOtpValue,
    formState: { errors: errorsForOtp },
  } = useForm<TOtpFormData>({
    resolver: zodResolver(otpSchema),
  });

  const [sendOtpMutation, { loading: sendOtpLoading }] = useSendOtpMutation();
  const [verifyOtpMutation, { loading: verifyOtpLoading }] =
    useVerifyOtpMutation();

  const [OTP, setOTP] = useState<{
    permission: boolean;
    verifiedEmail: string;
    code: string;
  }>({
    permission: false,
    verifiedEmail: "",
    code: "",
  });

  const onSubmit = async (data: TSendOtpFormData) => {
    try {
      const result = await sendOtpMutation({
        variables: data,
      });

      if (result.data?.sendOtp) {
        setOTP({ ...OTP, permission: true, verifiedEmail: data.email });
        toast.success("OTP sent successfully!");
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const onOtpSubmit = async (data: TOtpFormData) => {
    try {
      const result = await verifyOtpMutation({
        variables: { data: { otp: data.otp, email: OTP.verifiedEmail } },
      });

      if (result.data?.verifyOtp) {
        setOTP({ ...OTP, code: data.otp });
        toast.success("OTP verified successfully!");
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white min-w-80 p-10 rounded-2xl flex flex-col gap-5 items-center justify-center">
      <SectionTitle
        title={
          OTP.permission
            ? "Enter the OTP sent to your email"
            : "Create a netrunner account"
        }
      />

      {!OTP.permission && (
        <Fragment>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-3"
          >
            {sendOtpInputs.map((input) => (
              <Input<TSendOtpFormData>
                key={input.name}
                label={input.label}
                name={input.name}
                type={input.type}
                register={register}
                error={errors[input.name as keyof TSendOtpFormData]}
                placeholder={input.placeholder}
              />
            ))}
            <Button disabled={sendOtpLoading} type="submit" size="lg">
              {sendOtpLoading ? "Sending..." : "Send OTP"}
            </Button>
          </form>
          <div className="-mt-3">
            <p className="text-sm">
              Already have an account?{" "}
              <Link
                className="text-cyan-500 hover:text-cyan-600 transition-all"
                href="/sign-in"
              >
                Sign in
              </Link>
            </p>
          </div>
        </Fragment>
      )}

      {OTP.permission && (
        <Fragment>
          <form
            onSubmit={handleSubmitForOtp(onOtpSubmit)}
            className="w-full flex flex-col gap-3"
          >
            {otpInputs.map((input) => (
              <OtpInput<TOtpFormData>
                key={input.name}
                label={input.label}
                name={input.name}
                register={registerForOtp}
                setValue={setOtpValue}
                error={errorsForOtp[input.name as keyof TOtpFormData]}
                placeholder={input.placeholder}
                length={6}
              />
            ))}
            <Button disabled={verifyOtpLoading} type="submit" size="lg">
              {verifyOtpLoading ? "Verifying..." : "Verify OTP"}
            </Button>
          </form>
          <div className="-mt-3">
            <p className="text-sm">
              OTP expires in 5 minutes. Use it before it refreshes.
            </p>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default SendOtpForm;
