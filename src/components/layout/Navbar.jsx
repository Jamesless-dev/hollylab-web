import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui";
import { site } from "../../data/site";

const linkClass =
  "text-sm text-ink-soft transition-colors duration-300 ease-soft hover:text-ink";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto max-w-page">
        <nav
          aria-label="Principal"
          className="flex h-14 items-center justify-between rounded-full border border-linen/80 bg-ivory/70 pl-6 pr-2 shadow-soft backdrop-blur-xl"
        >
          <a href="#" className="flex items-center gap-2">
            {site.logo ? (
              <img
                src={site.logo}
                alt={site.name}
                className="h-8 w-auto object-contain"
              />
            ) : (
              <span className="font-display text-2xl font-medium tracking-wide text-brand-700">
                {site.name}
              </span>
            )}
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            <Button
              href={site.cta.href}
              size="sm"
              className="hidden md:inline-flex"
            >
              {site.cta.label}
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="grid size-10 place-items-center rounded-full text-brand-700 transition-colors hover:bg-brand-50 md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {open && (
          <div
            id="menu-movil"
            className="mt-2 rounded-card border border-linen/80 bg-ivory/90 p-4 shadow-lifted backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-input px-3 py-3 text-body text-ink hover:bg-sand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              href={site.cta.href}
              className="mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              {site.cta.label}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
