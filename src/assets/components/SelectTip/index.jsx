/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from '../Button';

import { TipConteiner } from './style';

function SelectTip() {
  const tipValues = [5, 10, 15, 25, 50];

  return (
    <TipConteiner>
      <label>Select Tip %</label>
      <div className="allTips">
        {tipValues.map((value, index) => {
          return <Button value={value} key={index} />;
        })}
        <input type="number" className="input" placeholder="Custom" />
      </div>
    </TipConteiner>
  );
}

export { SelectTip };
