import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Rye', cursive;
    user-select: none;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Rye', cursive;
  }
`;

export default GlobalStyle;