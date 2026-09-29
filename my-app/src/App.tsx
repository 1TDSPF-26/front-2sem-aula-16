<<<<<<< HEAD
=======
import { Outlet } from "react-router";
>>>>>>> feature/exemplo-rm570325
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";

export default function App() {
  return (
    <div>
<<<<<<< HEAD
      <Cabecalho />
      <Conteudo/>
      <Rodape />
    </div>
  );
=======
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  )
>>>>>>> feature/exemplo-rm570325
}
