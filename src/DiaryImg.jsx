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
  position: relative;
`;

const DiaryInputs = styled.input`
  all: unset;
  width: 100%;
  outline: none;
  height: 36px;
  border-bottom: 1px solid #65a30d;
`;

const DiaryShortInputs = styled.input`
  all: unset;
  width: 60%;
  outline: none;
  height: 36px;
  border-bottom: 1px solid #65a30d;
`;

const ImgDiv = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

function DiaryImg({ selectDate, setSelectDate, onChange }) {
  return (
    <DiarySection>
      <DiaryHead
        selectDate={selectDate}
        setSelectDate={setSelectDate}
        onChange={onChange}
      />
      <DiaryInputsDiv>
        <DiaryInputs />
        <DiaryInputs maxLength="33" />
        <DiaryInputs maxLength="33" />
        <DiaryInputs maxLength="33" />
        <DiaryShortInputs maxLength="20" />
        <DiaryShortInputs maxLength="20" />
        <DiaryShortInputs maxLength="20" />
        <DiaryShortInputs maxLength="20" />
        <DiaryShortInputs maxLength="20" />
        <ImgDiv>
          <svg
            width="154"
            height="154"
            viewBox="0 0 154 154"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M134 1H20C9.50658 1 1 9.50658 1 20V134C1 135.065 1.08759 136.109 1.25583 137.126C2.74657 146.132 10.5712 153 20 153H134C144.494 153 153 144.494 153 134V97.8059V20C153 9.50658 144.494 1 134 1Z"
              stroke="#65A30D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M67.5 48.5C67.5 58.9937 58.9937 67.5 48.5 67.5C38.0066 67.5 29.5 58.9937 29.5 48.5C29.5 38.0066 38.0066 29.5 48.5 29.5C58.9937 29.5 67.5 38.0066 67.5 48.5Z"
              stroke="#65A30D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.25488 137.127L37.5515 100.83C44.0118 95.1776 53.4599 94.5591 60.6021 99.3205L65.4395 102.545C72.3232 107.134 81.3872 106.741 87.8481 101.573L113.005 81.4463C119.418 76.3163 128.349 75.9145 135.166 80.3111C135.921 80.7984 136.594 81.4017 137.229 82.0382L152.999 97.8072"
              stroke="#65A30D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ImgDiv>
      </DiaryInputsDiv>
    </DiarySection>
  );
}

export default DiaryImg;
