import React from 'react';

import { CardConteiner } from './style';

import { Bill } from '../Bill';
import { SelectTip } from '../SelectTip';
import { NumberOfPeople } from '../NumberOfPeople';

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
