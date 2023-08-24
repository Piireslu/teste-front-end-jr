import "./scss/carrossel.css";
import Rectangle250 from "../../Assets/Img/Rectangle 250.png";
import Rectangle108 from "../../Assets/Img/Rectangle 108.png";

export default function App() {
    return(
        <div className="container-carrossel">
        <div className="img-vendas250">
            <img src={Rectangle250} alt="Rectangle 250" />
        </div>
        <div className="img-vendas180">
            <img src={Rectangle108} alt="Rectangle 108" />
        </div>
        <div className="txt-img">
            <p>Venha conhecer nossas promoções</p>
            <span>50% off nos produtos</span>
        <div className="button-img">
          <button> Ver produto </button>
        </div>
        </div>
      </div>
    );
};