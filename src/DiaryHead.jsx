import React from "react";
import styled from "styled-components";
import sunny from "./img/weather/sunny.png";
import song from "./img/song.png";

const DiaryHeader = styled.div`
  height: 87px;
  background: #f4ffe2;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
`;

const DiaryInfo = styled.div`
  display: flex;
  border-bottom: 2px solid #d1b883;
  padding: 10px 0;
  align-items: center;
`;
const InfoDate = styled.div`
  border-right: 2px solid #d1b883;
  color: #9b8962;
  padding-right: 15px;
`;
const InfoIcon = styled.div`
  border-right: 2px solid #d1b883;
  padding: 0 20px;
  display: flex;
`;
const InfoEmotion = styled.div``;
const InfoMusic = styled.div`
  padding-left: 15px;
  display: flex;
`;
const DiaryTitle = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0;
`;

const TitleText = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #77694c;
`;

const TitleInput = styled.input`
  all: unset;
  width: 89%;
`;

const IconImg = styled.img`
  width: 20px;
  height: 20px;
`;

function DiaryHead() {
  let d = new Date();
  let todayDate = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);

  return (
    <DiaryHeader>
      <DiaryInfo>
        <InfoDate>{todayDate}</InfoDate>
        <InfoIcon>
          <IconImg src={sunny} />
        </InfoIcon>
        <InfoIcon>이모</InfoIcon>
        <InfoMusic>
          <IconImg src={song} />
        </InfoMusic>
      </DiaryInfo>
      <DiaryTitle>
        <TitleText>제목</TitleText>
        <TitleInput />
      </DiaryTitle>
    </DiaryHeader>
  );
}

export default DiaryHead;
