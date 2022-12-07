import { FormEventHandler, ReactNode } from "react";
import { StyledForm } from "./styles";

type FormProps = {
  children?: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export default function Form({ children, onSubmit }: FormProps) {
  return (
    <StyledForm onSubmit={onSubmit} aria-label="form">
      {children}
    </StyledForm>
  );
}
