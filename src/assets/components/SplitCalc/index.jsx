/* eslint-disable no-unused-vars */
import React from 'react';
import { TotalConsumer } from '../../Contexts/TotalContext';
import { Button } from '../Button';

import { SplitConteiner } from './style';

function SplitCalc() {
  const { total, tipAmount } = TotalConsumer();

  return (
    <SplitConteiner>
      <div className="amount">
        <div className="textAmount">
          <p>Tip Amount</p>
          <span>/ person</span>
        </div>
        <div className="valueAmount">
          <span>${tipAmount}</span>
        </div>
      </div>

      <div className="amount">
        <div className="textAmount">
          <p>Total</p>
          <span>/ person</span>
        </div>
        <div className="valueAmount">
          <span>${total}</span>
        </div>
      </div>

      <button>RESET</button>
    </SplitConteiner>
  );
}

export { SplitCalc };
