import { StyledP } from "./styles";

type TextProps = {
  name: string;
};

export default function Text({ name }: TextProps) {
  return <StyledP aria-label="text">{name}</StyledP>;
}
