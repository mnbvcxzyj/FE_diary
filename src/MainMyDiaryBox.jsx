import React, { useRef, useState, useEffect } from "react";

import styled from "styled-components";
import data from "./data.json";
import MainModal from "./MainModal";

const DiaryBoxDiv = styled.div`
  width: 240px;
  height: 340px;
  position: relative;
  /* White */

  background: #ffffff;
  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const DiaryImgDiv = styled.div`
  position: relative;
  width: 240px;
  height: 220px;
  left: 0px;
  top: 0px;

  border-radius: 10px 10px 0px 0px;
`;

const AlbumImgDiv = styled.img`
  position: absolute;
  left: 12px;
  right: 85%;
  top: 84.55%;
  bottom: 4.55%;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const DiaryNameDiv = styled.div`
  position: absolute;
  width: 180px;
  height: 28px;
  left: 30px;
  top: 243px;

  background: #f7f7f7;
  border-radius: 5px;
`;

const NameTextDiv = styled.div`
  position: relative;
  width: 67px;
  height: 33px;
  left: 52.5px;

  right: 60.5px;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const DayDiv = styled.div`
  position: absolute;
  width: 100px;
  height: 28px;
  left: 30px;
  top: 287px;

  /* 가치의가치/B/배경 */

  background: #f7f7f7;
  border-radius: 5px;
`;

const DayTextDiv = styled.div`
  position: absolute;
  width: 64px;
  height: 33px;
  left: 22px;
  right: 14px;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const WriteTextDiv = styled.div`
  /* 째 작성 */

  position: absolute;
  width: 72px;
  height: 33px;
  left: 145px;
  top: 284.5px;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;

  color: #000000;
`;
function MainDiaryBox() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <DiaryBoxDiv>
      <DiaryImgDiv style={{ backgroundImage: `URL(${data[0].img})` }}>
        <AlbumImgDiv src="img/photo.png" onClick={openModal} />
        {data.map((list) => (
          <MainModal
            open={showModal}
            closeModal={() => setShowModal(!showModal)}
            diaryImage={list["img"]}
          ></MainModal>
        ))}
      </DiaryImgDiv>
      <DiaryNameDiv>
        <NameTextDiv>내 일기장</NameTextDiv>
      </DiaryNameDiv>
      <DayDiv>
        <DayTextDiv>D + 456</DayTextDiv>
      </DayDiv>
      <WriteTextDiv>째 작성</WriteTextDiv>
    </DiaryBoxDiv>
  );
}

export default MainDiaryBox;
