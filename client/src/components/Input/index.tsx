import { ChangeEventHandler, RefObject } from "react";
import { StyledInput } from "./styles";

type InputProps = {
  type: string;
  value: string;
  disabled: boolean;
  placeholder: string;
  innerRef: RefObject<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function Input({
  placeholder,
  onChange,
  innerRef,
  disabled,
  value,
  type,
}: InputProps) {
  return (
    <StyledInput
      type={type}
      value={value}
      ref={innerRef}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
