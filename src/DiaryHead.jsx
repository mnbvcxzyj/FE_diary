import React from "react";
import styled from "styled-components";
import song from "./img/song.png";

const DiaryHeader = styled.div`
  height: 87px;
  background: #f4ffe2;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  position: relative;
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

const DateInput = styled.input`
  all: unset;
`;

const InfoIcon = styled.div`
  border-right: 2px solid #d1b883;
  padding: 0 20px;
  display: flex;
`;

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

const TitleInputDiv = styled.div`
  width: 89%;
`;

const IconImg = styled.img`
  height: 20px;
`;

function DiaryHead({ selectDate, onChange, writtenData }) {
  return (
    <DiaryHeader>
      <DiaryInfo>
        <InfoDate>
          <DateInput type="date" value={selectDate} onChange={onChange} />
        </InfoDate>
        <InfoIcon>
          <IconImg src={require(`./img/weather/${writtenData.weather}.png`)} />
        </InfoIcon>
        <InfoIcon>
          <IconImg src={require(`./img/emotion/${writtenData.emotion}.png`)} />
        </InfoIcon>
        <InfoMusic>
          <IconImg src={song} />
        </InfoMusic>
      </DiaryInfo>
      <DiaryTitle>
        <TitleText>제목</TitleText>
        <TitleInputDiv>{writtenData.title}</TitleInputDiv>
      </DiaryTitle>
    </DiaryHeader>
  );
}

export default DiaryHead;
