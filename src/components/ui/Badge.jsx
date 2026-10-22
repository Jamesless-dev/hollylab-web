import { cn } from "../../lib/utils";

const variants = {
  soft: "bg-sand text-ink-soft",
  brand: "bg-brand-700 text-ivory",
  outline: "border border-linen text-ink-soft",
};

export default function Badge({ variant = "soft", className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
