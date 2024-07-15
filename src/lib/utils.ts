import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import logo from "../../public/images/me.jpg";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Mustafa ÖZTÜRK",
  description: "I am a Software Developer",
  logo: logo,
};
