import React from "react";
import styled from "styled-components";
import DiaryHead from "./DiaryHead";

const DiarySection = styled.div`
  padding: 20px;
  width: 520px;
`;

const DiaryContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const DiaryContent = styled.div`
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
    <DiarySection>
      <DiaryHead writtenData={writtenData} />
      <DiaryContentsBox>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((list) => (
          <DiaryContent style={{ color: writtenData.textColor }} key={list}>
            {writtenData.text[list]}
          </DiaryContent>
        ))}
        <ImgDiv>
          <Img src={writtenData.img} />
        </ImgDiv>
      </DiaryContentsBox>
    </DiarySection>
  );
}

export default DiaryImg;
