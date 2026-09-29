import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho/Cabecalho";
<<<<<<< HEAD
=======
import Conteudo from "./components/Conteudo/Conteudo";
>>>>>>> feature/exemplo-pf0670
import Rodape from "./components/Rodape/Rodape";

export default function App() {
  return (
    <div>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  )
}
