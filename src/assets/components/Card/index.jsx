import React from 'react';
import { MyInput } from '../MyInput';

import { CardConteiner } from './style';

function Card() {
  return (
    <CardConteiner>
      <MyInput>Bill</MyInput>
    </CardConteiner>
  );
}

export { Card };
