import React from "react";
import FetchProvider from "../FetchProvider";
import TokenProvider from "../TokenProvider";

function MainProvider({ children }) {
  return (
    <>
      <TokenProvider>
        <FetchProvider>{children}</FetchProvider>
      </TokenProvider>
    </>
  );
}

export default MainProvider;
