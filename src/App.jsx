import React from 'react';
import { GlobalStyle, Conteiner } from './Global';
import { Card } from './assets/components/Card';

function App() {
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <div className="splitter">
          <h1>Splitter</h1>
        </div>
        <Card />
      </Conteiner>
    </>
  );
}

export default App;
