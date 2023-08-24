import "./scss/carrosselCard.css";
import tabletSmatphone from "../../Assets/Img/monitorar-tablet-e-smartohone 1.png";
import supermercado from "../../Assets/Img/supermercados 1.png";
import whiskey from "../../Assets/Img/whiskey.png";
import ferramentas from "../../Assets/Img/ferramentas 1.png";
import cuidados from "../../Assets/Img/cuidados-de-saude 1.png";
import corrida from "../../Assets/Img/corrida 1.png";
import moda from "../../Assets/Img/moda 1.png";

export default function App() {
  return (
    <div className="carrossel-card">
      <div className="card">
        <ul>
          <li>
            <div className="extern-card">
              <div className="intern-card">
                <a href="#">
                  <div className="img-card">
                    <img
                      src={tabletSmatphone}
                      alt="monitorar-tablet-e-smartohone 1"
                    />
                  </div>
                </a>
              </div>
              <span>Tecnologia</span>
            </div>
          </li>
          <li>
            <div className="extern-card">
              <div className="intern-card">
                <a href="#">
                  <div className="img-card">
                    <img src={supermercado} alt="supermercados 1" />
                  </div>
                </a>
              </div>
              <p>Supermercado</p>
            </div>
          </li>
          <li>
            <div className="extern-card">
              <div className="intern-card">
                <a href="#">
                  <div className="img-card">
                    <img src={whiskey} alt="whiskey" />
                  </div>
                </a>
              </div>
              <p>Bebidas</p>
            </div>
          </li>
          <li>
            <div className="extern-card">
              <div className="intern-card">
                <a href="#">
                  <div className="img-card">
                    <img src={ferramentas} alt="ferramentas 1" />
                  </div>
                </a>
              </div>
              <p>Ferramentas</p>
            </div>
          </li>
          <li>
            <div className="extern-card">
              <div className="intern-card">
                <a href="#">
                  <div className="img-card">
                    <img src={cuidados} alt="cuidados-de-saude 1" />
                  </div>
                </a>
              </div>
              <p>Saúde</p>
            </div>
          </li>
          <li>
            <div className="extern-card">
              <div className="intern-card">
                <a href="#">
                  <div className="img-card">
                    <img src={corrida} alt="corrida 1" />
                  </div>
                </a>
              </div>
              <p>Esporte e Fitness</p>
            </div>
          </li>
          <li>
            <div className="extern-card">
              <div className="intern-card">
                <a href="#">
                  <div className="img-card">
                    <img src={moda} alt="moda 1" />
                  </div>
                </a>
              </div>
              <p>Modas</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
