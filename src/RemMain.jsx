import React from "react";
import { BrowserRouter } from "react-router-dom";
import Rem from "./rem";
import items from "./data.json";

const RemMain = () => {
  return (
    <BrowserRouter>
      <Rem items={items} />
    </BrowserRouter>
  );
};

export default RemMain;
