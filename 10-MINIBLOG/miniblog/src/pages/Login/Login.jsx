import { useState, useEffect} from 'react'
import { useAuthentication } from "../../hooks/useAuthentication";
import styles from './Login.module.css'

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handleSubimit disparado")
    setError("");

    const user = {
      email,
      password,
    }

    const res = await login(user)
  }

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.login}>
       <h1>Entrar</h1>
      <p>Faça o login para entrar no sistema:</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira a senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {!loading && <button className="btn">Entrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}
