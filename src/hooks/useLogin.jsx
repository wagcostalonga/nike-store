import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

import useStorage from "../utils/useStorage";

const LoginContext = createContext({
  token: null,
  setToken: () => {},
});

export function LoginProvider({ children }) {
  const initialState = {
    user: "",
    password: "",
  };

  const [token, setToken] = useStorage("token");
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const history = useHistory();

  function handleLogin() {
    localStorage.setItem("admin", JSON.stringify(values));
    if (values.user === "admin" && values.password === "admin") {
      return { token: "1234" };
    }
    return toast.error("Usuário ou senha inválido!");
  }

  function handleOnChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    const { token } = handleLogin(values);

    if (token) {
      setToken(token);
      return history.push("/main");
    }

    setError(error);
    setValues(initialState);
  }

  return (
    <LoginContext.Provider
      value={{ token, setToken, handleOnChange, handleOnSubmit, values }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  const context = useContext(LoginContext);
  return context;
}
