import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


export default function EditaProduto() {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    
    const { iduser } = useParams()
    
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`https://localhost:7189/user/${iduser}`)
        .then(data => data.json())
        .then(response => {
          setName(response.name)
          setCpf(response.cpf)
          setEmail(response.email)
        })
    },[])

    function salvar() {
        let prod = {id: iduser, name, cpf, email}
        fetch(`https://localhost:7189/user/${iduser}`,
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
            <h1 className="text-center mt-4">Editar ID: { iduser } </h1>
            <label className="form-label">Informe descrição</label>
            <input
                className="form-control"
                type="text"
                placeholder="informe nome"
                value={name}
                onChange={(txt) => setName(txt.target.value)}
            />
            <label className="form-label">Informe cpf</label>
            <input
                className="form-control"
                type="text"
                placeholder="informe valor"
                value={cpf}
                onChange={(txt) => setCpf(txt.target.value)}
            />

            <label className="form-label">Informe email</label>
            <input
                className="form-control"
                type="text"
                placeholder="informe email"
                value={email}
                onChange={(txt) => setEmail(txt.target.value)}
            />
            <button
                className="btn btn-primary mt-2"
                onClick={salvar}
            >Gravar</button>
        </div>
    )
}