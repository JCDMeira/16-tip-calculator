import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --strong-cyan: #26C0AB;
  --very-dark-cyan:  #00494D;
  --dark-grayish-cyan: #5E7A7D;
  --dark-cyan: #7F9C9F;
  --light-cyan: #C5E4E7;
  --light-grayish-cyan: #F4FAFA;
  --white: #FFFFFF;
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

export const Conteiner = styled.div`
  width: 100%;
  height: 93.3rem;
  background: var(--light-cyan);
  padding-top: 4.1rem;

  .splitter {
    width: 100%;
    padding-left: 14.2rem;
    padding-right: 13rem;
    word-wrap: break-word;
    margin-bottom: 3.2rem;

    h1 {
      text-align: center;
      font-weight: bold;
      font-size: 2.2rem;
      line-height: 3.6rem;

      letter-spacing: 0.5em;

      color: var(--very-dark-cyan);
      text-transform: uppercase;
    }
  }
`;
