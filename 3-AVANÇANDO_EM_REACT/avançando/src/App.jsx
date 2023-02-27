import Img from './assets/img _1.jpg'
import CardDetails from './components/CardDetails'
import ConditionalRender from './components/ConditionalRender'
import Container from './components/Container'
import ListRender from './components/ListRender'
import ShowUserName from './components/showUserName'
import FunctionComponent from './components/FunctionComponent'
import UserDetails from './components/UserDetails'

function App() {
  
  const name = "Victor"

  const ShowMessage = () =>{
    console.log("Função disparada!")
  }

  const cars = [
    {id: 1, brand: "Ferrari" , color: "Vermelha", age: 2016, km: 234789 , newCar:false },
    {id: 2, brand: "Volvo", color:"Preta" , age: 2019 , km: 123654,newCar: false },
    {id: 3, brand: "BMW", color:"Cinza" , age: 2022, km:0 , newCar: true } 
  ]

  const people = [
    {id: 1, nome: 'Maria' , idade: 32 , estado_civil: 'casada', prof: 'enfermeira' , sexo:'feminino' },
    {id: 2, nome: 'Paulo', idade:17 , estado_civil:'solteiro' , prof: 'estudandte' , sexo: 'masculino' },
    {id: 3, nome: 'Hugo', idade: 38 , estado_civil:'solteiro' , prof: 'programador' , sexo:'masculino' },
    {id: 4, nome: 'Pedro Paulo', idade: 41 , estado_civil: 'divorciado' , prof: 'contador' , sexo: 'masculino' },
    {id: 5, nome: 'Ana Paula' , idade: 47 , estado_civil: 'casada' , prof:'professora', sexo: 'feminino' },
    {id: 6, nome: 'Guimoar', idade: 82 , estado_civil: 'viúva' , prof:'aposentada' , sexo:  'feminino' }
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagens em public */}
      <div>
        <img src="../public/img _2.jpg" alt="imagem1" />
      </div>
      {/* Imagens em Assets */}
      <div>
        <img src={Img} alt="paisagem" />
      </div>
      <div>
        <ListRender/>
      </div>
      <div>
        <ConditionalRender/>
      </div>
      <div>
        <ShowUserName name={name} sobrenome="Adauto"/>
      </div>
      <div>
        <CardDetails brand="Honda" km={150000} color="Preto" age={2019} newCar={false}/>
        <CardDetails brand="Ford" km={0} color="Azul" age={2022} newCar={true}/>
        <CardDetails brand="Toyota" km={30000} color="Dourado" age={2020} newCar={false}/>
      </div>
      {/* renderizaçção de componentes props em loop */}
      <div>
        {cars.map((car)=>(
          <CardDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          age={car.age}
          newCar={car.newCar}
          />
        ))}
      </div>
      <div>
        <Container>
          <p>Este é o Child do Container</p>

          <p>Ese é segundo Child</p>
        </Container>

      </div>
      <div>
        <FunctionComponent fun={ShowMessage}/>
      </div>
      <div>
        {people.map((person)=>(
          <UserDetails
          key={person.id}
          nome={person.nome}
          idade={person.idade}
          prof={person.prof}
          sexo={person.sexo}
          estado_civil={person.estado_civil}
          />
        ))}
        
      </div>
    </div>
  )
}

export default App
