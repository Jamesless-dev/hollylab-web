import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "eyebrow",
        "body",
        "body-lg",
        "subheading",
        "heading-sm",
        "heading",
        "heading-lg",
        "display",
      ],
      shadow: ["soft", "lifted"],
      radius: ["input", "card", "card-lg"],
    },
  },
});

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
