import Button from "../Button";

import Checkbox from "../Checkbox";
import { StyledLi } from "./styles";

type ListItemProps = {
  id: string;
  name: string;
  remove: boolean;
  checked: boolean;
  checkbox: boolean;
  onCheck: (id: string) => void;
  onButtonClick: (id: string) => void;
};

export default function ListItem({
  id,
  name,
  remove,
  checked,
  onCheck,
  checkbox,
  onButtonClick,
}: ListItemProps) {
  return (
    <StyledLi>
      {checkbox && (
        <Checkbox checked={checked} onCheck={onCheck} checkId={id} />
      )}
      {name}
      {remove && <Button name="Delete" id={id} onClick={onButtonClick} />}
    </StyledLi>
  );
}
