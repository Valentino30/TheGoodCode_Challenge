import Checkbox from "../Checkbox";
import { StyledLi } from "./styles";

type ListItemProps = {
  id: string;
  name: string;
  checked: boolean;
  checkbox: boolean;
  onCheck: (id: string) => void;
};

export default function ListItem({
  id,
  name,
  checked,
  onCheck,
  checkbox,
}: ListItemProps) {
  return (
    <StyledLi>
      {checkbox && (
        <Checkbox checked={checked} onCheck={onCheck} checkId={id} />
      )}
      {name}
    </StyledLi>
  );
}
