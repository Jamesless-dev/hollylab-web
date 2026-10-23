import { motion } from "motion/react";
import { ArrowRight, Droplets, Heart, Leaf, Sparkles, Sun } from "lucide-react";
import { Button, Badge } from "../ui";
import { Section } from "../layout";
import HeroDecor, { Float } from "./HeroDecor";
import { site } from "../../data/site";
import { heroDetails } from "../../data/hero";

/* ─── Ajustes rápidos de la foto ───────────────────────────────────────────
   Tamaño:  más grande → "ml-0 w-full"    más pequeña → "ml-[6%] w-[82%]"
   Forma:   más alta   → "aspect-[4/5]"   más ancha   → "aspect-[1/1]"
   Columnas (escritorio): más espacio para la foto → "lg:grid-cols-[1fr_1fr]"
   ─────────────────────────────────────────────────────────────────────── */
const PHOTO_SIZE = "ml-[3%] w-[92%]";
const PHOTO_SHAPE = "aspect-[7/8]";
const COLUMNS = "lg:grid-cols-[1.05fr_0.95fr]";

const ease = [0.22, 1, 0.36, 1];
const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const icons = { droplets: Droplets, leaf: Leaf, sun: Sun };

/** Subrayado dibujado a mano que se "traza" al cargar. */
function Underline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 12"
      preserveAspectRatio="none"
      className="absolute inset-x-0 -bottom-1 h-2.5 w-full text-blush-deep"
    >
      <motion.path
        d="M3 8 C 70 2, 150 10, 297 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, delay: 0.9, ease }}
      />
    </svg>
  );
}

function RichTitle({ text }) {
  const parts = text.split(/\*(.+?)\*/g);
  let first = true;
  return parts.map((part, i) => {
    if (i % 2 === 0) return part;
    const underline = first;
    first = false;
    return (
      <em
        key={i}
        className="relative whitespace-nowrap font-normal italic text-brand-700"
      >
        {part}
        {underline && <Underline />}
      </em>
    );
  });
}

export default function Hero() {
  const { badge, title, text, primary, secondary, image } = site.hero;
  const { imageAlt, tagline, features } = heroDetails;

  return (
    <Section className="overflow-x-clip pt-36 pb-24 md:pt-44 md:pb-32">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.14 } } }}
        className={`grid items-center gap-20 lg:gap-12 ${COLUMNS}`}
      >
        {/* ── Texto ─────────────────────────────────────────── */}
        <div>
          <motion.div variants={rise}>
            <Badge variant="outline">
              <Sparkles
                size={12}
                aria-hidden="true"
                className="text-brand-500"
              />
              {badge}
            </Badge>
          </motion.div>

          <motion.h1
            variants={rise}
            className="mt-6 max-w-xl text-heading font-light leading-[1.1] text-brand-900 sm:text-heading-lg xl:max-w-[38rem] xl:text-display"
          >
            <RichTitle text={title} />
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-6 max-w-md text-body-lg text-ink-soft"
          >
            {text}
          </motion.p>

          <motion.div variants={rise} className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" href={primary.href}>
              {primary.label}
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button size="lg" variant="secondary" href={secondary.href}>
              {secondary.label}
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </motion.div>

          <motion.ul variants={rise} className="mt-12 flex flex-wrap gap-y-6">
            {features.map((f) => {
              const Icon = icons[f.icon];
              return (
                <li
                  key={f.title}
                  className="flex items-center gap-3 pr-6 sm:border-l sm:border-linen sm:px-6 sm:first:border-l-0 sm:first:pl-0"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-blush">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-brand-700"
                      aria-hidden="true"
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-ink">
                      {f.title}
                    </span>
                    <span className="block text-sm text-ink-soft">
                      {f.text}
                    </span>
                  </span>
                </li>
              );
            })}
          </motion.ul>
        </div>

        {/* ── Composición de la foto ────────────────────────── */}
        <motion.div
          variants={rise}
          className="relative mx-auto w-full max-w-[34rem] pb-8 lg:max-w-none"
        >
          <HeroDecor />

          {/* Foto en arco */}
          <div
            className={`relative z-10 overflow-hidden rounded-t-full rounded-b-card-lg bg-sand shadow-lifted ${PHOTO_SIZE} ${PHOTO_SHAPE}`}
          >
            {image ? (
              <img
                src={image}
                alt={imageAlt}
                fetchPriority="high"
                className="size-full object-cover object-top"
              />
            ) : (
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[24%] size-44 -translate-x-1/2 rounded-full bg-brand-700 sm:size-56"
              />
            )}
          </div>

          {/* Frase manuscrita */}
          <Float
            aria-hidden="true"
            amp={6}
            duration={6.5}
            rotate={3}
            className="right-0 top-[4%] z-10 hidden -rotate-[10deg] sm:block"
          >
            <p className="font-script text-[1.75rem] leading-[1.15] text-ink-muted">
              {tagline.split(" ").map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
            </p>
            <motion.span
              className="mt-1 block w-fit"
              animate={{ scale: [1, 1.18, 1] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart size={14} className="fill-blush-deep text-blush-deep" />
            </motion.span>
          </Float>

          {/* Tarjeta flotante */}
          <Float
            amp={5}
            duration={7}
            className="bottom-0 right-0 z-20 w-[72%] max-w-[18.5rem] rounded-card border border-linen bg-porcelain/95 p-5 shadow-lifted backdrop-blur"
          >
            <p className="text-sm font-medium text-ink">Rutina en 3 pasos</p>
            <ul className="mt-3 flex flex-wrap justify-between gap-x-3 gap-y-2">
              {features.map((f) => {
                const Icon = icons[f.icon];
                return (
                  <li
                    key={f.title}
                    className="flex items-center gap-1.5 text-sm text-ink-soft"
                  >
                    <Icon
                      size={16}
                      className="text-brand-500"
                      aria-hidden="true"
                    />
                    {f.title}
                  </li>
                );
              })}
            </ul>
          </Float>
        </motion.div>
      </motion.div>
    </Section>
  );
}
