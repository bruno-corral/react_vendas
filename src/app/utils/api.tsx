import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
});

// export const getVendedores = async () => {
//     const result = await api.get(`vendedores/all`);
//     return result.data;
// }

// export const postVendedor = async () => {
//     const result = await api.post(`vendedores/add`);
//     return result.data;
// }