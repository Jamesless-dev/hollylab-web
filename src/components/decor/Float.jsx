import { motion } from "motion/react";
import { Sparkle } from "lucide-react";
import { cn } from "../../lib/utils";

/** Contenedor que flota suavemente (sube y baja). Posición y tamaño van en `className`. */
export function Float({ amp = 8, duration = 6, rotate, className, children, ...props }) {
  return (
    <motion.div
      className={cn("absolute", className)}
      animate={{ y: [0, -amp, 0], ...(rotate ? { rotate: [0, rotate, 0] } : {}) }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Destello que parpadea y gira muy despacio. El color se cambia con `className` (text-…). */
export function Twinkle({ className, size = 18, solid = false, duration = 3.6, delay = 0 }) {
  return (
    <motion.span
      aria-hidden="true"
      className={cn("absolute text-blush-deep", className)}
      animate={{ opacity: [0.45, 1, 0.45], scale: [0.85, 1.12, 0.85], rotate: [0, 20, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <Sparkle size={size} strokeWidth={1.25} fill={solid ? "currentColor" : "none"} />
    </motion.span>
  );
}
