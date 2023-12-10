import { useState } from 'react'
export default function Cadastro() {
    const[nome, setNome] = useState('maria')
    return (
        <div className="container">
            <h1 className="text-center mt-4">Novo contato</h1>
            <label className="form-label">Informe nome</label>
            <input 
                className="form-control" 
                type="text"
                placeholder="informe nome"
                value={nome}
                onChange={(txt)=>setNome(txt.target.value)}
            />
            <button className="btn btn-primary mt-2">Gravar</button>
        </div>
    )
}