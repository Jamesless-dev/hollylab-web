import { MotionConfig } from "motion/react";
import { Navbar, Footer } from "./components/layout";
import { Hero, ProductGrid, Routine, Ingredients } from "./components/sections";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <Routine />
        <Ingredients />
      </main>
      <Footer />
    </MotionConfig>
  );
}
