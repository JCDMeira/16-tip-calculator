import React from 'react';
import { Card } from './assets/components/Card';
import { GlobalStyle, Conteiner } from './Global';

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
