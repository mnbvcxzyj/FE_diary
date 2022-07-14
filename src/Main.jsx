import React, { useRef } from "react";
import styled from "styled-components";
import Modal from "react-modal";

const SlogunTitleDiv = styled.div`
  position: absolute;
  width: 240.41px;
  height: 50px;
  left: 67px;
  top: 132px;

  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;

  color: #9b8962;
`;

const SlogunBigDiv = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;

  color: #65a30d;
`;

const SlogunSmallDiv = styled.div`
  position: absolute;
  width: 500.33px;
  height: 50px;
  left: 67px;
  top: 182px;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;

  color: #9b8962;
`;

const DiaryDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 64px;

  position: absolute;
  width: 1152px;
  height: 340px;
  left: 64px;
  top: 270px;
`;

const DiaryBoxDiv = styled.div`
  width: 240px;
  height: 340px;

  /* White */

  background: #ffffff;
  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const DiaryImgDiv = styled.div`
  position: absolute;
  width: 240px;
  height: 220px;
  left: 0px;
  top: 0px;

  background: url(.jpg), #f7f7f7;
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
  position: absolute;
  width: 67px;
  height: 33px;
  left: 52.5px;
  top: 2.5px;
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
function Main() {
  return (
    <>
      <SlogunTitleDiv>
        그 날 하루의
        <SlogunBigDiv>&nbsp;가치</SlogunBigDiv>
      </SlogunTitleDiv>
      <SlogunSmallDiv>
        기억하고 싶은 하루를 기억하고 싶은 상대와 기록하세요
      </SlogunSmallDiv>
      <DiaryDiv>
        {" "}
        <DiaryBoxDiv>
          <DiaryImgDiv src="">
            <AlbumImgDiv src="img/photo.png" />
          </DiaryImgDiv>
          <DiaryNameDiv>
            <NameTextDiv>내 일기장</NameTextDiv>
          </DiaryNameDiv>
          <DayDiv>
            <DayTextDiv>D + 456</DayTextDiv>
          </DayDiv>
          <WriteTextDiv>째 작성</WriteTextDiv>
        </DiaryBoxDiv>
      </DiaryDiv>
    </>
  );
}

export default Main;
