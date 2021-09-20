import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import { useProduct } from "../../hooks/useProduct";
import Button from "../Button";

import { Container } from "./styles";

export default function ModalProduct({ isOpen, onRequestClose }) {
  const { products, sizes } = useProduct();


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <div className="product-img">
          <div className="large-img">
            <img src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-sb-force-58-CZ2959-002-1-11626190257.jpg" alt="" />
          </div>
          <div className="preview-img">
            <button type="button">
              <img
                src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-sb-force-58-CZ2959-002-1-11626190257.jpg"
                alt=""
              />
            </button>
            <button type="button">
              <img
                src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-sb-force-58-CZ2959-002-1-11626190257.jpg"
                alt=""
              />
            </button>
            <button type="button">
              <img
                src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-sb-force-58-CZ2959-002-1-11626190257.jpg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="product-title">
          <small>Skateboarding</small>
          <p>Tênis Nike SB Zoom Stefan Janoski FL RM Unissex</p>
        </div>
        <div className="product-price">
          <p>R$ 699,90</p>
          <span>(-43%)</span>
          <h2>R$ 399,90</h2>
        </div>
        <div className="divider" />
        <div className="product-size">
          <button type="button">M 37 / F 36</button>
          <button type="button">M 37 / F 36</button>
          <button type="button">M 37 / F 36</button>
          <button type="button">M 37 / F 36</button>
        </div>
        <div className="product-button">
          <Button type={"button"}>Colocar na sacola</Button>
        </div>
      </Container>
    </Modal>
  );
}
