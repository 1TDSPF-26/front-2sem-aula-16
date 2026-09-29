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

        //TRATAMENTO DE ERRO
        if (!response.ok) {
          throw new Error(
            `Erro na listagem dos produtos: ${response.status} - ${response.statusText}`,
          );
        }

        //SUCESSO
        const data: TipoProduto = await response.json();
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
            <legend>Dados do produto:</legend>
            <div>
              <label htmlFor="nome">Nome do produto </label>
              <input type="text" name="nome" id="nome" value={produto.nome} />
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
