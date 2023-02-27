import React from 'react'
import { useParams } from 'react-router-dom'



function Info() {

    const { id } = useParams();

  return (
    <div>
        <h1>Mais Informações do produto {3}</h1>
    </div>
  )
}

export default Info