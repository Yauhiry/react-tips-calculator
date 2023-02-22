import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body, h1, h6, p, div, form, input, button {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans';
  }
  input, button {
    border: none;
  }
`;
