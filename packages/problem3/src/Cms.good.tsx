import { ComponentProps, ElementType } from "react";

import { useLevel } from "./heading-level/context.js";
import { H } from "./heading-level/H.js";
import { Section } from "./heading-level/Section.js";
import { Article } from "./content.js";

const makeRelativeH = (level: number) => {
  const RelativeH = (props: ComponentProps<"h2">) => {
    const baseLevel = useLevel();
    const absoluteLevel = Math.min(baseLevel + level - 1, 6);
    const Element = `h${absoluteLevel}` as ElementType;
    return <Element {...props} />;
  };

  return RelativeH;
};

export const Cms = () => {
  return (
    <div>
      <H>私の料理ブログ</H>

      <Section>
        <Article
          components={{
            h1: makeRelativeH(1),
            h2: makeRelativeH(2),
            h3: makeRelativeH(3),
            h4: makeRelativeH(4),
            h5: makeRelativeH(5),
            h6: makeRelativeH(6),
          }}
        />
      </Section>
    </div>
  );
};
