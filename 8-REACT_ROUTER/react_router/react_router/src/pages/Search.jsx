import { Link, useSearchParams } from "react-router-dom";
import { useData } from "../hook/useData";

function Search() {

    const [searchParams ]= useSearchParams();

    const url = "http://localhost:3000/products?" + searchParams

    const { data } = useData(url); 

  return (
    <div>
        <h1>Resultados disponíveis</h1>
        <ul className="products">
        {data.map((set) => (
          <li key={set.id}>
            <h2>{set.name}</h2>
            <p>R$ {set.price}</p>
            <Link to={`products/${set.id}`}> Detalhes </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search