import React from "react";

import { Container } from "./styles";

export default function Input({ children, type, name, onChange, value }) {

  return (
    <Container>
      <label htmlFor={name}>{children}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}
