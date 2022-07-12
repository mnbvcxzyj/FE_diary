import React, { useState } from "react";
import styled from "styled-components";
import DiaryImg from "./DiaryImg";
import DiaryNonImg from "./DiaryNonImg";

const DiaryBox = styled.div`
  width: 1200px;
  height: 500px;
  background-color: #c8e499;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 48px;
  display: flex;
  position: relative;
`;

const DiaryCenter = styled.div`
  display: flex;
`;

const DiaryBar = styled.div`
  width: 1px;
  height: 498px;
  background-color: #4d7c0f;
  margin: 0 20px;
`;

const DiaryCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f4ffe2;
`;

const DiaryCircleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const DiaryPage = () => {
  return (
    <DiaryBox>
      <DiaryNonImg />
      <DiaryCenter>
        <DiaryCircleBox>
          <DiaryCircle />
          <DiaryCircle />
          <DiaryCircle />
          <DiaryCircle />
          <DiaryCircle />
          <DiaryCircle />
          <DiaryCircle />
        </DiaryCircleBox>
        <DiaryBar></DiaryBar>
        <DiaryCircleBox>
          <DiaryCircle />
          <DiaryCircle />
          <DiaryCircle />
          <DiaryCircle />
          <DiaryCircle />
          <DiaryCircle />
          <DiaryCircle />
        </DiaryCircleBox>
      </DiaryCenter>
      <DiaryImg />
    </DiaryBox>
  );
};

export default DiaryPage;
