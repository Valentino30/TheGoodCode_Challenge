import { StyledButton } from "./styles";

type ButtonProps = {
  id: string;
  name: string;
  disabled: boolean;
  onClick: (id: string) => void;
};

export default function Button({ id, name, onClick, disabled }: ButtonProps) {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <StyledButton onClick={handleClick} disabled={disabled} aria-label="button">
      {name}
    </StyledButton>
  );
}
