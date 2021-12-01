import React from 'react';
import P from 'prop-types';

import { ButtonConteiner } from './style';

function Button({ value, onClick, isActive }) {
  return (
    <ButtonConteiner onClick={onClick} isActive={isActive}>
      {value}%
    </ButtonConteiner>
  );
}

Button.propTypes = {
  value: P.number.isRequired,
  onClick: P.func.isRequired,
  isActive: P.bool.isRequired,
};
export { Button };
