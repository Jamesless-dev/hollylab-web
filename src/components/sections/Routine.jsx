import { Droplets, Leaf, Sun } from "lucide-react";
import { Section } from "../layout";
import { routine } from "../../data/routine";
import { products } from "../../data/products";

const icons = { droplets: Droplets, leaf: Leaf, sun: Sun };

export default function Routine() {
  return (
    <Section id="rutina" decor="routine" className="bg-sand">
      <div className="max-w-xl">
        <h2 className="text-heading font-light text-brand-900">Tres pasos, cada día.</h2>
        <p className="mt-4 text-body-lg text-ink-soft">
          Una rutina corta es la que de verdad se mantiene. Esta es la nuestra.
        </p>
      </div>

      <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
        {routine.map((step, i) => {
          const Icon = icons[step.icon];
          const product = products.find((p) => p.id === step.productId);
          return (
            <li key={step.title} className="border-t border-brand-700/20 pt-8">
              <div className="flex items-center justify-between">
                <span className="font-display text-heading-sm text-brand-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {Icon && <Icon size={22} className="text-brand-700" aria-hidden="true" />}
              </div>
              <h3 className="mt-8 text-heading font-light text-brand-900">{step.title}</h3>
              <p className="mt-3 text-ink-soft">{step.text}</p>
              <p className="mt-6 text-sm text-ink-soft">{step.moment}</p>
              {product && (
                <a
                  href={`#${product.id}`}
                  className="mt-1 inline-block text-sm font-medium text-brand-700 underline-offset-4 hover:underline"
                >
                  {product.name}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
