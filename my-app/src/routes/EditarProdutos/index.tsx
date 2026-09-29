import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { TipoProduto } from "../../types/types";

export default function EditarProdutos() {
  // Para alterar o título da página:
  document.title = "Editar Produtos";

  const { id } = useParams<{ id: string }>();

  const [produto, setProduto] = useState<TipoProduto>({ id: "", nome: "", preco: 0, descricao: "", avatar: "" });

  useEffect(() => {

    const carregaProduto = async () => {

      try {
        // const response = await fetch("http://localhost:3001/produtos/"+id);
        const response = await fetch(`http://localhost:3001/produtos/${id}`);
        // response = promise

        //Tratamento de erro
        if (!response.ok) {
          throw new Error(
            `Erro na listagem dos produtos: ${response.status} - ${response.statusText}`,
          );
        }
        //Sucesso
        const data: TipoProduto[] = await response.json();
        setProduto(data);
      } catch (error) {
        console.error(error);
      }
    };

    carregaProduto();

  }, []);

  return (
    <main>
      <h2>Editar Produtos</h2>
      <h1>{id}</h1>
      <div>
        <form>
          <fieldset>
            <legend>Dados do Produto</legend>
            <div>
                <label htmlFor="nome">Nome do Produto:</label>
                {/* Utilizando '...' spread */}
                <input type="text" name="nome" id="nome" value={produto.nome} onChange={(e) => setProduto({...produto, nome:e.target.value})} />
            </div>
            <div>
              <label htmlFor="preco">Preço do Produto:</label>
              <input type="number" name="preco" id="preco" value={produto.preco} onChange={(e) => setProduto({...produto, preco:parseFloat(e.target.value)})} />
            </div>
            <div>
              <label htmlFor="descricao">Descrição do Produto:</label>
              <input name="descricao" id="descricao" value={produto.descricao} onChange={(e) => setProduto({...produto, descricao:e.target.value})}></input>
            </div>
            <div>
              <label htmlFor="avatar">Avatar do Produto:</label>
              <figure>
                <img src={produto.avatar} alt={produto.nome} width={100} />
              </figure>
            </div>
            <div>
              <button type="button">Atualizar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
