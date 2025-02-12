"use client";

import { Button, Input, SectionTitle } from "@/components/elements";
import { sendOtpInputs } from "@/constants";
import { sendOtpSchema, TSendOtpFormData } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

const SendOtpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSendOtpFormData>({
    resolver: zodResolver(sendOtpSchema),
  });

  const onSubmit = (data: TSendOtpFormData) => {
    console.log(data);
  };

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white min-w-80 p-10 rounded-2xl flex flex-col gap-5 items-center justify-center">
      <SectionTitle title="Create a netrunner account" />
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
        <Button type="submit" size="lg">
          Send OTP
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
    </div>
  );
};

export default SendOtpForm;
