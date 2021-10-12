import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
  html,
  body {
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

`;
