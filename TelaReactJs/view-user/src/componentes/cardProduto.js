import { Link, useNavigate } from 'react-router-dom'
export default function CardProduto({ user }) {
    const navigate = useNavigate()

    function excluir(){
        fetch(`https://localhost:7189/user/${user.id}`,
        {
            method:'DELETE'
        }
        )
        .then(data => {
            alert('Usuario excluido com sucesso')
            navigate('/')
        })
        .catch((error)=> alert(error))
    }
    return (
        <div className="card col-sm-3 m-3 p-3">
            <h3 className="text-center">user: {user.id} </h3>
            <hr />
            <p><b>Name:</b>  {user.name}</p>
            <p><b>cpf:</b> {user.cpf}</p>
            <p><b>email:</b> {user.email}</p>

            <div className="d-flex justify-content-between">
               <Link to={`/user/editar/${user.id}`}><button className="btn btn-primary">Editar</button></Link> 
                <button 
                   className="btn btn-danger"
                   onClick={excluir}
                   >Excluir</button>
            </div>
        </div>

    )
}