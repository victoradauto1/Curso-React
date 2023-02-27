import './App.css'
import CarDetails from './components/CarDetails'

function App() {

  const cars = [
    {id: 1, marca:"Ford" , modelo:"Focus" , ano: 2016 , cor:"Branco" , km: 160000},
    {id: 2, marca:"Fiat" , modelo:"Siena" , ano:2013 , cor:"Vermelho" , km:504000},
    {id: 3, marca:"Ford" , modelo:"Bronco", ano:2022 , cor:"Ciano" , km:0},
    {id: 4, marca:"Nissan" , modelo:"Sentra" , ano:2017 , cor:"Prata" , km:230000},
    {id: 5, marca:"Hyundai" , modelo:"Creta" , ano:2022 , cor:"Preto" , km:0}
  ]


  return (
    <div className="App">
    <div>
    {cars.map((car)=>(
    <CarDetails 
    key={car.id}
    brand={car.marca} 
    model={car.modelo} 
    year={car.ano}
    color={car.cor}
    km={car.km} />))}
    </div>
      
    </div>
  )
}

export default App
