import { useState } from "react";
import "./App.css";
import meses from "./assets/js/meses";

function App() {
  const data=new Date()

  const año=data.getFullYear()
  const mes=data.getMonth()+1
  const dia=data.getDate()

  const formatoFecha=`${dia}/${mes}/${año}`

  const [count, setCount] = useState(2);
  const mesReduce = meses.find((mes, i) => i === count);
  const adelante = () => {
    console.log(count);
    if (count >= 11) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  const atras = () => {
    console.log(count);
    if (count <= 0) {
      setCount(11);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <main>
      <section>
        <h2 className="title-mes">{mesReduce && <>{mesReduce.mes}</>}</h2>
        <ul className="Fecha">
          <li className="contenedorFlecha">
            <button   onClick={atras}><i class='bx bxs-chevron-left'></i></button>
          </li>
          <li className="contenedorFecha">
              <p>{formatoFecha}</p>
            
          </li>

          <li className="contenedorFlecha">
            <button onClick={adelante}><i class='bx bxs-chevron-right'></i></button>
          </li>
        </ul>
        <ul className="diasSemana">
          <li>L</li>
          <li>M</li>
          <li>M</li>
          <li>J</li>
          <li>V</li>
          <li>S</li>
          <li>D</li>
        </ul>
        <div className="contenedor-calendario">
          <ul className="mes">
            {mesReduce && (
              <>
                {mesReduce.dias.map((dia) => {
                  return (
                    <li key={dia} className="dia">
                      {dia}
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
