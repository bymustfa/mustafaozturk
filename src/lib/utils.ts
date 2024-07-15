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
