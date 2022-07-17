import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import logoIMG from "../../img/logo1.png";
import data from "../../data.json";

import Connect2 from "./Connect2";

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
  display: flex;
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
  border: 0;
  outline: 0;
`;

const InviteText2 = styled.div`
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
  justify-content: center;
  align-items: center;
  color: #77694c;
`;

const AutoButton = styled.div`
  position: absolute;
  width: 100px;
  height: 32px;
  left: 160px;
  top: 310px;
  background: #c7bba4;
  border-radius: 10px;
  cursor: pointer;
`;

const AutoButton2 = styled.div`
  position: absolute;
  width: 100px;
  height: 32px;
  left: 160px;
  top: 310px;
  background: #77694c;
  border-radius: 10px;
  cursor: pointer;
`;

const ButtonText = styled.div`
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

const Count = styled.div`
  position: absolute;
  width: 97.54px;
  height: 17px;
  left: 95.12px;
  top: 233.75px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #77694c;
`;

function WriteInviteCode({ choosePage, setChoosePage }) {
  const [tar, setTar] = useState("");

  const onChangeNum = (e) => {
    setTar(e.target.value);
  };
  const [same, setSame] = useState();

  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  const [con, setCon] = useState(false);
  return (
    <>
      {con ? (
        <Connect2
          same={same}
          choosePage={choosePage}
          setChoosePage={setChoosePage}
        />
      ) : (
        <CodePopup>
          <LogoIMG>
            <img src={logoIMG} />
          </LogoIMG>
          <Ment1> 초대코드를 입력하여 연결해 주세요</Ment1>
          {tar ? (
            <Count>
              연결까지 (23:{minutes}:{seconds < 10 ? `0${seconds}` : seconds})
            </Count>
          ) : (
            ""
          )}

          <InviteCode>
            <input
              onChange={onChangeNum}
              value={tar}
              placeholder="상대방에게 받으신 코드를 입력해주세요"
              size="33"
            />
          </InviteCode>
          <AutoButton2
            style={{ backgroundColor: tar ? "#77694C" : "#C7BBA4" }}
            onClick={() => {
              data.map((list) => {
                if (list.inviteNum == tar) {
                  console.log(same);
                  setSame(list);
                  setCon(true);
                } else {
                  console.log("df");
                }
              });
            }}
          >
            <ButtonText>연결 하기</ButtonText>
          </AutoButton2>
        </CodePopup>
      )}
    </>
  );
}

export default WriteInviteCode;
