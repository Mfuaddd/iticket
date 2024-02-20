import React, { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getFetch } from "../../helpers/FetchHelper";
import { getCookie, setCookie } from "../../helpers/CookieHelper";

export const tokenContext = createContext();

function TokenProvider({ children }) {
  const [token, setToken] = useState(null);
  const [decode, setDecode] = useState(null);

  const addToken = async (data) => {
    try {
      const decode = jwtDecode(data);
      setDecode(decode);
      setToken(data);
      setCookie("token", data, 86400000);
    } catch (error) {
      console.log(error.message);
    }
  };

  const refreshToken = async (value) => {
    const decode = jwtDecode(value);
    setDecode(decode);
    setToken(value);
  };

  const checkToken = () => {
    try {
      const token = getCookie("token");
      if (!!token) {
        refreshToken(token);
      } else {
        setToken(false);
        setDecode(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = () => {
    setCookie("token", "");
    setToken(null);
    setDecode(null);
  };

  const data = {
    logout,
    addToken,
    checkToken,
    token,
    decode,
  };

  return <tokenContext.Provider value={data}>{children}</tokenContext.Provider>;
}

export default TokenProvider;
