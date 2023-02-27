import React from "react";
import { useCounterContext } from '../hooks/useCounterContext'

export const Products = () => {

  const { counter, setCounter } = useCounterContext();

  return (
    <div>
      <h2>About</h2>

      <p>Valor do Contador: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Acrescentar</button>
    </div>
  );
};
