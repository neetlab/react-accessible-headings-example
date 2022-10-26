import { FC } from "react";
import { Article, ArticleProps } from "./Article";

export interface ArticleListProps {
  readonly articles: readonly ArticleProps[];
}

export const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <Article
          key={`article-${article.title}`}
          title={article.title}
          excerpt={article.excerpt}
        />
      ))}

      <a href="#">さらに読み込む</a>
    </div>
  );
};
