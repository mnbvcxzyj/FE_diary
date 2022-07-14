import React from "react";
import styled from "styled-components";
import DiaryHead from "./DiaryHead";

const DiarySection = styled.div`
  padding: 20px;
  width: 520px;
  background-size: cover;
`;

const DiaryInputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const DiaryInputs = styled.div`
  all: unset;
  width: 100%;
  padding: 8px;
  border-bottom: 1px solid #65a30d;
  height: 20px;
  &:nth-child(n + 4) {
    width: 60%;
  }
`;

const ImgDiv = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const Img = styled.img`
  width: 154px;
  height: 154px;
  object-fit: contain;
`;

function DiaryImg({ writtenData }) {
  return (
    <DiarySection
      style={{
        backgroundImage: writtenData.template
          ? `url(${require(`./img/template/template${String(
              writtenData.template
            ).padStart(2, 0)}.png`)})`
          : "",
      }}
    >
      <DiaryHead writtenData={writtenData} />
      <DiaryInputsDiv>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((list) => (
          <DiaryInputs style={{ color: writtenData.textColor }} key={list}>
            {writtenData.text[list]}
          </DiaryInputs>
        ))}
        <ImgDiv>
          <Img src={writtenData.img} />
        </ImgDiv>
      </DiaryInputsDiv>
    </DiarySection>
  );
}

export default DiaryImg;
