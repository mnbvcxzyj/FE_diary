import React, { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
};
export default App;