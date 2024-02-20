import React, { useContext } from "react";
import { tokenContext } from "../../contexts/TokenProvider";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const { decode } = useContext(tokenContext);

  if (decode !== null) {
    return decode.role === "admin" ? <Outlet /> : <Navigate to="/" />;
  }
}

export default PrivateRoute;
