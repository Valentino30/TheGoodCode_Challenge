import Button from "../Button";

import Checkbox from "../Checkbox";
import { StyledLi } from "./styles";

type ListItemProps = {
  id: string;
  name: string;
  remove: boolean;
  checked: boolean;
  deleting: boolean;
  toggling: boolean;
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
  deleting,
  toggling,
  checkbox,
  onButtonClick,
}: ListItemProps) {
  return (
    <StyledLi>
      {checkbox && (
        <Checkbox
          checkId={id}
          checked={checked}
          onCheck={onCheck}
          disabled={toggling}
        />
      )}
      {name}
      {remove && (
        <Button
          id={id}
          name={"Delete"}
          disabled={deleting}
          onClick={onButtonClick}
        />
      )}
    </StyledLi>
  );
}
