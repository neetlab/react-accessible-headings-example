import { H } from "./heading-level/H.js";
import { Section } from "./heading-level/Section.js";
import { Article } from "./content.js";

export const Cms = () => {
  return (
    <div>
      <H>私の料理ブログ</H>

      <Section>
        <Article />
      </Section>
    </div>
  );
};
