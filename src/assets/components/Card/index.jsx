import React from 'react';

import { Bill } from '../Bill';
// import { NumberOfPeople } from '../NumberOfPeople';

import { CardConteiner } from './style';

function Card() {
  return (
    <CardConteiner>
      <Bill />
      {/* <NumberOfPeople /> */}
    </CardConteiner>
  );
}

export { Card };
