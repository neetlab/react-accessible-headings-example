import { ElementType, FC } from "react";
import { ArticleProps } from "./Article";
import { ArticleList } from "./ArticleList";

export interface ProfileProps {
  readonly currentLevel: number;
  readonly username: string;
  readonly bio: string;
  readonly articles: readonly Omit<ArticleProps, "currentLevel">[];
}

export const Profile: FC<ProfileProps> = ({
  currentLevel,
  username,
  bio,
  articles,
}) => {
  const nextLevel = currentLevel + 1;
  const Heading = `h${nextLevel}` as ElementType;

  return (
    <div>
      <Heading>{username}</Heading>
      <p>{bio}</p>
      <ArticleList currentLevel={nextLevel} articles={articles} />
    </div>
  );
};
