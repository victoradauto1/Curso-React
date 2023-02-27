import React from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../hook/useData'
import { Link } from 'react-router-dom'

function Product() {

    const {id} = useParams()

    const url = "http://localhost:3000/products/"+ id

    const { data: product } = useData(url);

    console.log(product)

  return (
    <div>
       <h2>{product.name}</h2>
       <p>R$ {product.price}</p>
       <Link to={`/products/${product.id}/info`}> Mais Informações </Link>
    </div>
  )
}

export default Product