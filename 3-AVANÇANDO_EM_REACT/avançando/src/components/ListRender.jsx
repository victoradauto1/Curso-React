import React from 'react';
import { useState } from 'react';


const ListRender = () => {

  const [list] = useState(['Matheus', 'Pedro', 'Josias']);

  const [users, setUsers] = useState(
    [{id: 1, name: 'Victor', age:40}, 
     {id: 2, name: 'Pedro', age:41},
     {id: 3, name: 'Allan', age: 21}]
  )

  const RandomDelete = () =>{
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers)=> {

      return prevUsers.filter((users)=> randomNumber !== users.id)

    })
    
  }

  return (
    <div>
      <ul>
        {list.map((item, i)=>(<li key={i}>{item}</li>))}
      </ul>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={RandomDelete}> Deletando Aleatóriamente</button>
    </div>
  )
}

export default ListRender