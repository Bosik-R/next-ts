import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body, 
  button {
    padding: 0;
    margin: 0;
    font-family: 'Rubik', sans-serif;
  }

  a {
	  color: inherit;
	  text-decoration: none;
  }

  * {
	  box-sizing: border-box;
  }

  ::-webkit-scrollbar { 
display: none; 
}
`;
