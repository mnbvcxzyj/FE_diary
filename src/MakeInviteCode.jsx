import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ConnectWait from "./ConnectWait";
import logoIMG from "./img/logo1.png";

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

const InviteCode = styled.div`
  position: absolute;
  width: 240px;
  height: 40px;
  left: 88.12px;
  top: 250.75px;
  background: #f7f7f7;
  border-radius: 10px;
`;

const AutoButton = styled.div`
  position: absolute;
  width: 100px;
  height: 32px;
  left: 158.12px;
  top: 310px;
  background: #77694c;
  border-radius: 10px;
  cursor: pointer;
`;
const AutoButtonText = styled.div`
  position: absolute;
  width: 58.5px;
  height: 17px;
  left: 20.75px;
  top: 7.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

const InviteNumInitial = styled.div`
  width: 182px;
  height: 17px;
  left: 29px;
  top: 11.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
  text-align: center;
  color: #c7bba4;
`;

const InviteNum = styled.div`
  position: absolute;
  width: 182px;
  height: 17px;
  left: 29px;
  top: 11.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
  text-align: center;
  color: #77694c;
`;

function MakeInviteCode() {
  const [makeCode, setMakeCode] = useState(false);

  return (
    <>
      {makeCode ? (
        <ConnectWait />
      ) : (
        <CodePopup>
          <LogoIMG>
            <img src={logoIMG} />
          </LogoIMG>
          <Ment1>내 초대코드 생성하기</Ment1>
          <InviteCode>
            <InviteNum>
              <InviteNumInitial>12345678</InviteNumInitial>
            </InviteNum>
          </InviteCode>
          <AutoButton onClick={() => setMakeCode(true)}>
            <AutoButtonText>자동생성</AutoButtonText>
          </AutoButton>
        </CodePopup>
      )}
    </>
  );
}

export default MakeInviteCode;
