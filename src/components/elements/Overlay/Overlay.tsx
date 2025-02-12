import { cn } from "@/lib/utils";
import React from "react";

interface OverlayProps {
  color?: string;
  opacity?: string;
  className?: string;
  zIndex?: string;
}

const Overlay: React.FC<OverlayProps> = ({
  color = "bg-black",
  opacity = "opacity-50",
  className = "",
  zIndex = "z-10",
}) => {
  return (
    <div
      className={cn("absolute inset-0", color, opacity, zIndex, className)}
    />
  );
};

export default Overlay;
