import { ElementType, FC } from "react";

export interface ProfileProps {
  readonly currentLevel: number;
  readonly username: string;
  readonly bio: string;
}

export const Profile: FC<ProfileProps> = ({ currentLevel, username, bio }) => {
  const nextLevel = Math.min(currentLevel + 1, 6);
  const Heading = `h${nextLevel}` as ElementType;

  return (
    <div>
      <Heading>{username}</Heading>
      <p>{bio}</p>
    </div>
  );
};
