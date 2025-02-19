import { Button } from "@/components/elements";
import { Clapperboard, Image as ImageIcon, Smile } from "lucide-react";
import Image from "next/image";

const CreatePostForm = () => {
  return (
    <div className="flex items-start gap-2">
      <figure className="w-10 aspect-square rounded-full overflow-hidden flex-shrink-0">
        <Image
          src="https://images.pexels.com/photos/30244799/pexels-photo-30244799/free-photo-of-vibrant-portrait-in-dramatic-red-and-blue-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={256}
          height={256}
          priority
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="w-full flex flex-col gap-2">
        <textarea
          rows={3}
          placeholder="What is happening?!"
          className="w-full outline-0 border rounded-lg p-2 resize-none"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-500">
            <button>
              <ImageIcon />
            </button>
            <button>
              <Clapperboard />
            </button>
            <button>
              <Smile />
            </button>
          </div>
          <Button size="sm">Post</Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostForm;
