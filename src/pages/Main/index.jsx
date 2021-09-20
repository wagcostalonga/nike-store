import React, { useState } from "react";

import Layout from "../../components/Layout";
import ModalProduct from "../../components/Modal";
import { useProduct } from "../../hooks/useProduct";
// import { formatPrice } from "../../utils/format";
import { api } from "../../services/api";

import { Title, ProductList } from "./styles";

export default function Main() {
  const { products } = useProduct(); 
  // const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);

  function handleOpenModal() {
    setModal(true);
  }

  function handleCloseModal() {
    setModal(false);
  }

  return (
    <>
      <Layout>
        <Title>
          <h2>Últimos modelos</h2>
          <div className="divider" />
        </Title>
        <ProductList>
          {products.map((product) => (
            <li key={product.id}>
              <button type="button" onClick={handleOpenModal}>
                <img src={product.image[0]} alt={product.title} />
                <span>{product.priceFormatted}</span>
              </button>
            </li>
          ))}
        </ProductList>
      </Layout>

      <ModalProduct isOpen={modal} onRequestClose={handleCloseModal} />
    </>
  );
}
