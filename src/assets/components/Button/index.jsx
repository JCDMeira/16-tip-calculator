import React from 'react';
import P from 'prop-types';

import { ButtonConteiner } from './style';

function Button({ value }) {
  return <ButtonConteiner>{value}%</ButtonConteiner>;
}

Button.propTypes = {
  value: P.number.isRequired,
};
export { Button };
