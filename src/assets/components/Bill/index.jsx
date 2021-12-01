import React from 'react';

import { InputConteiner } from './style';
import dollar from '../../images/icon-dollar.svg';

import { TotalConsumer } from '../../Contexts/TotalContext';

function Bill() {
  const { setBillValue } = TotalConsumer();

  return (
    <InputConteiner image={dollar}>
      <label>Bill</label>
      <input
        type="number"
        className="input"
        placeholder="0"
        min="0"
        step="0.01"
        onChange={(event) => {
          setBillValue(Math.abs(parseFloat(event.target.value)));
        }}
      />
    </InputConteiner>
  );
}

export { Bill };
