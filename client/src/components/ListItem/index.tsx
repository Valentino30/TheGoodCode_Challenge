import { ReactNode } from "react";

import { StyledLi } from "./styles";

type ListItemProps = {
  children?: ReactNode[];
};

export default function ListItem({ children }: ListItemProps) {
  return <StyledLi>{children}</StyledLi>;
}
