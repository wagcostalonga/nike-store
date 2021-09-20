import React from "react";

import Header from "../Header";

import { Container } from "./styles";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}

export default Layout;
