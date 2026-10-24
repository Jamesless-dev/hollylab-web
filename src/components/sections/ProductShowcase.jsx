import { Section } from "../layout";
import { ProductArch } from "../ui";
import { products } from "../../data/products";

export default function ProductShowcase() {
  const [star, ...rest] = products;
  const secondaryTones = ["mist", "sand"];
  const secondaryDecor = ["a", "b"];

  return (
    <Section id="productos" decor="products">
      <h2 className="max-w-xl text-heading font-light text-brand-900">
        Cuidado esencial, formulado con calma.
      </h2>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Protagonista */}
        <ProductArch product={star} featured tone="blush" decor="star" amp={10} duration={8} />

        {/* Secundarios: el segundo baja un poco en escritorio para dar ritmo */}
        <ul className="grid grid-cols-2 gap-5 sm:gap-8 lg:self-center">
          {rest.map((product, i) => (
            <li key={product.id} className={i % 2 === 1 ? "lg:mt-24" : undefined}>
              <ProductArch
                product={product}
                tone={secondaryTones[i % 2]}
                decor={secondaryDecor[i % 2]}
                duration={7 + i}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
