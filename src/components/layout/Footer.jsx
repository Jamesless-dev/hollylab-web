import Container from "./Container";
import { site } from "../../data/site";
import { products } from "../../data/products";
import { footer } from "../../data/footer";

const linkClass = "text-ink-soft transition-colors duration-300 ease-soft hover:text-brand-700";

export default function Footer() {
  return (
    <footer id="nosotros" className="border-t border-linen bg-ivory">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#" className="font-display text-3xl font-medium text-brand-700">
              {site.name}
            </a>
            <p className="mt-4 max-w-sm text-ink-soft">{footer.about}</p>
          </div>

          <nav aria-label="Productos">
            <p className="text-sm font-medium text-ink">Productos</p>
            <ul className="mt-4 space-y-3 text-sm">
              {products.map((p) => (
                <li key={p.id}>
                  <a href={`#${p.id}`} className={linkClass}>{p.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Explorar">
            <p className="text-sm font-medium text-ink">Explorar</p>
            <ul className="mt-4 space-y-3 text-sm">
              {[...site.nav, ...footer.social].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={linkClass}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-16 border-t border-linen pt-6 text-sm text-ink-soft">
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
