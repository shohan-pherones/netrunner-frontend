"use client";

import { CreateProfileForm } from "@/components/blocks";
import { Loading } from "@/components/elements";
import { useGetMyProfileQuery } from "@/types/generated/graphql";

const ProfilePage = () => {
  const { data: profile, loading } = useGetMyProfileQuery();

  return (
    <div className="px-20 py-5">
      {loading && <Loading />}
      {!loading && profile && <div>Profile</div>}
      {!loading && !profile && <CreateProfileForm />}
    </div>
  );
};

export default ProfilePage;
