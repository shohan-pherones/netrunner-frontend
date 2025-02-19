import { CreatePostForm } from "@/components/blocks";
import { PostCard } from "@/components/partials";

const HomePage = () => {
  return (
    <div className="grid grid-cols-[25vw_auto_25vw] gap-10">
      <aside>Left Panel</aside>

      <div className="flex flex-col gap-5">
        <div>Stories</div>

        <CreatePostForm />

        <div className="flex flex-col gap-5">
          <PostCard />
        </div>
      </div>

      <aside>Right Panel</aside>
    </div>
  );
};

export default HomePage;
