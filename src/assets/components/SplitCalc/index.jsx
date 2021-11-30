/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from '../Button';

import { SplitConteiner } from './style';

function SplitCalc() {
  return (
    <SplitConteiner>
      <div className="amount">
        <div className="textAmount">
          <p>Tip Amount</p>
          <span>/ person</span>
        </div>
        <div className="valueAmount">
          <span>$4.27</span>
        </div>
      </div>

      <div className="amount">
        <div className="textAmount">
          <p>Total</p>
          <span>/ person</span>
        </div>
        <div className="valueAmount">
          <span>$32.79</span>
        </div>
      </div>

      <button>RESET</button>
    </SplitConteiner>
  );
}

export { SplitCalc };
