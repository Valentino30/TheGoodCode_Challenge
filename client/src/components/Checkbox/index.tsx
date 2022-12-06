import { StyledInput } from "./styles";

type CheckboxProps = {
  checkId: string;
  checked: boolean;
  onCheck: (id: string) => void;
};

export default function Checkbox({ checked, onCheck, checkId }: CheckboxProps) {
  const handleChange = () => {
    onCheck(checkId);
  };

  return (
    <StyledInput
      type={"checkbox"}
      aria-label="checkbox"
      checked={checked}
      onChange={handleChange}
    />
  );
}
