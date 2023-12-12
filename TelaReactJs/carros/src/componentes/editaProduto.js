import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


export default function EditaProduto() {
    const [modelo, setModelo] = useState('')
    const [ano, setAno] = useState('')
    const [marca, setMarca] = useState('')
    
    const { idcarro } = useParams()
    
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`https://localhost:7189/carro/${idcarro}`)
        .then(data => data.json())
        .then(response => {
          setModelo(response.modelo)
          setAno(response.ano)
          setMarca(response.marca)
        })
    },[])

    function salvar() {
        let prod = {id: idcarro, modelo, ano, marca}
        fetch(`https://localhost:7189/carro/${idcarro}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(prod)
            }
        )
        .then(x => navigate('/'))
        .catch(error => alert(error))
    }

    return (
        <div className="container">
            <h1 className="text-center mt-4">Editar carro: { idcarro } </h1>
            <label className="form-label">Informe Modelo</label>
            <input
                className="form-control"
                type="text"
                placeholder="informe nome"
                value={modelo}
                onChange={(txt) => setModelo(txt.target.value)}
            />
            <label className="form-label">Informe Marca</label>
            <input
                className="form-control"
                type="text"
                placeholder="informe valor"
                value={marca}
                onChange={(txt) => setMarca(txt.target.value)}
            />

            <label className="form-label">Informe Ano</label>
            <input
                className="form-control"
                type="text"
                placeholder="informe email"
                value={ano}
                onChange={(txt) => setAno(txt.target.value)}
            />
            <button
                className="btn btn-primary mt-2"
                onClick={salvar}
            >Gravar</button>
        </div>
    )
}