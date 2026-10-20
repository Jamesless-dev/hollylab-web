import { cn } from "../../lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap " +
  "transition-colors duration-300 ease-soft disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-brand-700 text-ivory hover:bg-brand-800 active:bg-brand-900",
  secondary:
    "border border-brand-700/25 text-brand-700 hover:border-brand-700 hover:bg-brand-50",
  ghost: "text-brand-700 hover:bg-brand-50",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.9375rem]",
  lg: "h-14 px-8 text-base",
};

/** Botón o enlace: si recibe `href` se renderiza como <a>. */
export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}) {
  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      type={href ? undefined : "button"}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
