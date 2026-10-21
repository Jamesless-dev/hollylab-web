import { cn } from "../../lib/utils";

export default function Eyebrow({ as: Comp = "p", className, children }) {
  return (
    <Comp
      className={cn(
        "text-eyebrow font-medium tracking-wide text-brand-500",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
