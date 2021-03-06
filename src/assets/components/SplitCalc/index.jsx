import React from 'react';
import { TotalConsumer } from '../../Contexts/TotalContext';

import { SplitConteiner } from './style';

function SplitCalc() {
  const {
    total,
    tipAmount,
    reset,
    setBillValue,
    setPeople,
    setTipValue,
    setReset,
  } = TotalConsumer();

  return (
    <SplitConteiner reset={reset}>
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

      <button
        disabled={!reset}
        onClick={() => {
          setBillValue(0);
          setPeople(0);
          setTipValue(0);
          setReset(false);
        }}
      >
        RESET
      </button>
    </SplitConteiner>
  );
}

export { SplitCalc };
