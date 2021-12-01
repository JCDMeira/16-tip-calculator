/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useEffect } from 'react';
import P from 'prop-types';

const TotalContext = createContext();

const TotalProvider = ({ children }) => {
  const [billValue, setBillValue] = useState(0);
  const [people, setPeople] = useState(0);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (
      billValue !== 0 &&
      !isNaN(billValue) &&
      people !== 0 &&
      !isNaN(people)
    ) {
      setTotal(() => {
        let totalAmount = billValue / people;
        return parseFloat(totalAmount).toFixed(2);
      });
    } else {
      setTotal('0.00');
    }
  }, [billValue, people]);

  useEffect(() => {
    if ((billValue > 0 && people === 0) || (billValue > 0 && isNaN(people))) {
      setError(true);
    } else {
      setError(false);
    }
  }, [billValue, people]);

  return (
    <TotalContext.Provider
      value={{
        billValue,
        setBillValue,
        people,
        setPeople,
        error,
        setError,
        total,
        setTotal,
      }}
    >
      {children}
    </TotalContext.Provider>
  );
};

const TotalConsumer = () => useContext(TotalContext);

TotalProvider.propTypes = {
  children: P.object.isRequired,
};

export { TotalContext, TotalProvider, TotalConsumer };
