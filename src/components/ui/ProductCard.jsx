import { cn } from "../../lib/utils";
import { formatPrice } from "../../lib/format";
import Badge from "./Badge";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

const tones = {
  brand: { cap: "bg-brand-900", body: "bg-brand-700" },
  mist: { cap: "bg-brand-700", body: "bg-brand-200" },
  ivory: { cap: "bg-brand-700", body: "bg-porcelain border border-linen" },
};

/** Frasco decorativo hecho con CSS, para cuando aún no hay foto de producto. */
function Bottle({ tone = "mist" }) {
  const t = tones[tone] ?? tones.mist;
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 grid place-items-center"
    >
      <div className="flex flex-col items-center">
        <div className={cn("h-6 w-10 rounded-t-md", t.cap)} />
        <div className={cn("h-40 w-24 rounded-t-xl rounded-b-3xl", t.body)} />
      </div>
    </div>
  );
}

export default function ProductCard({ product }) {
  const { name, category, description, size, price, badge, image, tone } =
    product;

  return (
    <article className="group flex h-full flex-col rounded-card border border-linen bg-porcelain p-3 shadow-soft transition-shadow duration-500 ease-soft hover:shadow-lifted">
      <div className="relative aspect-[4/5] overflow-hidden rounded-input bg-sand">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.03]"
          />
        ) : (
          <Bottle tone={tone} />
        )}
        {badge && (
          <Badge variant="brand" className="absolute left-3 top-3">
            {badge}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <Eyebrow>{category}</Eyebrow>
        <h3 className="mt-2 text-subheading text-ink">{name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{description}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <p className="text-sm text-ink-soft">
            <span className="text-body font-medium text-ink">
              {formatPrice(price)}
            </span>
            <span className="ml-2">{size}</span>
          </p>
          <Button variant="secondary" size="sm" href={`#${product.id}`}>
            Ver detalle
          </Button>
        </div>
      </div>
    </article>
  );
}
