import styles from "./Home.module.css"
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { PostDetails } from "../../components/PostDetails/PostDetails";


export const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading} = useFetchDocument()

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.home}>
      <h1>Veja nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando ...</p>}
        {posts && posts.map((post)=>(
          <PostDetails key={post.id} post={post}/>
        ))}
        {posts && posts.length === 0 &&(
          <div className={styles.noposts}>
            <p>Não foram encontrados Posts</p>
            <Link to="/posts/create" className="btn">Criar primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  );
};
