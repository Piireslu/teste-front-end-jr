import "./scss/rodape.css";
import redesSocias from "../../Assets/Img/redesSociais.png";
import pagamento from "../../Assets/Img/formas_pagamento.png";
import marcas from "../../Assets/Img/copy.png"

export default function App() {
  return (
    <div className="footer-container">
      <div className="footer-section1">
        <div className="sobre">
          <p>Sobre nós</p>
          <ul>
            <li>conheça</li>
            <li>como comprar</li>
            <li>indicação e desconto</li>
          </ul>
          <img src={redesSocias} alt="redes-sociais" />
        </div>
        <div className="info">
          <p> Informações úteis</p>
          <ul>
            <li>Fale conosco</li>
            <li>dúvidas</li>
            <li>prazos de entrega</li>
            <li>formas de pagamento</li>
            <li>polítoca de privacidade</li>
            <li>trocas e devoluções</li>
          </ul>
        </div>
        <div className="pag">
          <p> formas de pagamento</p>
          <img src={pagamento} alt="pagamento" />
        </div>
        <div className="cadastro">
          <div className="cad-intern">
            <h3>
              cadastre-se e receba nossas <span>novidades e promoções</span>
            </h3>
            <p>
              Exceptur sint accacat cudatat non ent, sunt in culpa aqui afficia
              lorem ipsum
            </p>
            <div className="cad-input">
              <input type="text" placeholder="SEU E-MAIL" />
              <button>ok</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section2">
        <div className="footer-text">
          <p>
            Copyright © 2019. Todos os direitos reservados. Todas as marcas e
            suas imagens são de propriedade de seus respectivos donos. É vedada
            a reprodução, total ou parcial, de qualquer conteúdo sem expressa
            autorização.
          </p>
        </div>
        <div className="footer-marcas">
            <img src={marcas} alt="marca" />
        </div>
      </div>
    </div>
  );
}
