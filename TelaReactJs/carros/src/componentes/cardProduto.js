import { Link, useNavigate } from 'react-router-dom'
export default function CardProduto({ user }) {
    const navigate = useNavigate()

    function excluir(){
        fetch(`https://localhost:7189/carro/${user.id}`,
        {
            method:'DELETE'
        }
        )
        .then(data => {
            alert('carro excluido com sucesso')
            navigate('/')
        })
        .catch((error)=> alert(error))
    }
    return (
        <div className="card col-sm-3 m-3 p-3">
            <h3 className="text-center">carro: {user.id} </h3>
            <hr />
            <p><b>Modelo:</b>  {user.modelo}</p>
            <p><b>Marca:</b> {user.marca}</p>
            <p><b>Ano:</b> {user.ano}</p>

            <div className="d-flex justify-content-between">
               <Link to={`/carros/editar/${user.id}`}><button className="btn btn-primary">Editar</button></Link> 
                <button 
                   className="btn btn-danger"
                   onClick={excluir}
                   >Excluir</button>
            </div>
        </div>

    )
}