import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useLogin } from '../../hooks/useLogin';

export default function RoutePrivate({ component: Component, ...rest }) {
  const { token } = useLogin();

  return (
    <Route
      {...rest}
      render={() => (token ? <Component {...rest} /> : <Redirect to="/" />)}
    />
  );
}
