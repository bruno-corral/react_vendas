"use client"

import { FormVendedor } from "./components/FormVendedor";
import { FormUmVendedor } from "./components/FormUmVendedor";
import { FormVendas } from "./components/FormVendas";
import { ListaVendedores } from "./components/ListaVendedores";

const Page = () => {
  return (
    <div className="container mx-auto max-w-5xl my-5">
      <FormVendedor />
      <ListaVendedores />
      <FormVendas />
      <FormUmVendedor />
    </div>
  ); 
}

export default Page;
