import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Droplets, Leaf, Sun, Sparkles } from "lucide-react";
import { Button, Badge } from "../ui";
import { Section } from "../layout";
import { site } from "../../data/site";

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const icons = [Droplets, Leaf, Sun];

export default function Hero() {
  const { badge, title, text, primary, secondary, image, routine } = site.hero;

  // Interacción Parallax con el mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-12, 12]),
    springConfig,
  );
  const dy = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-12, 12]),
    springConfig,
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = (e.clientX - rect.left) / width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <Section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.14 } } }}
        className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Columna de Texto */}
        <div>
          <motion.div variants={rise}>
            <Badge variant="outline" className="gap-2">
              <Sparkles size={14} className="text-brand-500 animate-pulse" />
              {badge}
            </Badge>
          </motion.div>

          <motion.h1
            variants={rise}
            className="mt-4 max-w-xl bonheur-royale-regular text-1xl font-bold text-brand-900 sm:text-1x2 md:text-7xl leading-tight"
          >
            {title}
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
            </Button>
            <Button size="lg" variant="secondary" href={secondary.href}>
              {secondary.label}
            </Button>
          </motion.div>
        </div>

        {/* Columna de Imagen Dinámica en Arco */}
        <motion.div
          variants={rise}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Contenedor con efecto de Parallax */}
          <motion.div style={{ x: dx, y: dy }} className="relative">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-card-lg bg-sand shadow-lifted border border-linen/60">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="size-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-[24%] size-44 -translate-x-1/2 rounded-full bg-brand-700 sm:size-56 shadow-inner"
                />
              )}
              {/* Capa de brillo interactivo */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* Tarjeta flotante animada con efecto de levitación constante */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 left-4 right-4 rounded-card border border-linen bg-ivory/90 p-5 shadow-lifted backdrop-blur-md sm:left-auto sm:-right-6 sm:w-72"
            >
              <p className="text-sm font-medium text-ink flex items-center justify-between">
                <span>Rutina en 3 pasos</span>
              </p>
              <ul className="mt-3 flex justify-between">
                {routine.map((label, i) => {
                  const Icon = icons[i];
                  return (
                    <li
                      key={label}
                      className="flex items-center gap-1.5 text-xs font-medium text-ink-soft"
                    >
                      {Icon && (
                        <Icon
                          size={15}
                          className="text-brand-500"
                          aria-hidden="true"
                        />
                      )}
                      {label}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
