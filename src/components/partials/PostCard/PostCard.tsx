import { Bookmark, Ellipsis, Heart, MessageCircle, Send } from "lucide-react";
import Image from "next/image";

const PostCard = () => {
  return (
    <article className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <figure className="w-10 aspect-square rounded-full overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/30244799/pexels-photo-30244799/free-photo-of-vibrant-portrait-in-dramatic-red-and-blue-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={256}
              height={256}
              priority
              className="w-full h-full object-cover"
            />
          </figure>
          <div>
            <p className="font-semibold">John Doe</p>
            <p className="text-xs text-gray-500 -mt-1">2m ago</p>
          </div>
        </div>
        <button>
          <Ellipsis size={16} />
        </button>
      </div>
      <figure className="aspect-square rounded-lg overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/30694632/pexels-photo-30694632/free-photo-of-charming-beachfront-eatery-in-malibu-california.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={1280}
          height={720}
          priority
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-1">
            <Heart />
            <span>25</span>
          </button>
          <button className="flex items-center gap-1">
            <MessageCircle />
            <span>7</span>
          </button>
          <button className="flex items-center gap-1">
            <Send />
            <span>13</span>
          </button>
        </div>
        <button>
          <Bookmark />
        </button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, porro.
      </p>
      <hr className="mt-2" />
    </article>
  );
};

export default PostCard;
