import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

export const SubmitButton = ({
  type,
  disabled,
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      Ohhhoooo 🍻
    </StyledButton>
  );
};
