import React, { useState } from "react";
import ReactModal from "react-modal";
import "./scss/product.css";

export default function App({ descript, photoURL, price, name }) {
  const discountPrice = price * 0.95;
  const installmentPrice = discountPrice / 2;

  const Modals = () => {
    const [openModal, setOpenModal] = useState(false);
    ReactModal.setAppElement("body");

    const handleShowModal = () => {
      setOpenModal(true);
    };

    const handleCloseModal = () => {
      setOpenModal(false);
    };

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "769px",
        height: "300px"
      }
    };

    return (
      <div className="container-modal">
        <button className="button-modal" onClick={handleShowModal}>
          Comprar
        </button>
        <ReactModal
          isOpen={openModal}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <div className="content">
            <div className="img">
              <img src={photoURL} alt="Celular" />
            </div>
            <div className="details">
              <span className="close" onClick={handleCloseModal}>
                X
              </span>
              <h3>{name}</h3>
              <br />
              <h2>{`R$ ${discountPrice.toLocaleString("pt-br", {
                minimumFractionDigits: 2
              })}`}</h2>
              <br />
              <p>{descript}</p>
              <br />
              <a href="#">Veja mais detalhes do produto</a>
            </div>
          </div>
        </ReactModal>
      </div>
    );
  };

  return (
    <article className="product-card">
      <img src={photoURL} alt="Product" />
      <h3>{name}</h3>
      <div className="product-price-details">
        <dl>
          <dd>
            <s>{`R$${price.toLocaleString("pt-br", {
              minimumFractionDigits: 2
            })}`}</s>
          </dd>
          <dd>
            <strong>{`R$${discountPrice.toLocaleString("pt-br", {
              minimumFractionDigits: 2
            })}`}</strong>
          </dd>
        </dl>
        <small>{`ou 2x de R$ ${installmentPrice.toLocaleString("pt-br", {
          minimumFractionDigits: 2
        })} sem juros`}</small>
        <p>Frete grátis</p>
      </div>
      <Modals />
    </article>
  );
}
