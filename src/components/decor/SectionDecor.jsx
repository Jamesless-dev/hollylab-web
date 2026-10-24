import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import { Float, Twinkle } from "./Float";

/* Decoración discreta para las secciones. Reglas para que no se sienta cargada:
   pocos elementos, bajo contraste, movimiento lento, solo en los márgenes vacíos
   y solo en pantallas grandes (lg en adelante).
   Se activa con <Section decor="products | routine | ingredients">. */

const tones = {
  light: { line: "border-blush-deep/60", faint: "border-blush-deep/30", dot: "bg-blush-deep", spark: "text-blush-deep" },
  dark: { line: "border-ivory/25", faint: "border-ivory/15", dot: "bg-ivory/70", spark: "text-ivory/70" },
};

/** Arcos concentricos de solo línea. Llenan a su contenedor (que define el tamaño). */
function Arches({ tone, rows = 3 }) {
  return Array.from({ length: rows }).map((_, i) => (
    <div
      key={i}
      style={{ inset: `${i * 10}px` }}
      className={cn("absolute rounded-t-full border", i === 0 ? tone.line : tone.faint)}
    />
  ));
}

/** Anillo doble con un punto que lo recorre. Llena a su contenedor. */
function Ring({ tone, duration = 44 }) {
  return (
    <>
      <div className={cn("absolute inset-0 rounded-full border", tone.line)} />
      <div className={cn("absolute inset-[14%] rounded-full border", tone.faint)} />
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <span className={cn("absolute left-1/2 top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full", tone.dot)} />
      </motion.div>
    </>
  );
}

const variants = {
  // Fondo marfil: esquina superior derecha libre y base izquierda
  products: (
    <>
      <Float amp={6} duration={10} className="right-[5%] top-12 aspect-square w-28">
        <Ring tone={tones.light} />
      </Float>
      <Twinkle size={14} solid duration={4.4} className="right-[18%] top-28 text-blush-deep" />
      <Float amp={5} duration={9} className="bottom-8 left-[4%] h-20 w-12">
        <Arches tone={tones.light} rows={2} />
      </Float>
      <Float amp={8} duration={8.5} className="bottom-14 left-[24%] size-2 rounded-full bg-blush-deep/70" />
    </>
  ),

  // Fondo arena: el título está a la izquierda, así que la derecha queda libre
  routine: (
    <>
      <Float amp={6} duration={11} className="right-[4%] top-10 h-36 w-24">
        <Arches tone={tones.light} rows={3} />
      </Float>
      <Twinkle size={18} duration={3.8} delay={0.6} className="right-[15%] top-32 text-blush-deep" />
      <Float amp={5} duration={9.5} className="bottom-8 right-[9%] aspect-square w-16">
        <Ring tone={tones.light} duration={52} />
      </Float>
      <Float amp={7} duration={7.5} className="left-[3%] top-24 size-1.5 rounded-full bg-blush-deep" />
    </>
  ),

  // Fondo azul profundo: la zona inferior izquierda, bajo el texto, está vacía
  ingredients: (
    <>
      <Float amp={7} duration={12} className="bottom-16 left-[7%] h-56 w-36">
        <Arches tone={tones.dark} rows={3} />
      </Float>
      <Float amp={5} duration={9} className="bottom-24 left-[25%] aspect-square w-14">
        <Ring tone={tones.dark} duration={48} />
      </Float>
      <Twinkle size={16} solid duration={4.2} delay={0.4} className="bottom-[19.5rem] left-[11.5%] text-ivory/70" />
    </>
  ),
};

export default function SectionDecor({ variant }) {
  const content = variants[variant];
  if (!content) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
      {content}
    </div>
  );
}
