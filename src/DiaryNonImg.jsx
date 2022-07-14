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

const DiaryInputs = styled.div`
  all: unset;
  width: 100%;
  outline: none;
  padding: 8px;
  border-bottom: 1px solid #65a30d;
  height: 20px;
`;

function DiaryNonImg({ selectDate, setSelectDate, onChange }) {
  return (
    <DiarySection>
      <DiaryHead
        selectDate={selectDate}
        setSelectDate={setSelectDate}
        onChange={onChange}
      />
      <DiaryInputsDiv>
        <DiaryInputs></DiaryInputs>
        <DiaryInputs></DiaryInputs>
        <DiaryInputs></DiaryInputs>
        <DiaryInputs></DiaryInputs>
        <DiaryInputs></DiaryInputs>
        <DiaryInputs></DiaryInputs>
        <DiaryInputs></DiaryInputs>
        <DiaryInputs></DiaryInputs>
        <DiaryInputs></DiaryInputs>
      </DiaryInputsDiv>
    </DiarySection>
  );
}

export default DiaryNonImg;
