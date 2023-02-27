import React, { useState } from 'react'

const ConditionalRender = () => {

  const [condition, setCondition] = useState(false)

  return (
    <div>
    <h1>Renderização Condicional</h1>
    {condition == false ? (<p>Condição inicial</p>) : (<p>Condição Alterada</p>)}
    <button onClick={()=> {condition == false? setCondition(true) : setCondition(false)}}> Clique para alterar a Condição</button>
    </div>
  )
}

export default ConditionalRender