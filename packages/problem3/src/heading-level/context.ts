import { createContext, useContext } from "react";

export const HeadingLevelContext = createContext({
  level: 1,
});

export const useLevel = () => {
  const context = useContext(HeadingLevelContext);
  return context.level;
};
