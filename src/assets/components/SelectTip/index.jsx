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
        <Button value={5} />
      </div>
      {/* <input type="number" className="input" placeholder="0" /> */}
    </TipConteiner>
  );
}

export { SelectTip };
