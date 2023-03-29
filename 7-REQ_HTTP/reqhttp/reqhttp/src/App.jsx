import { useState, useEffect } from 'react'
import './App.css'
import { useFetch } from './hooks/UseFetch';



const url = "http://localhost:3000/products"
function App() {
  
  const [formValues, setFormValues] = useState({});

  const {data: items, httpConfig} = useFetch(url);
  console.log(items)

   const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
    console.log(formValues)
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    
     const res = await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(formValues)
      })

      const addItem = await res.json()

      setProducts((previous)=>[...previous, addItem ])

      setFormValues({})

  }

  const deleting = async(id) =>{

    const itemID = `${url}/${id}`
    const res = await fetch(itemID, {
      method: "DELETE",
      headers: {"content-type": "application/json"},
    })

    const json = await res.json();

    FetchData();
  }
  
  return (
    <div className="App">
      <h1>Requisições</h1>
      {items && items.map((set,id)=>(
        <div key={id}>
          <h2 >{set.name}</h2>
          <p>R${set.price}</p>
          <button onClick={()=> deleting(set.id)}>Excluir Produto</button>
        </div>
      ))}
      <h2>Adicionar novo produto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Novo Produto</span>
          <input type="text" name="name" onChange={handleChange} value={formValues.name || ""}/>
        </label>
        <label>
          <span>Preço:</span>
          <input type="number" name="price" onChange={handleChange} value={formValues.price || ""}/>
        </label>
        <input type="submit" value="Adicionar"/>
      </form>
    </div>
  )
}

export default App
