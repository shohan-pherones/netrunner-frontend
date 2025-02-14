import { useEffect, useRef, useState } from "react";
import {
  FieldError,
  Path,
  PathValue,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

interface OtpInputProps<T extends object> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<T>;
  error?: FieldError;
  placeholder?: string;
  length?: number;
}

const OtpInput = <T extends object>({
  label,
  name,
  register,
  setValue,
  error,
  length = 6,
}: OtpInputProps<T>) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    setValue(name, newOtp.join("") as PathValue<T, Path<T>>);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    register(name, {
      required: "OTP is required",
      validate: (value) => {
        const otpValue = value as string;
        return otpValue.length === length || `OTP must be ${length} digits`;
      },
    });
  }, [register, name, length]);

  return (
    <div className="flex flex-col gap-2 items-start">
      <label htmlFor={name} className="cursor-pointer">
        {label}
      </label>
      <div className="flex gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => {
              if (el) {
                inputRefs.current[index] = el;
              }
            }}
            className="w-full aspect-square border px-3 py-2 rounded-lg transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-cyan-500 hover:border-gray-500 text-center text-2xl"
          />
        ))}
      </div>
      {error && <span className="text-xs text-red-500">{error.message}</span>}
    </div>
  );
};

export default OtpInput;
