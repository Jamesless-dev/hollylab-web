import { Section } from "../layout";
import { ingredients, ingredientsIntro } from "../../data/ingredients";

export default function Ingredients() {
  return (
    <Section id="ingredientes" decor="ingredients" className="bg-brand-700 text-ivory">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <h2 className="max-w-md text-heading font-light text-ivory">{ingredientsIntro.title}</h2>
          <p className="mt-4 max-w-sm text-body-lg text-brand-200">{ingredientsIntro.text}</p>
        </div>

        <ul>
          {ingredients.map((item) => (
            <li
              key={item.name}
              className="grid gap-2 border-t border-ivory/20 py-7 last:border-b sm:grid-cols-[14rem_1fr] sm:gap-8"
            >
              <h3 className="text-heading-sm text-ivory">{item.name}</h3>
              <p className="text-brand-200">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
