import { ElementType, FC } from "react";

export interface ArticleProps {
  readonly currentLevel: number;
  readonly title: string;
  readonly excerpt: string;
}

export const Article: FC<ArticleProps> = ({ currentLevel, title, excerpt }) => {
  const nextLevel = currentLevel + 1;
  const Heading = `h${nextLevel}` as ElementType;

  return (
    <div>
      <Heading>{title}</Heading>
      <p>{excerpt}</p>
    </div>
  );
};
