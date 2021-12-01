import React from 'react';

import { InputConteiner } from './style';
import person from '../../images/icon-person.svg';
import { TotalConsumer } from '../../Contexts/TotalContext';

function NumberOfPeople() {
  const { setPeople, error } = TotalConsumer();

  return (
    <InputConteiner image={person} errorState={error}>
      <label>Number of People</label>
      <label className="warning">Can&apos;t be zero</label>
      <input
        type="number"
        className="input"
        placeholder="0"
        min="1"
        onChange={(event) => {
          setPeople(Math.abs(parseInt(event.target.value)));
        }}
      />
    </InputConteiner>
  );
}

export { NumberOfPeople };
