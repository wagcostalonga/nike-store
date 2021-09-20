import React from "react";
import { IoLogOutOutline, IoBagOutline } from "react-icons/io5";

import { useLogin } from "../../hooks/useLogin";

import logoNike from "../../assets/logoNike.svg";

import { Container } from "./styles";

export default function Header() {
  const { setToken } = useLogin();

  return (
    <Container>
      <div className="content">
        <img src={logoNike} alt="Nike" />

        <div className="user">
          <p>Olá Wagner</p>
          <div className="user-image" />
          <button type="button" className="btn-bag">
            <div className="amount">0</div>
            <IoBagOutline size="32" color="#75768c" />
          </button>
          <button type="button" onClick={() => setToken(null)}>
            <IoLogOutOutline size="32" color="#75768c" />
          </button>
        </div>
      </div>
    </Container>
  );
}
