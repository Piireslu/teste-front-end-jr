import "./scss/avbar.css";
import ShieldCheck from "../../Assets/Img/ShieldCheck.png"
import Truck from "../../Assets/Img/Truck.png";
import CreditCard from "../../Assets/Img/CreditCard.png"


function App() {
    return(
        <>
            <div className="container">
                <div className="avisos">
                    <img src={ShieldCheck} alt="ShieldCheck" />
                    <p><span>Compra</span> 100% segura</p>
                </div>
                <div className="avisos">
                    <img src={Truck} alt="Truck" />
                    <p><span>Frete grátis</span> acima de R$ 200</p>
                </div>
                <div className="avisos">
                    <img src={CreditCard} alt="CreditCard" />
                    <p><span>Parcele</span> suas compras</p>
                </div>
            </div>
        </>
    )
} 

export default App