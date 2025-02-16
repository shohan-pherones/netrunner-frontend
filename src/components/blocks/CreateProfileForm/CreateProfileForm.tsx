"use client";

import { Button, Input, SectionTitle } from "@/components/elements";
import { createProfileInputs } from "@/constants";
import { createProfileSchema, TCreateProfileFormData } from "@/schemas";
import { useCreateProfileMutation } from "@/types/generated/graphql";
import { ApolloError } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CreateProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateProfileFormData>({
    resolver: zodResolver(createProfileSchema),
  });

  const [createProfileMutation, { loading }] = useCreateProfileMutation();

  const onSubmit = async (data: TCreateProfileFormData) => {
    try {
      const { data: resultData } = await createProfileMutation({
        variables: {
          createProfileInput: data,
        },
      });

      if (resultData?.createProfile) {
        window.location.reload();
        toast.success("Profile created successfully!");
      } else {
        toast.error("Profile creation failed. Please try again.");
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error(error.message);
      } else {
        console.error("Error creating profile:", error);
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <figure className="order-last md:order-first self-center">
        <Image
          src="/images/create-profile.jpg"
          alt="A young woman using a laptop and smartphone to create her online profile"
          width={1280}
          height={720}
          priority
        />
      </figure>
      <div className="flex flex-col gap-5">
        <SectionTitle
          title="Create your netrunner profile"
          subtitle="Personalize your profile to reflect your unique identity and skills as a netrunner."
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-3"
        >
          {createProfileInputs.map((input) => (
            <Input<TCreateProfileFormData>
              key={input.name}
              label={input.label}
              name={input.name}
              type={input.type}
              register={register}
              error={errors[input.name as keyof TCreateProfileFormData]}
              placeholder={input.placeholder}
              options={input.options}
            />
          ))}
          <Button disabled={loading} type="submit" size="lg">
            {loading ? "Creating profile..." : "Create Profile"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CreateProfileForm;
