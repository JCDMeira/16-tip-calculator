import React from 'react';

import { Bill } from '../Bill';
import { SelectTip } from '../SelectTip';
import { NumberOfPeople } from '../NumberOfPeople';

import { CardConteiner } from './style';
import { SplitCalc } from '../SplitCalc';

function Card() {
  return (
    <CardConteiner>
      <Bill />
      <SelectTip />
      <NumberOfPeople />
      <SplitCalc />
    </CardConteiner>
  );
}

export { Card };
