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
  background-size: cover;
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
  object-fit: fill;
  cursor: pointer;
`;

const DiaryNameDiv = styled.div`
  position: absolute;
  width: 100px;
  height: 28px;
  left: 30px;
  top: 243px;

  /* 가치의가치/B/배경 */

  background: #f7f7f7;
  border-radius: 5px;
`;

const NameTextDiv = styled.div`
  position: relative;

  width: 48px;
  height: 33px;
  left: 20px;

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

const WithWriteText = styled.div`
  position: relative;
  width: 72px;
  height: 33px;
  left: 145px;
  top: 23px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;

  color: #000000;
`;

function MainDiaryBox({ list }) {
  const [showModal, setShowModal] = useState(false);
  const [Image, setImage] = useState(list["img"]);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <DiaryBoxDiv>
      {/* 여기 이미지가 새롭게 파일 업로드한 이미지가 될 수 있도록 변경  */}
      <DiaryImgDiv style={{ backgroundImage: `URL(${list["img"]})` }}>
        <AlbumImgDiv src="img/photo.png" onClick={openModal} />
        <MainModal
          open={showModal}
          closeModal={() => setShowModal(!showModal)}
          diaryImage={list["img"]}
        ></MainModal>
      </DiaryImgDiv>

      <DiaryNameDiv>
        <NameTextDiv> {list["diary_name"]}</NameTextDiv>
      </DiaryNameDiv>
      <WithWriteText>와 함께</WithWriteText>
      <DayDiv>
        <DayTextDiv>D + {list["d-day"]}</DayTextDiv>
      </DayDiv>
      <WriteTextDiv>째 작성</WriteTextDiv>
    </DiaryBoxDiv>
  );
}

export default MainDiaryBox;
