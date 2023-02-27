import { Link } from "react-router-dom";
import { useData } from "../hook/useData";
import "./Home.css";

function Home() {
  const url = "http://localhost:3000/products";

  const { data } = useData(url);

  console.log(data);

  return (
    <div>
      <h1>Produtos</h1>
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
  );
}

export default Home;
