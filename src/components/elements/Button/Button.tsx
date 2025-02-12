import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "danger";
  outline?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-6 py-3",
};

const colorClasses = {
  primary: "bg-cyan-500 text-white hover:bg-cyan-600",
  secondary: "bg-gray-500 text-white hover:bg-gray-600",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

const outlineClasses = {
  primary: "border border-cyan-500 text-cyan-500 hover:bg-cyan-50",
  secondary: "border border-gray-500 text-gray-500 hover:bg-gray-50",
  danger: "border border-red-500 text-red-500 hover:bg-red-50",
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  size = "md",
  color = "primary",
  outline = false,
  onClick,
  disabled = false,
  className = "",
}) => {
  const baseClasses = "rounded font-medium transition-all focus:outline-none";

  const sizeClass = sizeClasses[size];

  const colorClass = outline ? outlineClasses[color] : colorClasses[color];

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        sizeClass,
        colorClass,
        disabledClasses,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
