import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { TotalProvider } from './assets/Contexts/TotalContext.js';

ReactDOM.render(
  <React.StrictMode>
    <TotalProvider>
      <App />
    </TotalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
