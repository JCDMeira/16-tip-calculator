import React from 'react';

import { InputConteiner } from './style';
import dollar from '../../images/icon-dollar.svg';

import { TotalConsumer } from '../../Contexts/TotalContext';

function Bill() {
  // eslint-disable-next-line no-unused-vars
  const { billValue, setBillValue, setReset } = TotalConsumer();

  return (
    <InputConteiner image={dollar}>
      <label>Bill</label>
      <input
        type="number"
        className="input"
        placeholder="0"
        min="0"
        step="0.01"
        value={billValue === 0 ? '' : billValue}
        onChange={(event) => {
          setBillValue(Math.abs(parseFloat(event.target.value)));
          setReset(true);
        }}
      />
    </InputConteiner>
  );
}

export { Bill };
