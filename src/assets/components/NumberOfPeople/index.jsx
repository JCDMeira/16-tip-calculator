import React from 'react';

import { InputConteiner } from './style';
import person from '../../images/icon-person.svg';
import { TotalConsumer } from '../../Contexts/TotalContext';

function NumberOfPeople() {
  const { people, setPeople, error, setReset } = TotalConsumer();

  return (
    <InputConteiner image={person} errorState={error}>
      <label>Number of People</label>
      <label className="warning">Can&apos;t be zero</label>
      <input
        type="number"
        className="input"
        placeholder="0"
        min="1"
        value={people === 0 ? '' : people}
        onChange={(event) => {
          setPeople(Math.abs(parseInt(event.target.value)) || 0);
          setReset(true);
        }}
      />
    </InputConteiner>
  );
}

export { NumberOfPeople };
