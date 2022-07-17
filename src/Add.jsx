import React from "react";
import styled from "styled-components";
import logoIMG from "./img/logo1.png";
import { useState, useEffect } from "react";
import ConnectWait from "./ConnectWait";
import ActiveB from "./ActiveButton";
import data from "./data.json";
import MakeInviteCode from "./MakeInviteCode";
import WriteInviteCode from "./WriteInviteCode";

const CodePopup = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  left: 430px;
  top: 104px;
  background-color: #ffffff;
  border-radius: 10px;
`;

const LogoIMG = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 171px;
  top: 56px;
`;

const Ment1 = styled.div`
  position: absolute;
  width: 294px;
  height: 34px;
  left: 61.12px;
  top: 144.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  color: #9b8962;
`;

const SelectInvite1 = styled.div`
  position: absolute;
  width: 240px;
  height: 40px;
  left: 91px;
  top: 243px;
  background-color: #f7f7f7;
  color: #77694c;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  :hover {
    box-shadow: 0 4px 2px -2px #77694c;
  }
`;

const SelectInText1 = styled.div`
  position: absolute;
  width: 182px;
  height: 17px;
  left: 29px;
  top: 11.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #77694c;
  justify-content: center;
  align-items: center;
`;

const SelectInvite2 = styled.div`
  position: absolute;
  width: 240px;
  height: 40px;
  left: 91px;
  top: 309.5px;
  background-color: #f7f7f7;
  color: #77694c;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  :hover {
    box-shadow: 0 4px 2px -2px #77694c;
  }
`;

const SelectInText2 = styled.div`
  position: absolute;
  width: 182px;
  height: 17px;
  left: 29px;
  top: 11.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #77694c;
  justify-content: center;
  align-items: center;
`;

function Add() {
  const [showInvite, setShowInvite] = useState(false);
  const [showInvite2, setShowInvite2] = useState(false);

  return (
    <>
      {showInvite || showInvite2 ? (
        showInvite ? (
          <MakeInviteCode />
        ) : (
          <WriteInviteCode />
        )
      ) : (
        <CodePopup>
          <LogoIMG>
            <img src={logoIMG} />
          </LogoIMG>
          <Ment1>초대코드를 입력하여 연결해 주세요</Ment1>
          <SelectInvite1
            onClick={() => {
              setShowInvite(true);
            }}
          >
            <SelectInText1>초대 하실건가요?</SelectInText1>
          </SelectInvite1>

          <SelectInvite2
            onClick={() => {
              setShowInvite2(true);
            }}
          >
            <SelectInText2>초대 받으셨나요?</SelectInText2>
          </SelectInvite2>
        </CodePopup>
      )}
    </>
  );
}

export default Add;
