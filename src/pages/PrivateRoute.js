import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Login } from "./index";
const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();

  const isUser = isAuthenticated && user;

  if (!isUser) {
    return <Navigate to={"/login"} state={{ from: Login.location }} />;
  }
  return children;
};
export default PrivateRoute;
