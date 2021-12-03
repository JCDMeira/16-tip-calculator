import React, { createContext, useContext, useState, useEffect } from 'react';
import P from 'prop-types';

// @ Um contexto com nome AppContext é criado, a partir do createContext
const TotalContext = createContext();

const TotalProvider = ({ children }) => {
  const [billValue, setBillValue] = useState(0);
  const [people, setPeople] = useState(0);
  const [error, setError] = useState(false);
  const [tipValue, setTipValue] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (
      billValue !== 0 &&
      !isNaN(billValue) &&
      people !== 0 &&
      !isNaN(people)
    ) {
      setTipAmount(() => {
        let tipAmountCalc = (billValue / people) * (tipValue / 100);
        return parseFloat(tipAmountCalc).toFixed(2);
      });
      setTotal(() => {
        let totalAmount = billValue / people + parseFloat(tipAmount);
        return parseFloat(totalAmount).toFixed(2);
      });
    } else {
      setTotal('0.00');
      setTipAmount('0.00');
    }
  }, [billValue, people, tipValue, tipAmount]);

  useEffect(() => {
    if ((billValue > 0 && people === 0) || (billValue > 0 && isNaN(people))) {
      setError(true);
    } else {
      setError(false);
    }
  }, [billValue, people]);

  return (
    // @ Aqui se provém o contexto, passando os valores que esse contexto irá sustentar.
    // @ esses valores serão visivéis para todos os filhos do contexto (expresso em index.js)

    <TotalContext.Provider
      value={{
        billValue,
        setBillValue,
        people,
        setPeople,
        error,
        setError,
        tipValue,
        setTipValue,
        tipAmount,
        setTipAmount,
        total,
        setTotal,
        reset,
        setReset,
      }}
    >
      {children}
    </TotalContext.Provider>
  );
};

/*
  @ Cria o consumidor do contexto, para acessa o contexto teria que importar o
  @ useContext no lugar de uso, então usar algo como :
  ? const { valorPassado1, valorPassado2 } = useContext(contextoCriado);
  @ mas ao invés disso se o contexto com uma arrow function, podendo
  @ consumir diretamente ao usar a constante que recebe o valor.
  @ ficando com :
  ? const {valorPassado1, valorPassado2} = useGlobalContext();
*/

const TotalConsumer = () => useContext(TotalContext);

TotalProvider.propTypes = {
  children: P.object.isRequired,
};

export { TotalContext, TotalProvider, TotalConsumer };
