import React, { useState } from "react";
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
`;

const DiaryInputs = styled.div`
  all: unset;
  width: 100%;
  outline: none;
  padding: 8px;
  border-bottom: 1px solid #65a30d;
  height: 20px;
`;

function DiaryNonImg({ writtenData }) {
  return (
    <DiarySection

    >
      <DiaryHead writtenData={writtenData} />
      <DiaryInputsDiv>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((list) => (
          <DiaryInputs style={{ color: writtenData.textColor }} key={list}>
            {writtenData.text[list]}
          </DiaryInputs>
        ))}
      </DiaryInputsDiv>
    </DiarySection>
  );
}

export default DiaryNonImg;
