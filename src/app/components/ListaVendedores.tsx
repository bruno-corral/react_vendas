import { useEffect, useState } from "react";
import { Vendedor } from "../types/Vendedor";
import { api } from "../utils/api";

export const ListaVendedores = () => {

    const [vendedores, setVendedores] = useState<Vendedor[]>([]);

    const pegarVendedores = async () => {
        const response = await api.get('vendedores/all');
        setVendedores(response.data.vendedores);
    }

    useEffect(() => {
        pegarVendedores();
    }, []);

    return (
        <div className="my-4">
            <h1 className="text-3xl my-4">Vendedores</h1>
            <ul>
                {vendedores.map(item => 
                    <li key={item.id}>Vendedor: {item.id} - {item.nome} - E-mail: {item.email} - Comissão: R$ {item.comissao == null ? '0.00' : item.comissao}</li>   
                )}
            </ul>
        </div>
    );
} 