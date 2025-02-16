import { GetMyProfileQuery } from "@/types/generated/graphql";

interface ProfileViewProps {
  data: GetMyProfileQuery;
}

const ProfileView: React.FC<ProfileViewProps> = ({ data }) => {
  return <section>Profile View</section>;
};

export default ProfileView;
