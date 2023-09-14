import { useState } from "react";
import { api } from "../utils/api";

export const FormVendas = () => {
    const [idVendedor, setIdVendedor] = useState('');
    const [valorVenda, setValorVenda] = useState('');

    const inserirVenda = async () => {
        if (idVendedor === '' || valorVenda === '') {
            alert('O ID do Vendedor ou o Valor da Venda não podem estar em Branco!');
            return;
        }

        try {
            const valor_venda = valorVenda;
            const vendedor_id = idVendedor;

            const response = await api.post('venda/add', {
                valor_venda,
                vendedor_id 
            });

            if (response.data.data.venda) {
                alert("Venda inserida com sucesso!");
                setIdVendedor('');
                setValorVenda('');
            }
        } catch(error) {
            alert(`O vendedor com o ${idVendedor} não existe!`);
            return;
        }
    }

    return (
        <div>
            <h1 className="text-3xl">Insira uma nova venda</h1>
            <div className="flex">
                <input 
                    type="number" 
                    className="p-2 rounded-md my-4 text-black mr-2" 
                    placeholder="Digite o ID do Vendedor"
                    value={idVendedor} 
                    onChange={e => setIdVendedor(e.target.value)}
                />
                <input 
                    type="number" 
                    className="p-2 rounded-md my-4 text-black ml-2" 
                    placeholder="Digite um valor"
                    value={valorVenda} 
                    onChange={e => setValorVenda(e.target.value)} 
                />
                <button 
                    className="bg-blue-500 border border-white my-3 rounded-md p-2 hover:opacity-90 cursor-pointer ml-4" 
                    onClick={inserirVenda}>
                    Inserir
                </button>
            </div>
        </div>
    );
}