// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'

import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'


export const Home = () => {

  const { counter, setCounter } = useCounterContext();

  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) =>{
    dispatch({type: color})

  }

  return (
    <div>
      <h2 style={{color: color}}>Home</h2>
      <p>Valor do Contador: {counter}</p>
      <button onClick={()=>setCounter( counter + 1)}>Acrescentar</button>
      <div>
        <button onClick={()=>setTitleColor("RED")}>Vermelho</button>
        <button onClick={()=>setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}
