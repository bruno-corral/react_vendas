import { useState } from "react";
import { api } from "../utils/api";

export const FormVendedor = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const inserirVendedor = async () => {
        if (nome === '' || email === '') {
            alert('O nome ou e-mail não podem estar em Branco!');
            return;
        }

        const response = await api.post('vendedores/add', {
            nome, 
            email
        });

        if (response.data.data.vendedor) {
            alert("Vendedor inserido com sucesso!");
            setNome('');
            setEmail('');
        }
    }

    return (
        <div className="flex flex-col">
            <h1 className="text-3xl">Insira o nome e o e-mail do vendedor</h1>
            <input 
                type="text" 
                className="p-2 rounded-md my-4 text-black" 
                placeholder="Digite seu nome" 
                value={nome} 
                onChange={e => setNome(e.target.value)} 
            />
            <input 
                type="email" 
                className="p-2 rounded-md text-black" 
                placeholder="Digite seu e-mail" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
            />
            <button 
                className="bg-blue-500 border border-white my-3 rounded-md p-2 hover:opacity-90 cursor-pointer" 
                onClick={inserirVendedor}>
                Inserir
            </button>
        </div>
    );
}