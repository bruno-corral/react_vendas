import { useState } from "react";
import { Vendedor } from "../types/Vendedor";
import { api } from "../utils/api";

export const FormUmVendedor = () => {
    const [idVendedor, setIdVendedor] = useState('');
    const [listaVendasVendedores, setListaVendasVendedores] = useState<Vendedor[]>([]);

    const pesquisarVendasDeUmVendedor = async () => {
        if (idVendedor === '') {
            alert("Digite um ID de um Vendedor!");
            return;
        }

        const response = await api.get(`vendedores/${idVendedor}`);
        setListaVendasVendedores(response.data.vendas);
    }

    return (
        <div>
            <div className="flex">
                <div className="my-4">
                    <h1 className="text-3xl">Busque as vendas de um vendedor</h1>
                    <input 
                        type="number" 
                        placeholder="Digite o ID do vendedor"
                        className="p-2 rounded-md my-4 text-black"
                        value={idVendedor}
                        onChange={e => setIdVendedor(e.target.value)}
                    />
                    <button 
                        className="bg-blue-500 rounded-md p-2 ml-2 hover:opacity-90 border border-white"
                        onClick={pesquisarVendasDeUmVendedor}
                    >
                        Pesquisar
                    </button>
                </div>
            </div>

            {listaVendasVendedores !== undefined && listaVendasVendedores.length <= 0 &&
                <p>Este vendedor não possui vendas!</p>
            }

            {listaVendasVendedores === undefined ?
                <p>Este vendedor não foi cadastrado!</p>
            :
                <ul>
                    {listaVendasVendedores.map(item =>
                        <li key={item.id}>Venda: {item.id} - R$ {item.valor_venda} - Data da Venda: {item.data_venda === null ? 'data não especificada': item.data_venda}</li>   
                    )}
                </ul>
            }

        </div>
    );
}