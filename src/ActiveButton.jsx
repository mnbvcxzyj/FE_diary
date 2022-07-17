import React from "react";
import logoIMG from "./img/logo1.png";
import styled from "styled-components";
import { useState } from "react";
import Connect2 from "./Connect2";

const AutoButton2 = styled.div`
  position: absolute;
  width: 100px;
  height: 32px;
  left: 160px;
  top: 310px;
  background: #77694c;
  border-radius: 10px;
  border: 0;
  outline: 0;
`;

const AutoButtonText = styled.div`
  position: absolute;
  width: 58.5px;
  height: 17px;
  left: 20.75px;
  top: 7.5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

function Active() {
  const [active, setActive] = useState(false);

  return (
    <>
      {active ? (
        <Connect2 />
      ) : (
        <AutoButton2
          onClick={() => {
            setActive(true);
          }}
        >
          <AutoButtonText>연결하기</AutoButtonText>
        </AutoButton2>
      )}
    </>
  );
}

export default Active;
