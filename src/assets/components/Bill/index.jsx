import React from 'react';

import { InputConteiner } from './style';
import dollar from '../../images/icon-dollar.svg';

function Bill() {
  return (
    <InputConteiner image={dollar}>
      <label>Bill</label>
      <input type="number" className="input" placeholder="0" />
    </InputConteiner>
  );
}

export { Bill };
