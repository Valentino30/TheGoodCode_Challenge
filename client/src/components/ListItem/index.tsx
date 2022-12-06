import { StyledLi } from "./styles";

type ListItemProps = {
  name: string;
};

export default function ListItem({ name }: ListItemProps) {
  return <StyledLi>{name}</StyledLi>;
}
