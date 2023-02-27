import React from 'react'

    const CardDetails = ({brand, km, color, age, newCar}) => {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Kilometragem: {km}</li>
            <li>Cor: {color}</li>
            <li>Marca: {age}</li>
        </ul>
        { newCar? <p>Novo</p> : <p>Usado</p>}
    </div>
  )
}

export default CardDetails