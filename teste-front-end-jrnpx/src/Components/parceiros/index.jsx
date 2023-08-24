import React from "react";

import "./scss/parceiros.css";

export default function App(props) {
  return (
    <div className={props.container}>
      <div className="container-parceiro-1">
        <div className={props.elements}>
          <img src={props.img} alt="MaskGroup" />
          <div className={props.mask}></div>
          <div className="container-txt">
            <h1>{props.h1}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>Confira</button>
          </div>
        </div>
      </div>
      <div className="container-parceiro-1">
        <div className={props.elements}>
          <img src={props.img} alt="MaskGroup" />
          <div className={props.mask}></div>
          <div className="container-txt">
            <h1>{props.h1}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>Confira</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
