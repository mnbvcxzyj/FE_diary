import React from "react";
import styled from "styled-components";
import DiaryHead from "./DiaryHead";

const DiarySection = styled.div`
  padding: 20px;
  width: 520px;
`;

const DiaryInputsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const DiaryInputs = styled.input`
  all: unset;
  width: 100%;
  outline: none;
  height: 36px;
  border-bottom: 1px solid #65a30d;
`;

function DiaryNonImg() {
  return (
    <DiarySection>
      <DiaryHead />
      <DiaryInputsDiv>
        <DiaryInputs maxLength="53" />
        <DiaryInputs maxLength="53" />
        <DiaryInputs maxLength="53" />
        <DiaryInputs maxLength="53" />
        <DiaryInputs maxLength="53" />
        <DiaryInputs maxLength="53" />
        <DiaryInputs maxLength="53" />
        <DiaryInputs maxLength="53" />
        <DiaryInputs maxLength="53" />
      </DiaryInputsDiv>
    </DiarySection>
  );
}

export default DiaryNonImg;
