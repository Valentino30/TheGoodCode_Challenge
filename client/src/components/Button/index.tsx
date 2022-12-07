import { StyledButton } from "./styles";

type ButtonProps = {
  id?: string;
  children: string;
  disabled?: boolean;
  onClick?: (id: string) => void;
};

export default function Button({
  id,
  onClick,
  disabled,
  children,
}: ButtonProps) {
  const handleClick = () => {
    if (onClick && id) onClick(id);
  };

  return (
    <StyledButton onClick={handleClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
}
