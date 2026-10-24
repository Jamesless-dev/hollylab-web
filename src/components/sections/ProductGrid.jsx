import { Button, ProductCard } from "../ui";
import { Section } from "../layout";
import { products } from "../../data/products";

export default function ProductGrid() {
  return (
    <Section id="productos" decor="products">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-heading font-light text-brand-900">
            Cuidado esencial, formulado con calma.
          </h2>
          <p className="mt-4 text-body-lg text-ink-soft">
            Cuatro productos para una rutina completa: limpiar, equilibrar, hidratar y proteger.
          </p>
        </div>
        <Button variant="ghost" href="#productos">
          Ver todos los productos
        </Button>
      </div>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
