import React, { createContext, useContext } from 'react';
import P from 'prop-types';

const TotalContext = createContext();

const TotalProvider = ({ children }) => {
  return <TotalContext.Provider>{children}</TotalContext.Provider>;
};

const TotalCosumer = () => useContext(TotalContext);

TotalProvider.propTypes = {
  children: P.object.isRequired,
};

export { TotalContext, TotalProvider, TotalCosumer };
