import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Float, Twinkle } from "../decor";

// Color del arco detrás del producto
const tones = {
  blush: "from-blush to-blush/40",
  mist: "from-brand-100 to-brand-100/40",
  sand: "from-sand to-sand/50",
};

/** Figuras pequeñas que flotan alrededor del arco (solo desde pantallas `sm`). */
function CardDecor({ variant }) {
  const items = {
    star: (
      <>
        <Float aria-hidden="true" amp={8} duration={9} className="-left-[5%] top-[8%] aspect-square w-[22%] rounded-full border border-blush-deep/60" />
        <Twinkle size={20} duration={3.8} className="-right-[3%] top-[26%]" />
        <Float aria-hidden="true" amp={10} duration={6.5} className="-right-[2%] bottom-[18%] size-2 rounded-full bg-blush-deep/80" />
        <Twinkle size={13} solid delay={0.9} duration={4.4} className="-left-[1%] bottom-[20%]" />
      </>
    ),
    a: (
      <>
        <Twinkle size={14} solid duration={4} className="-right-[6%] top-[14%]" />
        <Float aria-hidden="true" amp={7} duration={7.5} className="-left-[5%] bottom-[22%] size-1.5 rounded-full bg-blush-deep" />
      </>
    ),
    b: (
      <>
        <Twinkle size={16} delay={0.7} duration={3.6} className="-left-[7%] top-[18%]" />
        <Float aria-hidden="true" amp={8} duration={8} className="-right-[4%] bottom-[16%] size-2 rounded-full bg-blush-deep/70" />
      </>
    ),
  };
  return (
    <div aria-hidden="true" className="hidden sm:block">
      {items[variant]}
    </div>
  );
}

/** Producto sobre un arco de color: solo imagen y nombre. La imagen flota suavemente. */
export default function ProductArch({
  product,
  featured = false,
  tone = "blush",
  decor,
  amp = 8,
  duration = 7,
}) {
  const { id, name, image } = product;

  return (
    <a id={id} href={`#${id}`} className="group block">
      <div className={cn("relative mx-auto", featured && "max-w-[32rem]")}>
        <div className="relative aspect-[4/5]">
          {decor && <CardDecor variant={decor} />}

          <div
            className={cn(
              "absolute inset-0 rounded-t-full rounded-b-card-lg bg-linear-to-b transition-transform duration-700 ease-soft group-hover:scale-[1.015]",
              tones[tone]
            )}
          />

          <motion.img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            draggable="false"
            animate={{ y: [0, -amp, 0] }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 22px 20px rgba(5, 35, 58, 0.14))" }}
            className="absolute bottom-[2%] left-1/2 w-[115%] max-w-none -translate-x-1/2 select-none transition-transform duration-700 ease-soft group-hover:scale-[1.03]"
          />
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <h3
            className={cn(
              "text-ink",
              featured ? "text-heading-sm" : "text-body-lg leading-snug sm:text-subheading"
            )}
          >
            {name}
          </h3>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-linen text-brand-700 transition-colors duration-300 ease-soft group-hover:border-brand-700 group-hover:bg-brand-700 group-hover:text-ivory sm:size-10">
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </div>
      </div>
    </a>
  );
}
