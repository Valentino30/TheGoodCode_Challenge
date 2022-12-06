import { StyledButton } from "./styles";

type ButtonProps = {
  id: string;
  name: string;
  onClick: (id: string) => void;
};

export default function Button({ id, name, onClick }: ButtonProps) {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <StyledButton onClick={handleClick} aria-label="button">
      {name}
    </StyledButton>
  );
}
