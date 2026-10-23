import { motion } from "motion/react";
import { Sparkle } from "lucide-react";
import { cn } from "../../lib/utils";
import { heroDetails } from "../../data/hero";

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

/** Destello que parpadea y gira muy despacio. */
function Twinkle({ className, size = 18, solid = false, duration = 3.6, delay = 0 }) {
  return (
    <motion.span
      aria-hidden="true"
      className={cn("absolute z-20 text-blush-deep", className)}
      animate={{ opacity: [0.45, 1, 0.45], scale: [0.85, 1.12, 0.85], rotate: [0, 20, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <Sparkle size={size} strokeWidth={1.25} fill={solid ? "currentColor" : "none"} />
    </motion.span>
  );
}

/** Todo lo decorativo que rodea la foto. Las capas van detrás de la foto (que tiene z-10). */
export default function HeroDecor() {
  return (
    <>
      {/* Resplandor suave que "respira" detrás de la foto */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-[8%] top-[12%] h-[66%] rounded-full bg-blush blur-3xl"
        animate={{ scale: [1, 1.07, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Arco rosado de fondo */}
      <Float
        aria-hidden="true"
        amp={7}
        duration={7.5}
        className="-right-[5%] bottom-[10%] h-[60%] w-[46%] rounded-t-full bg-linear-to-b from-blush to-blush/40"
      />

      {/* Arco de línea doble */}
      <Float
        aria-hidden="true"
        amp={10}
        duration={6}
        className="-right-[7%] bottom-[30%] hidden h-[28%] w-[16%] sm:block"
      >
        <div className="absolute inset-0 rounded-t-full border border-blush-deep/70" />
        <div className="absolute inset-2 rounded-t-full border border-blush-deep/40" />
      </Float>

      {/* Anillo con un punto que lo recorre */}
      <Float
        aria-hidden="true"
        amp={9}
        duration={8}
        className="-left-[5%] top-[4%] aspect-square w-[30%]"
      >
        <div className="absolute inset-0 rounded-full border border-blush-deep/60" />
        <div className="absolute inset-[12%] rounded-full border border-blush-deep/30" />
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush-deep" />
        </motion.div>
      </Float>

      {/* Destellos */}
      <Twinkle size={26} className="-left-[3%] top-[42%]" />
      <Twinkle size={15} solid duration={4.4} delay={0.8} className="left-[42%] -top-[2%]" />
      <Twinkle size={14} solid duration={3.2} delay={1.4} className="left-[1%] bottom-[11%]" />

      {/* Puntos flotantes */}
      <Float aria-hidden="true" amp={12} duration={5.5} className="left-[20%] top-[-3%] size-2 rounded-full bg-blush-deep/80" />
      <Float aria-hidden="true" amp={9} duration={6.8} className="right-[1%] top-[46%] size-1.5 rounded-full bg-blush-deep" />
      <Float aria-hidden="true" amp={11} duration={7.2} className="bottom-[1%] left-[10%] size-2.5 rounded-full bg-blush" />

      {/* Imágenes flotantes opcionales (ver data/hero.js) */}
      {heroDetails.floaters.map((f) => (
        <Float key={f.src} amp={f.amp ?? 10} duration={f.duration ?? 7} rotate={f.rotate} className={f.className}>
          <img src={f.src} alt="" aria-hidden="true" className="w-full select-none" draggable="false" />
        </Float>
      ))}
    </>
  );
}
