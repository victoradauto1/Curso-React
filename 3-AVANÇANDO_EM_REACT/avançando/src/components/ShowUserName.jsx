import React from 'react'

const ShowUserName = (props) => {
  return (
    <div> <h2>O nome do usuário é {props.name} e sobrenome {props.sobrenome}</h2> </div>
  )
}

export default ShowUserName