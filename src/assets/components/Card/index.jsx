import React from 'react';

import { CardConteiner } from './style';

import { Bill } from '../Bill';
import { SelectTip } from '../SelectTip';
import { NumberOfPeople } from '../NumberOfPeople';

import { SplitCalc } from '../SplitCalc';

function Card() {
  return (
    <CardConteiner>
      <div className="flex1">
        <Bill />
        <SelectTip />
        <NumberOfPeople />
      </div>
      <div className="flex2">
        <SplitCalc />
      </div>
    </CardConteiner>
  );
}

export { Card };
