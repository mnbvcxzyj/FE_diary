import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import data from "./data.json";

import MainDiaryBox from "./MainDiaryBox";
import MainMyDiaryBox from "./MainMyDiaryBox";

const SlogunTitleDiv = styled.div`
  position: absolute;
  width: 240.41px;
  height: 50px;
  left: 67px;
  top: 132px;

  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;

  color: #9b8962;
`;

const SlogunBigDiv = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;

  color: #65a30d;
`;

const SlogunSmallDiv = styled.div`
  position: absolute;
  width: 500.33px;
  height: 50px;
  left: 67px;
  top: 182px;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;

  color: #9b8962;
`;

const DiaryDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 64px;

  position: absolute;
  width: 1152px;
  height: 340px;
  left: 64px;
  top: 270px;
  flex-wrap: wrap;
`;

function Main() {
  return (
    <>
      <SlogunTitleDiv>
        그 날 하루의
        <SlogunBigDiv>&nbsp;가치</SlogunBigDiv>
      </SlogunTitleDiv>
      <SlogunSmallDiv>
        기억하고 싶은 하루를 기억하고 싶은 상대와 기록하세요
      </SlogunSmallDiv>
      <DiaryDiv>
        <MainMyDiaryBox />
        {data.map((list) => (
          <MainDiaryBox list={list} />
        ))}
      </DiaryDiv>
    </>
  );
}

export default Main;
