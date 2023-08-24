import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import Product from "../Product/product.jsx";
import "./scss/vitrine.css";
import "@splidejs/react-splide/css";

export default function App(props) {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await (
          await fetch(
            "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
          )
        ).json();
        setProducts(response.products);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);
  return (
    <div className={props.container}>
        {products ? (
      <Splide
        aria-label="Products"
        options={{
          width: "1266px",
          perPage: 4,
          pagination: false
        }}
      >
        {products.map((product, index) => (
            <SplideSlide key={index}>
                <Product descript={product.descriptionShort} photoURL={product.photo} price={product.price} name={product.productName}/>
            </SplideSlide>
        ))}
      </Splide>
        ) : (
            <div>Carregando produtos ...</div>
        )}
    </div>
  );
}
