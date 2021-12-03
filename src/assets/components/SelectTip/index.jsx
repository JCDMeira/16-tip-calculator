import React from 'react';
import { TotalConsumer } from '../../Contexts/TotalContext';
import { Button } from '../Button';

import { TipConteiner } from './style';

function SelectTip() {
  const tipValues = [5, 10, 15, 25, 50];

  const { setTipValue, tipValue, setReset } = TotalConsumer();

  return (
    <TipConteiner>
      <label>Select Tip %</label>
      <div className="allTips">
        {tipValues.map((value, index) => {
          return (
            <Button
              value={value}
              key={index}
              isActive={tipValue === value}
              onClick={() => {
                setTipValue(value);
                setReset(true);
              }}
            />
          );
        })}
        <input
          type="number"
          className="input"
          placeholder="Custom"
          min="0"
          onChange={(event) => {
            setTipValue(event.target.value);
          }}
        />
      </div>
    </TipConteiner>
  );
}

export { SelectTip };
