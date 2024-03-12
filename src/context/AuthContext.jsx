import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

import API from "../utils/API.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("withCreds"))
      API.get("/auth/refresh")
        .then((res) => {
          if (res.data.success) {
            setUser(res.data?.token);
          } else {
            setUser(null);
            localStorage.removeItem("withCreds");
            throw new Error("Failed to refresh token");
          }
        })
        .catch((err) => {
          setUser(null);
        });
  }, []);

  const register = async (userName, email, password) => {
    try {
      const res = await API.post("/auth/register", {
        userName,
        email,
        password,
      });
      if (res.data.success) {
        console.log(res.data);
        console.log(res.data.success);
        console.log(res.data?.token);
        setUser(res.data?.token);
        localStorage.setItem("withCreds", true);
      } else {
        throw new Error(res.data.message);
      }
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data || error };
    }
  };

  const login = async (email, password) => {
    try {
      const res = await API.post("/auth/login", { email, password });
      if (res.data.success) {
        setUser(res.data.token);
        localStorage.setItem("withCreds", true);
      } else {
        throw new Error(res.data.message);
      }
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data || error };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
