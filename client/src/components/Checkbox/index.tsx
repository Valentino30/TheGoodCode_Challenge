import { StyledInput } from "./styles";

type CheckboxProps = {
  checkId?: string;
  checked?: boolean;
  disabled?: boolean;
  onCheck?: (id: string) => void;
};

export default function Checkbox({
  checked,
  onCheck,
  checkId,
  disabled,
}: CheckboxProps) {
  const handleChange = () => {
    if (onCheck && checkId) onCheck(checkId);
  };

  return (
    <StyledInput
      type={"checkbox"}
      checked={checked}
      disabled={disabled}
      aria-label="checkbox"
      onChange={handleChange}
    />
  );
}
