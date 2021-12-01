/* eslint-disable no-unused-vars */
import React from 'react';
import { TotalConsumer } from '../../Contexts/TotalContext';
import { Button } from '../Button';

import { TipConteiner } from './style';

function SelectTip() {
  const tipValues = [5, 10, 15, 25, 50];

  const { setTipValue } = TotalConsumer();

  return (
    <TipConteiner>
      <label>Select Tip %</label>
      <div className="allTips">
        {tipValues.map((value, index) => {
          return (
            <Button
              value={value}
              key={index}
              onClick={() => setTipValue(value)}
            />
          );
        })}
        <input
          type="number"
          className="input"
          placeholder="Custom"
          onChange={(event) => {
            setTipValue(event.target.value);
          }}
        />
      </div>
    </TipConteiner>
  );
}

export { SelectTip };
