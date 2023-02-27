import './App.css'
import MyForm from './components/MyForm'

function App() {
  

  return (
    <div className="App">
      <MyForm user={{ name: "Josias", email: "josias@gmail.com" }}/>
    </div>
  )
}

export default App
