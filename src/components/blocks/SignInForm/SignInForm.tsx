"use client";

import { Button, Input, SectionTitle } from "@/components/elements";
import { signInInputs } from "@/constants";
import useAuth from "@/hooks/auth/useAuth";
import { signInSchema, TSignInFormData } from "@/schemas";
import { useSignInMutation } from "@/types/generated/graphql";
import { ApolloError } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const [signInMutation, { loading }] = useSignInMutation();

  const router = useRouter();

  const { setToken } = useAuth();

  const onSubmit = async (data: TSignInFormData) => {
    try {
      const { data: resultData } = await signInMutation({
        variables: { data },
      });

      if (resultData?.signIn) {
        setToken(resultData.signIn.token);
        router.push("/");
        toast.success("Sign in successful! Welcome back.");
      } else {
        toast.error("Sign in failed. Please try again.");
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error(error.message);
      } else {
        console.error("Error signing in:", error);
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white min-w-80 max-w-xl p-10 rounded-2xl flex flex-col gap-5 items-center justify-center">
      <SectionTitle title="Login to your account" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3"
      >
        {signInInputs.map((input) => (
          <Input<TSignInFormData>
            key={input.name}
            label={input.label}
            name={input.name}
            type={input.type}
            register={register}
            error={errors[input.name as keyof TSignInFormData]}
            placeholder={input.placeholder}
          />
        ))}
        <Button disabled={loading} type="submit" size="lg">
          {loading ? "Signing in..." : "Sign In"}
        </Button>
      </form>
      <div className="-mt-3">
        <p className="text-sm">
          Don&apos;t have an account?{" "}
          <Link
            className="text-cyan-500 hover:text-cyan-600 transition-all"
            href="/sign-up"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
