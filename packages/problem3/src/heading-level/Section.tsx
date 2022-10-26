import { FC, ReactNode } from "react";
import { HeadingLevelContext, useLevel } from "./context.js";

export interface SectionProps {
  readonly children: ReactNode;
}

export const Section: FC<SectionProps> = ({ children }) => {
  const level = useLevel();
  const nextLevel = Math.min(level + 1, 6);

  return (
    <HeadingLevelContext.Provider value={{ level: nextLevel }}>
      {children}
    </HeadingLevelContext.Provider>
  );
};
