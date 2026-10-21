import { motion } from "motion/react";
import { Droplets, Leaf, Sun } from "lucide-react";
import { Button, Badge } from "../ui";
import { Section } from "../layout";
import { site } from "../../data/site";

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const icons = [Droplets, Leaf, Sun];

export default function Hero() {
  const { badge, title, text, primary, secondary, image, routine } = site.hero;

  return (
    <Section className="pt-36 pb-24 md:pt-44 md:pb-32">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.14 } } }}
        className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
      >
        <div>
          <motion.div variants={rise}>
            <Badge variant="outline">{badge}</Badge>
          </motion.div>

          <motion.h1
            variants={rise}
            className="mt-6 max-w-xl text-heading font-light text-brand-900 sm:text-heading-lg"
          >
            {title}
          </motion.h1>

          <motion.p variants={rise} className="mt-6 max-w-md text-body-lg text-ink-soft">
            {text}
          </motion.p>

          <motion.div variants={rise} className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" href={primary.href}>{primary.label}</Button>
            <Button size="lg" variant="secondary" href={secondary.href}>{secondary.label}</Button>
          </motion.div>
        </div>

        <motion.div variants={rise} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-card-lg bg-sand">
            {image ? (
              <img src={image} alt="" className="size-full object-cover" />
            ) : (
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[24%] size-44 -translate-x-1/2 rounded-full bg-brand-700 sm:size-56"
              />
            )}
          </div>

          <div className="absolute -bottom-8 left-4 right-4 rounded-card border border-linen bg-porcelain p-5 shadow-lifted sm:left-auto sm:-right-6 sm:w-72">
            <p className="text-sm font-medium text-ink">Rutina en 3 pasos</p>
            <ul className="mt-3 flex justify-between">
              {routine.map((label, i) => {
                const Icon = icons[i];
                return (
                  <li key={label} className="flex items-center gap-2 text-sm text-ink-soft">
                    <Icon size={16} className="text-brand-500" aria-hidden="true" />
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
