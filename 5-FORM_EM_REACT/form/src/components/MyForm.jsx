import { useState } from "react";
import "./MyForm.css";

const MyForm = ({user}) => {
  
  const [name, setName] = useState(user? user.name: '')
  const [email, setEmail] = useState(user? user.email: '')
  const [bio, setBio] = useState(user? user.bio: '')
  const [role, setRole] = useState(user? user.role: '')

  const handleName = (e) =>{
    setName(e.target.value)
  }
  
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('Formulário foi enviado')
    console.log(name)
    console.log(email)
    console.log(bio)
    console.log(role)
    setName('')
    setEmail('')
    setBio('')
    setRole('')
  }

  return (
    <div>
      <h1>Forms </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Nome: </label>
          <input 
          type="text"
          name="name"
          placeholder="Digite seu nome..."
          onChange={handleName}
          value={name}
          />
        </div>
        <label>
            <span>E-mail</span>
            <input 
            type="email" 
            name="email" 
            placeholder="Digite seu email.."
            value={email} />
        </label>
        <label>
          <span>Bio</span>
          <textarea 
          type="text"
          name="bio"
          placeholder="Digite sua Bio aqui..."
          onChange={(e) => setBio(e.target.value)}
          value={bio}
          ></textarea>
        </label>
        <label>
          <span>Função no Sistema</span>
          <select 
          name="role" 
          onChange={(e) => setRole(e.target.value)}
          value={role}
          >
            <option value="user"> Usuário </option>
            <option value="editor"> Editor </option>
            <option value="admin"> Administrador </option>
          </select>
        </label>
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default MyForm;
