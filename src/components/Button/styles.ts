import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 13px 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.3px;
  color: #ffffff;
  background-color: #2ed2c9;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.01);
  }
  &:disabled {
    opacity: 0.5;
    transform: none;
    cursor: not-allowed;
  }
`;
export { StyledButton };
