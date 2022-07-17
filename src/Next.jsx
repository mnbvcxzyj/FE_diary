import React from "react";
import styled from "styled-components";
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

const WriteDiaryDiv = styled.div`
  position: absolute;
  width: 160px;
  height: 40px;
  left: 130px;
  top: 148px;
  background: #8cd711;
  border-radius: 10px;
`;

const WriteDiary = styled.div`
  position: absolute;
  width: 104.62px;
  height: 17px;
  left: 27.69px;
  top: 11.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const SeeDiaryDiv = styled.div`
  position: absolute;
  width: 160px;
  height: 40px;
  left: 130px;
  top: 232px;
  background: #8cd711;
  border-radius: 10px;
`;

const SeeDiary = styled.div`
  position: absolute;
  width: 104.62px;
  height: 17px;
  left: 27.69px;
  top: 11.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

function Next() {
  const [nextPage, setNextPage] = useState();
  //연재언니 코드랑 연결하기

  return (
    <CodePopup>
      <WriteDiaryDiv>
        <WriteDiary>일기 쓰러가기</WriteDiary>
      </WriteDiaryDiv>
      <SeeDiaryDiv>
        <SeeDiary>일기 보러가기</SeeDiary>
      </SeeDiaryDiv>
    </CodePopup>
  );
}

export default Next;
