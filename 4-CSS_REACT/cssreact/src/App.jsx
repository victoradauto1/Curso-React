
import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {

const [change, setChange] = useState(false)


const changeEvent =()=>{
  change == false? setChange(true): setChange(false)
}


  return <div className='app'>
    <h1>React com CSS</h1>
    <MyComponent/>
    <p>Este é o parágrafo do App</p>
    <p className={change == false? "green": "blue"}> Este parágrafo séra dinâmico</p>
    <button onClick={changeEvent}> Clique para mudar os tons da frase</button>
  </div>
}

export default App
