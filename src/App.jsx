import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { LoginProvider } from "./hooks/useLogin";
import { ProductProvider } from "./hooks/useProduct";
import Routes from "./routes";

// import Header from './components/Header';

import GlobalStyle from "./styles/global";

import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Router>
      <LoginProvider>
        <ProductProvider>
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
          <Routes />
        </ProductProvider>
      </LoginProvider>
    </Router>
  );
}
