import "./scss/navbar.css";
import Group35 from "../../Assets/Img/Group 35.png"
import MagnifyingGlass from "../../Assets/Img/MagnifyingGlass.png";
import Group from "../../Assets/Img/Group.png";
import Heart from "../../Assets/Img/Heart.png";
import UserCircle from "../../Assets/Img/UserCircle.png";
import ShoppingCart from "../../Assets/Img/ShoppingCart.png";

function App() {
    return(
        <div className="navbar-container">
            <div className="navbar">
                <a href="#"><img src={Group35} alt="Group35" /></a>
                <div className="navbar-busca">
                    <input type="text" placeholder="O que você está buscando?"/>
                    <img src={MagnifyingGlass} alt="MagnifyingGlass" />
                </div>

                <div className="navbar-icons">
                    <ul>
                        <li><a href="#"><img src={Group} alt="Group.png" /></a></li>
                        <li><a href="#"><img src={Heart} alt="Heart.png" /></a></li>
                        <li><a href="#"><img src={UserCircle} alt="UserCircle.png" /></a></li>
                        <li><a href="#"><img src={ShoppingCart} alt="ShoppingCart.png" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;