import { Outlet } from "react-router";
<<<<<<< HEAD
import Cabecalho from "./components/cabecalho/cabecalho";
import Conteudo from "./components/conteudo/conteudo";
import Rodape from "./components/rodape/rodape";

=======
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";
>>>>>>> feature/exemplo-pf0670

export default function App() {
  return (
    <div>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  )
}
