import React from 'react';
import { GlobalStyle, Conteiner } from './Global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <div className="splitter">
          <h1>Splitter</h1>
        </div>
      </Conteiner>
    </>
  );
}

export default App;
