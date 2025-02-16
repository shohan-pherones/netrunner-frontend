"use client";

import { CreateProfileForm, ProfileView } from "@/components/blocks";
import { Loading } from "@/components/elements";
import { useGetMyProfileQuery } from "@/types/generated/graphql";

const ProfilePage = () => {
  const { data, loading } = useGetMyProfileQuery();

  return (
    <div className="mx-20 my-5">
      {loading && <Loading />}
      {!loading && data && <ProfileView data={data} />}
      {!loading && !data && <CreateProfileForm />}
    </div>
  );
};

export default ProfilePage;
