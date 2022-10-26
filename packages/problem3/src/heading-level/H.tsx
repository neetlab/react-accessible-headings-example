import { ElementType, FC, ReactNode } from "react";
import { useLevel } from "./context.js";

export interface HProps {
  readonly children: ReactNode;
}

export const H: FC<HProps> = ({ children }) => {
  const level = useLevel();
  const Heading = `h${level}` as ElementType;

  return <Heading>{children}</Heading>;
};
