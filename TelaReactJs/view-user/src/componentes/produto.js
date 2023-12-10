import { useState } from 'react'
export default function Produto() {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')

    function salvar() {
        let prod = {name,cpf, email}
        fetch('https://localhost:7189/user',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(prod)
            }
        )
    }

    return (
        <div className="container">
            <h1 className="text-center mt-4">Novo usuario</h1>
            <label className="form-label">Informe nome</label>
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
                placeholder="informe cpf"
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