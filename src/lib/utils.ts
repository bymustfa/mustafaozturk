import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Mustafa ÖZTÜRK",
  description:
    "I am a Software Developer specializing in modern web technologies and creating innovative solutions.",
  url: "https://mustafaozturk.kim",
  logo: "https://mustafaozturk.kim/images/me.jpg",
};

export interface IPorjects {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface IExperience {
  title: string;
  subtitle: string;
  description: string;
  location: string;
  years: string;
  link?: string;
}

export interface IEducation {
  title: string;
  description: string;
  years?: string;
}
