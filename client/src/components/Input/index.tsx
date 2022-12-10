import { ChangeEventHandler } from "react";
import { StyledInput } from "./styles";

type InputProps = {
  type: string;
  value: string;
  disabled: boolean;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function Input({
  placeholder,
  onChange,
  disabled,
  value,
  type,
}: InputProps) {
  return (
    <StyledInput
      type={type}
      value={value}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
