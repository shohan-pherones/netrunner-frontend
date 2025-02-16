import { LucideIcon } from "lucide-react";

export interface TInputs<T> {
  label: string;
  name: keyof T;
  type?: string;
  placeholder: string;
  options?: string[];
}

export interface TMenu {
  route: string;
  label?: string;
  icon?: LucideIcon;
}
