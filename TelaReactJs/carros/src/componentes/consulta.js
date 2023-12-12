import { useEffect, useState } from "react"
import CardProduto from "./cardProduto"

export default function Consulta(){
    const[produtos, setProdutos] = useState([])


    function consultar(){
        fetch('https://localhost:7189/carro')
        .then(data => data.json())
        .then(response => setProdutos(response))
    }

    useEffect( ()=>{consultar()},[])

    return(
        <div className="d-flex flex-wrap  ">
            
            {
                produtos.map(user => <CardProduto user={user}/>)
            }
        </div>
    )
}