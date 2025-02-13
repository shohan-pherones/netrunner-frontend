import { FieldError, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends object> {
  label: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  placeholder?: string;
}

const Input = <T extends object>({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder = "",
}: InputProps<T>) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <label htmlFor={name} className="cursor-pointer">
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name)}
        className="w-full border px-3 py-2 rounded-lg transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-cyan-500 hover:border-gray-500"
      />
      {error && <span className="text-xs text-red-500">{error.message}</span>}
    </div>
  );
};

export default Input;
