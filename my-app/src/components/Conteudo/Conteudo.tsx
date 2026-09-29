import { useState } from "react";
import imgQuadrado from "../../img/quadrado.png";
<<<<<<< HEAD
import LigaDesliga from "../LigaDesliga/LigaDesliga.tsx";
=======
import LigaDesliga from "../LigaDesliga/LigaDesliga";
>>>>>>> feature/exemplo-rm570325
import VerDataNasc from "../VerDataNasc/VerDataNasc";

export default function Conteudo() {
  let numeroComum = 0;

  //Estado do React
<<<<<<< HEAD

=======
  
>>>>>>> feature/exemplo-rm570325
  const [mostraSection, setMostraSection] = useState(true);

  function aumentaVariavelComun() {
    numeroComum = numeroComum + 1;

    //O valor muda e aparece no console
    console.log("Variavel comum:", numeroComum);
    //Más não aparecerá na página
  }

  function verSection() {
    //O React altera o estado e renderiza novamente a página/componente.
<<<<<<< HEAD

    setMostraSection(!mostraSection);
  }

=======
    
    
    setMostraSection(!mostraSection);
  }
  
>>>>>>> feature/exemplo-rm570325
  return (
    <main>
      <section>
        <LigaDesliga />
<<<<<<< HEAD
        <VerDataNasc />
=======
        <VerDataNasc/>
>>>>>>> feature/exemplo-rm570325
      </section>
      <section>
        <h2>Conteúdo</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          perspiciatis expedita beatae, at tempora praesentium nihil fuga illum
          aut, maiores consequuntur porro repellendus sit laudantium, nemo
          explicabo modi molestiae ipsa?
        </p>
      </section>
      <section>
        <h2>Imagem com link externo</h2>
        <figure>
          <img
            src="https://placehold.co/600x400/e1e1e1/000000/png"
            alt="Imagem de exemplo de 600x400px"
          />
          <figcaption>Imagem de exemplo de 600x400px</figcaption>
        </figure>
      </section>
      <section>
        <h2>Imagem com referência interna</h2>
        <figure>
          <img src={imgQuadrado} alt="Imagem quadrada 400x400px" />
          <figcaption>Imagem de exemplo 400x400px</figcaption>
        </figure>
      </section>
<<<<<<< HEAD
      <section style={{ display: mostraSection ? "block" : "none" }}>
=======
      <section style={{"display": mostraSection ? "block" : "none"}}>
>>>>>>> feature/exemplo-rm570325
        <h2>Imagem com referência interna estática</h2>
        <figure>
          <img src="/image/lampada.png" alt="Lampada de Desenho." />
          <figcaption>Imagem de exemplo estática - Lâmpada</figcaption>
        </figure>
      </section>
<<<<<<< HEAD
      <button onClick={verSection}>
        {mostraSection ? "Ocultar" : "Mostrar"}
      </button>
=======
        <button onClick={verSection}>{mostraSection ? "Ocultar" : "Mostrar"}</button>
>>>>>>> feature/exemplo-rm570325
    </main>
  );
}
