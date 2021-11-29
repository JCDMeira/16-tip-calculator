import React from 'react';

import { InputConteiner } from './style';
import person from '../../images/icon-person.svg';

function NumberOfPeople() {
  return (
    <InputConteiner image={person}>
      <label>Number of People</label>
      <input type="number" className="input" placeholder="0" />
    </InputConteiner>
  );
}

export { NumberOfPeople };
