import { FC } from "react";

export interface ProfileProps {
  readonly username: string;
  readonly bio: string;
}

export const Profile: FC<ProfileProps> = ({ username, bio }) => (
  <div>
    <h3>{username}</h3>
    <p>{bio}</p>
  </div>
);
