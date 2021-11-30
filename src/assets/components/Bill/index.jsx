/* eslint-disable no-unused-vars */
import React from 'react';

import { InputConteiner } from './style';
import dollar from '../../images/icon-dollar.svg';

import { TotalConsumer } from '../../Contexts/TotalContext';

function Bill() {
  const { billValues, setBillValue } = TotalConsumer();

  return (
    <InputConteiner image={dollar}>
      <label>Bill</label>
      <input
        type="number"
        className="input"
        placeholder="0"
        onChange={(event) => {
          setBillValue(Math.abs(parseFloat(event.target.value)));
        }}
      />
    </InputConteiner>
  );
}

export { Bill };
