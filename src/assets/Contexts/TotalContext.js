/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useEffect } from 'react';
import P from 'prop-types';

const TotalContext = createContext();

const TotalProvider = ({ children }) => {
  const [billValue, setBillValue] = useState(0);
  const [total, setTotal] = useState(0);

  console.log();

  useEffect(() => {
    if (billValue !== 0 && !isNaN(billValue)) {
      setTotal(parseFloat(billValue).toFixed(2));
    } else {
      setTotal('0.00');
    }
  }, [billValue]);

  return (
    <TotalContext.Provider value={{ billValue, setBillValue, total, setTotal }}>
      {children}
    </TotalContext.Provider>
  );
};

const TotalConsumer = () => useContext(TotalContext);

TotalProvider.propTypes = {
  children: P.object.isRequired,
};

export { TotalContext, TotalProvider, TotalConsumer };
