import { getRandomCoverPhoto, getRandomProfilePhoto } from "@/lib/utils";
import { GetMyProfileQuery } from "@/types/generated/graphql";
import { Globe, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProfileViewProps {
  data: GetMyProfileQuery;
}

const ProfileView: React.FC<ProfileViewProps> = ({ data }) => {
  return (
    <section className="flex flex-col gap-5">
      <figure className="aspect-[16/6] overflow-hidden -mx-20 -my-5">
        <Image
          src={data.getMyProfile.coverPhoto || getRandomCoverPhoto()}
          alt="Cover photo"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex items-end gap-5 -translate-y-10">
        <div className="flex items-center justify-center w-56 aspect-square rounded-[4rem] overflow-hidden bg-white flex-shrink-0">
          <figure className="w-52 aspect-square rounded-[4rem] overflow-hidden">
            <Image
              src={data.getMyProfile.profilePhoto || getRandomProfilePhoto()}
              alt="Profile photo"
              width={1280}
              height={720}
              priority
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
        <div>
          <h2 className="text-4xl font-medium">
            {data.getMyProfile.firstName} {data.getMyProfile.lastName}
            {data.getMyProfile.nickName && (
              <span className="ml-2 font-light">
                ({data.getMyProfile.nickName})
              </span>
            )}
          </h2>
          <p className="text-gray-500 mb-2">
            @{data.getMyProfile.user.username}
          </p>
          <p>{data.getMyProfile.bio}</p>
          {data.getMyProfile.address && (
            <p className="flex items-center gap-2">
              <span>
                <MapPin size={16} />
              </span>
              <span>{data.getMyProfile.address}</span>
            </p>
          )}
          {data.getMyProfile.website && (
            <p className="flex items-center gap-2">
              <span>
                <Globe size={16} />
              </span>
              <Link
                href={data.getMyProfile.website}
                target="_blank"
                className="text-cyan-500 hover:text-cyan-600 transition-all"
              >
                {data.getMyProfile.website}
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfileView;
