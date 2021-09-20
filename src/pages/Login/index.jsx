import React from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { useLogin } from "../../hooks/useLogin";

import { Container, Form, Background } from "./styles";

import logoNikeDark from "../../assets/logoNikeDark.svg";

export default function Login() {
  const { handleOnChange, values, handleOnSubmit } = useLogin();

  return (
    <Container>
      <div className="content">
        <div className="content-group">
          <img src={logoNikeDark} alt="Nike" />
          <h1>Login</h1>
          <Form onSubmit={handleOnSubmit}>
            <Input
              type={"text"}
              children={"Usuário"}
              name={"user"}
              value={values.user}
              onChange={handleOnChange}
            />
            <Input
              type={"password"}
              children={"Senha"}
              name={"password"}
              value={values.password}
              onChange={handleOnChange}
            />
            <Button type={"submit"} children={"Entrar"} />
          </Form>
        </div>
        <footer>
          <small>
            Este projeto representa um estudo de caso <br />
            Imagens e dados pegos do site da NIKE
          </small>
        </footer>
      </div>
      <Background />
    </Container>
  );
}
