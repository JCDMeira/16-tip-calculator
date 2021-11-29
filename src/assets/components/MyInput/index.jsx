import React from 'react';
import P from 'prop-types';

import { InputConteiner } from './style';
import dollar from '../../images/icon-dollar.svg';

function MyInput({ children }) {
  return (
    <InputConteiner image={dollar}>
      <label>{children}</label>
      <input type="number" className="input" placeholder="0" />
    </InputConteiner>
  );
}

MyInput.propTypes = {
  children: P.string.isRequired,
};

export { MyInput };
