import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error(
      "You must wrap your application with AuthProvider to use the Auth"
    );
  }
  return auth;
};

export default useAuth;
