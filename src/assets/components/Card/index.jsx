import React from 'react';

import { Bill } from '../Bill';
import { SelectTip } from '../SelectTip';
// import { NumberOfPeople } from '../NumberOfPeople';

import { CardConteiner } from './style';

function Card() {
  return (
    <CardConteiner>
      <Bill />
      <SelectTip />
      {/* <NumberOfPeople /> */}
    </CardConteiner>
  );
}

export { Card };
