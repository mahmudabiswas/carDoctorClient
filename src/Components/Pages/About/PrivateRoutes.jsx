import React, { Children, useContext } from "react";
import { AuthContext } from "../../Layout/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return <process className="progress w-56"></process>;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoutes;
