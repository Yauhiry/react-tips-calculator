import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 21px 0;
  text-align: center;
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.3px;
  color: #756c6c;
  border-radius: 30px;
  &::placeholder {
    color: #756c6c99;
  }
  &:focus {
    outline: 2px solid;
    outline-color: #2ed2c9;
  }
  &[type='number'] {
    -moz-appearance: textfield;
    &:hover,
    &:focus {
      -moz-appearance: number-input;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export { StyledInput };
