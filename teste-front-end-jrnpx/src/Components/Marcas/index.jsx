import "./scss/marcas.css";
import V from "../../Assets/Img/V.png";
import T from "../../Assets/Img/t.png";
import E from "../../Assets/Img/E.png";
import X from "../../Assets/Img/X.png";
import Logo from "../../Assets/Img/vtex.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function App() {
  const brands = [1];

  return (
    <div className="container-marcas">
      <div className="navegue">
        <h1>Navegue por marcas</h1>
      </div>
      <Splide
        aria-label="Marcas"
        options={{
          width: "1250px",
          type: "loop",
          perPage: 5,
          pagination: false
        }}
      >
        <SplideSlide>
          {brands.map((brand) => (
            <article className="circulo" key={brand}>
              <img src={Logo} alt="VTEX Logo" />
              <img src={V} alt="V" />
              <img src={T} alt="T" />
              <img src={E} alt="E" />
              <img src={X} alt="X" />
            </article>
          ))}
        </SplideSlide>
      </Splide>
    </div>
  );
}
