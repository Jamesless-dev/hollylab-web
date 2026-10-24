import { cn } from "../../lib/utils";
import { SectionDecor } from "../decor";
import Container from "./Container";

/** Sección de página: ritmo vertical de 96–128px y contenido centrado en 1200px.
 *  `decor` (opcional) añade decoración flotante sutil: "products" | "routine" | "ingredients". */
export default function Section({ id, decor, className, containerClassName, children }) {
  return (
    <section id={id} className={cn("relative overflow-x-clip py-24 md:py-32", className)}>
      {decor && <SectionDecor variant={decor} />}
      <Container className={cn("relative z-10", containerClassName)}>{children}</Container>
    </section>
  );
}
