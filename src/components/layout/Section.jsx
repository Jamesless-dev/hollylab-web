import { cn } from "../../lib/utils";
import Container from "./Container";

export default function Section({
  id,
  className,
  containerClassName,
  children,
}) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
