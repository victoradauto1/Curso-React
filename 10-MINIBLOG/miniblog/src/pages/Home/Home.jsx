import styles from "./Home.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { PostDetails } from "../../components/PostDetails/PostDetails";

export const Home = () => {
  const [query, setQuery] = useState("");
  const { document, loading } = useFetchDocument(
    "posts",
    "8Kawj9I6d509jmdK57xk"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setposts] = useState(null);

  useEffect(() => {
    if (document !== null) {
      console.log("o valor de document é", document);
      console.log("o valor de posts é:", posts);
      setposts(Object.values(document));
      setIsLoading(false);
    }
  }, [document]);

 

  return (
    <div className={styles.home}>
      <h1>Veja nossos posts mais recentes</h1>
      <form onSubmit={(e) => e.preventDefault()} className={styles.search_form}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && (
        <div>
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>Não foram encontrados posts</p>
              <Link to="/posts/create" className="btn">
                Criar primeiro post
              </Link>
            </div>
          )}
          {/* {posts &&
            posts.map((post) => <PostDetail key={post.id} post={post} />)} */}
        </div>
      )}
    </div>
  );
};
