import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "BMDOHYEON";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
    body{
        background-color: #f5fdef;
        font-family: "BMDOHYEON";
    }
`;