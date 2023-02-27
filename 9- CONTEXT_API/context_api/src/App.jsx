import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'

function App() {

  return (
    <div className="App">
      <h1>Context API</h1>
     <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products />}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
