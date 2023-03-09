import styles from "./CreatePost.module.css";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useState } from "react";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState([]);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.create_post}>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quiser e compartilhe seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Pense num bom título..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa o seu post"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
       <label>
        <span>Conteúdo:</span>
        <textarea
          type="text"
          name="body"
          required
          placeholder="Insira o conteúdo do post"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
       </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </label>
        <button className="btn">Cadastrar</button>
        {/* {!loading && <button className="btn">Cadastrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  );
};
