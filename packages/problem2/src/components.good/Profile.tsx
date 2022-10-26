import { FC } from "react";
import { ArticleProps } from "./Article";
import { ArticleList } from "./ArticleList";
import { H } from "./heading-level/H";
import { Section } from "./heading-level/Section";

export interface ProfileProps {
  readonly username: string;
  readonly bio: string;
  readonly articles: readonly ArticleProps[];
}

export const Profile: FC<ProfileProps> = ({
  username,
  bio,
  articles,
}) => {
  return (
    <Section>
      <div>
        <H>{username}</H>
        <p>{bio}</p>
        <ArticleList articles={articles} />
      </div>
    </Section>
  );
};
