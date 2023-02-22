import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface SubmitButtonProps {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  isDisabled: boolean;
}

export const SubmitButton = ({ type, isDisabled }: SubmitButtonProps) => {
  return (
    <StyledButton type={type} disabled={isDisabled}>
      Ohhhoooo 🍻
    </StyledButton>
  );
};
