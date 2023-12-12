import { useState } from 'react'
export default function Produto() {
    const [modelo, setModelo] = useState('')
    const [ano, setAno] = useState('')
    const [marca, setMarca] = useState('')

    function salvar() {
        let prod = {modelo,ano, marca}
        fetch('https://localhost:7189/carro',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(prod)
            }
        )
    }

    return (
        <div className="container">
            <h1 className="text-center mt-4">Cadastrar Novo Carro</h1>
            <label className="form-label">Informe Modelo</label>
            <input
                className="form-control"
                type="text"
                placeholder="informe Modelo"
                value={modelo}
                onChange={(txt) => setModelo(txt.target.value)}
            />
            <label className="form-label">Informe Ano</label>
            <input
                className="form-control"
                type="text"
                placeholder="informe ano"
                value={ano}
                onChange={(txt) => setAno(txt.target.value)}
            />

            <label className="form-label">Informe Marca</label>
            <input
                className="form-control"
                type="text"
                placeholder="informe email"
                value={marca}
                onChange={(txt) => setMarca(txt.target.value)}
            />
            <button
                className="btn btn-primary mt-2"
                onClick={salvar}
            >Gravar</button>
        </div>
    )
}