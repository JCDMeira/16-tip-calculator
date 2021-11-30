/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useEffect } from 'react';
import P from 'prop-types';

const TotalContext = createContext();

const TotalProvider = ({ children }) => {
  const [billValue, setBillValue] = useState(0);

  useEffect(() => {
    console.log(billValue);
  }, [billValue]);

  return (
    <TotalContext.Provider value={{ billValue, setBillValue }}>
      {children}
    </TotalContext.Provider>
  );
};

const TotalConsumer = () => useContext(TotalContext);

TotalProvider.propTypes = {
  children: P.object.isRequired,
};

export { TotalContext, TotalProvider, TotalConsumer };
