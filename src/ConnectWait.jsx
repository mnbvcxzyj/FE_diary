import React from "react";
import styled from "styled-components";
import logoIMG from "./img/logo1.png";
import Connect from "./Connect";
import { useState } from "react";

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

const Ment2 = styled.div`
  position: absolute;
  width: 154.92px;
  height: 17px;
  left: 95.12px;
  top: 233.75px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  align-items: center;
  text-align: center;
  color: #77694c;
`;

const InviteCode = styled.div`
  position: absolute;
  width: 240px;
  height: 40px;
  left: 88.12px;
  top: 250.75px;
  background: #f7f7f7;
  border-radius: 10px;
  border: 0;
  outline: 0;
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

const WaitButton = styled.div`
  position: absolute;
  width: 100px;
  height: 32px;
  left: 161px;
  top: 310px;
  background: #77694c;
  border-radius: 10px;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

const Wait = styled.div`
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
//연결 대기 폰트 변경

const LinkDiv = styled.div`
  position: absolute;
  width: 100px;
  height: 32px;
  left: 160px;
  top: 361.25px;
  background: #77694c;
  border-radius: 10px;
`;

const LinkCopy = styled.div`
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
`;

const randNumber = Math.floor(Math.random() * 100000000);

const Con = () => {
  const [showConnect, setShowConnect] = useState(false);

  return (
    <>
      {showConnect ? (
        <Connect></Connect>
      ) : (
        <CodePopup>
          <LogoIMG>
            <img src={logoIMG} />
          </LogoIMG>
          <Ment1>내 초대코드를 생성하기</Ment1>
          <Ment2>24 시간 내에 연결을 완료해주세요</Ment2>
          <InviteCode>
            <InviteNum>{randNumber}</InviteNum>
          </InviteCode>
          <WaitButton
            onClick={() => {
              setShowConnect(true);
            }}
          >
            <Wait>연결 대기</Wait>
          </WaitButton>
          <LinkDiv>
            <LinkCopy>링크 복사</LinkCopy>
          </LinkDiv>
        </CodePopup>
      )}
    </>
  );
};

export default Con;
