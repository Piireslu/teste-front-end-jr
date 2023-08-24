import { useState } from "react";
import "./scss/verTodos.css";

export default function App(props) {
    const[classNameP, setClassNameP] = useState(props.p)
    const[classNameTodos, setClassNameTodos] = useState(props.show)

    const trocarClass = () => {
        setClassNameP("none");
        setClassNameTodos("verOpçoes");
    }
  return (
    <div className="container-todos">
      <div className="elements-todos">
        <div className="linha-todos"></div>
        <h1>Produtos relacionados</h1>
        <div className="linha-todos"></div>
      </div>
      <div className={classNameP}>
        <p onClick={trocarClass}>Ver todos</p>
      </div>
      <div className={classNameTodos}>
        <ul>
            <li><a href="#"><span>Celular</span></a></li>
            <li><a href="#">Acessórios</a></li>
            <li><a href="#">Tablets</a></li>
            <li><a href="#">notebooks</a></li>
            <li><a href="#">tvs</a></li>
            <li><a href="#">ver todos</a></li>
        </ul>
      </div>
    </div>
  );
}
