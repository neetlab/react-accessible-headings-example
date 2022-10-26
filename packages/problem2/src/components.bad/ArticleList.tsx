import { FC } from "react";
import { Article, ArticleProps } from "./Article";

export interface ArticleListProps {
  readonly currentLevel: number;
  readonly articles: readonly Omit<ArticleProps, "currentLevel">[];
}

export const ArticleList: FC<ArticleListProps> = ({
  currentLevel,
  articles,
}) => {
  return (
    <div>
      {articles.map((article) => (
        <Article
          key={`article-${article.title}`}
          currentLevel={currentLevel}
          title={article.title}
          excerpt={article.excerpt}
        />
      ))}

      <a href="#">さらに読み込む</a>
    </div>
  );
};
