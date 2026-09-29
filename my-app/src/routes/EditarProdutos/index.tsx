import { useParams } from "react-router";
import Produtos from "../Produtos";


export const listaProdutos = [
  {
    id: 1,
    nome: "Headset Gamer Sem Fio",
    preco: 299.90,
    descricao: "Áudio espacial 7.1, microfone com cancelamento de ruído e bateria de até 20 horas.",
    avatar: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    nome: "Teclado Mecânico RGB",
    preco: 249.00,
    descricao: "Switches azuis táteis, layout compacto 60% e iluminação RGB customizável.",
    avatar: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    nome: "Smartwatch Fitness",
    preco: 189.50,
    descricao: "Monitoramento de frequência cardíaca, contador de passos e resistência à água 5ATM.",
    avatar: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    nome: "Câmera Instantânea Vintage",
    preco: 420.00,
    descricao: "Impressão de fotos na hora com ajuste automático de exposição e lente macro integrada.",
    avatar: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    nome: "Mochila Ergonômica para Notebook",
    preco: 159.90,
    descricao: "Compartimento acolchoado até 15.6'', tecido impermeável e entrada USB externa.",
    avatar: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&auto=format&fit=crop&q=80"
  }
]

export default function EditarProdutos() {
  // Para alterar o título da página:
  document.title = "Editar Produtos";

  const { id } = useParams<string>();

  const produto = listaProdutos.find((p)=> p.id === Number(id));

  return (
    <main>
      <h2>Editar Produtos Lindos</h2>
          {produto ? (
            <div>
              <h3>{produto.nome}</h3>
              <p>{produto.descricao}</p>
              <p>Preço: R$ {produto.preco}</p>
             <figure>
              <img src={produto.avatar} alt={produto.nome} />
                <figcaption>{produto.nome}</figcaption>
             </figure>
            </div>
          ): <h3>Produto não encontrado!</h3>} 

    </main>
  );
}
