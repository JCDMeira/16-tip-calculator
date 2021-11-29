import React from 'react';
import P from 'prop-types';

import { InputConteiner } from './style';

function MyInput({ children }) {
  return (
    <InputConteiner>
      <h3>{children}</h3>
      <div className="myInput">
        <p>$</p>
        <input type="number" />
      </div>
    </InputConteiner>
  );
}

MyInput.propTypes = {
  children: P.string.isRequired,
};

export { MyInput };
