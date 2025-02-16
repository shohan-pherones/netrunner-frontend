"use client";

import { cn } from "@/lib/utils";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { FieldError, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends object> {
  label: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  placeholder?: string;
  options?: string[];
}

const Input = <T extends object>({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder = "",
  options,
}: InputProps<T>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="flex flex-col gap-2 items-start">
      <label htmlFor={name} className="cursor-pointer">
        {label}
      </label>
      <div className="relative w-full">
        {type === "select" ? (
          <select
            id={name}
            {...register(name)}
            className={cn(
              "w-full border px-3 py-2 rounded-lg transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-cyan-500 hover:border-gray-500"
            )}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={isPasswordVisible ? "text" : type}
            id={name}
            placeholder={placeholder}
            {...register(name)}
            className={cn(
              "w-full border px-3 py-2 rounded-lg transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-cyan-500 hover:border-gray-500",
              type === "password" ? "pr-7" : ""
            )}
          />
        )}
        {type === "password" && (
          <button
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            {isPasswordVisible ? <Eye size={16} /> : <EyeClosed size={16} />}
          </button>
        )}
      </div>
      {error && <span className="text-xs text-red-500">{error.message}</span>}
    </div>
  );
};

export default Input;
