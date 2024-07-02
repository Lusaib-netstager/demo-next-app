import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type TailwindCjInput =
  | string
  | number
  | Record<string, boolean | undefined | null>;

export default function tailwindCj(...inputs: TailwindCjInput[]): string {
  return twMerge(clsx(inputs));
}
