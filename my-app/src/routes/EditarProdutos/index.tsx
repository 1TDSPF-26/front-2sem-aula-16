import { useParams } from "react-router";
import type { tipoProduto } from "../../Types/types";
import { useEffect, useState } from "react";




export default function EditarProdutos() {
  // Para alterar o título da página:
  document.title = "Editar Produtos";

  const { id } = useParams<string>();
  const [produto, setProdutos] = useState<tipoProduto>({ id: "", nome: "", preco: 0, descricao: "", avatar: "" });

  useEffect(() => {


    const carregarProduto = async () => {
      try {
        const response = await fetch(`http://localhost:3001/produtos/${id}`);
        if (!response.ok) {
          throw new Error("Erro na listagem dos Produtos");
        }
        const data: tipoProduto = await response.json();

        setProdutos(data);

      } catch (error) {
        console.log(error);
      }
    }
    carregarProduto();

  }, [])

  return (
    <main>
      <h2>Editar Produtos Lindos</h2>
      <h1>{id}</h1>
      <div>
        <form >
          <fieldset>
            <legend>Dados do Produto:</legend>
            <div>
              <label htmlFor="nome">Nome Produto</label>
              <input type="text" name="nome" id="nome" value={produto.nome} onChange={(e) => setProdutos({ ...produto, nome: e.target.value })} />
            </div>
            <div>
              <label htmlFor="preco">Preço Produto</label>
              <input type="number" step={0.1} name="preco" id="nome" value={produto.preco} onChange={(e) => setProdutos({ ...produto, preco:parseFloat( e.target.value )})} />
            </div>
            <div>
              <label htmlFor="descricao">Descricao Produto</label>
              <input type="text" name="descricao" id="nome" value={produto.descricao} onChange={(e) => setProdutos({ ...produto, descricao: e.target.value })} />
            </div>
            <div>
              <label htmlFor="avatar">Avatar Produto</label>
              <figure>
                <img src={produto.avatar} alt={produto.nome} />
              </figure>
            </div>
          </fieldset>
        </form>
      </div>

    </main>
  );
}
