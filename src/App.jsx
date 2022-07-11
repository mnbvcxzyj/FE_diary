import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
