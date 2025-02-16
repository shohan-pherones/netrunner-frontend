import { coverPhotos, profilePhotos } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomCoverPhoto = () => {
  return coverPhotos[Math.floor(Math.random() * coverPhotos.length)];
};

export const getRandomProfilePhoto = () => {
  return profilePhotos[Math.floor(Math.random() * profilePhotos.length)];
};
