import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --strong-cyan: #26C0AB
  --very-dark-cyan:  #00494D
  --dark-grayish-cyan: #5E7A7D
  --dark-grayish-cyan: #7F9C9F
  --light-grayish-cyan: #C5E4E7
  --light-grayish-cyan: #F4FAFA
  --white: #FFFFFF
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
  font-family: 'Space Mono';
}

`;
