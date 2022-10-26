import { FC } from "react";
import { H } from "./heading-level/H";
import { Section } from "./heading-level/Section";

export interface ArticleProps {
  readonly title: string;
  readonly excerpt: string;
}

export const Article: FC<ArticleProps> = ({ title, excerpt }) => {
  return (
    <Section>
      <div>
        <H>{title}</H>
        <p>{excerpt}</p>
      </div>
    </Section>
  );
};
