import { cn } from "@/lib/utils";
import React from "react";

interface FullScreenVideoProps {
  src: string;
  className?: string;
  zIndex?: string;
}

const FullScreenVideo: React.FC<FullScreenVideoProps> = ({
  src,
  className = "",
  zIndex = "-z-50",
}) => {
  return (
    <video
      autoPlay
      loop
      muted
      className={cn(
        "absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2",
        zIndex,
        className
      )}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default FullScreenVideo;
