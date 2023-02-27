
const UserDetails = ({nome, idade, prof, sexo, estado_civil}) => {
  return (
    <div>
        <h2>Dados do usuário</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {prof}</li>
            <li>Sexo: {sexo}</li>
            <li>Estado Civil: {estado_civil}</li>
            {idade >= 18? <li> Pode tirar Habilitação para dirigir</li> : <li>NÃO pode tirar Habilitação para dirigir</li>}
            
        </ul>

    </div>
  )
}

export default UserDetails