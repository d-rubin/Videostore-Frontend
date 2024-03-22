import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export const cn = (...args: ClassValue[]) => twMerge(clsx(args));
