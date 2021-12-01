import React from 'react';
import P from 'prop-types';

import { ButtonConteiner } from './style';

function Button({ value, onClick }) {
  return <ButtonConteiner onClick={onClick}>{value}%</ButtonConteiner>;
}

Button.propTypes = {
  value: P.number.isRequired,
  onClick: P.func.isRequired,
};
export { Button };
