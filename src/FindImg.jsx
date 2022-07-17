import React from "react";
import styled from "styled-components";
import logoIMG from "./img/logo1.png";
import { useState, useRef } from "react";
import picIMG from "./img/Vector.png";
import Search from "./Search";

const CodePopup = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  left: 430px;
  top: 104px;
  background-color: #ffffff;
  border-radius: 10px;
`;

const LogoIMG = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 171px;
  top: 56px;
`;

const Ment1 = styled.div`
  position: absolute;
  width: 294px;
  height: 34px;
  left: 61.12px;
  top: 144.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  color: #9b8962;
`;

const Ment2 = styled.div`
  position: absolute;
  width: 106.15px;
  height: 17px;
  left: 158.13px;
  top: 184.88px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  align-items: center;
  text-align: center;
  color: #9b8962;
  white-space: pre-wrap;
`;

const Ment3 = styled.div`
  position: absolute;
  width: 133.88px;
  height: 17px;
  left: 95.12px;
  top: 233.75px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  align-items: center;
  text-align: center;
  color: #77694c;
`;

const DayBox = styled.div`
  position: absolute;
  width: 240px;
  height: 24px;
  left: 88px;
  top: 259.25px;
  background: #f7f7f7;
  border-radius: 10px;
`;

const Day = styled.div`
  position: absolute;
  width: 182px;
  height: 17px;
  left: 28.88px;
  top: 2.75px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #84cc16;
`;

const PicIMG = styled.div`
  position: absolute;
  left: 45.24%;
  right: 45.24%;
  top: 73.05%;
  bottom: 17.65%;
`;

const IMGButton = styled.div`
  position: absolute;
  width: 140px;
  height: 32px;
  left: 140px;
  top: 376px;
  background: #84cc16;
  border-radius: 10px;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

const IMGButtonText = styled.div`
  position: absolute;
  width: 103.25px;
  height: 17px;
  left: 18.38px;
  top: 7.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  text-align: center;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function Connect() {
  const [Image, setImage] = useState();
  const fileInput = useRef(null);
  const onChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <button id="fileInputBtn">이미지 찿기</button>
      <input
        type="file"
        accept="image/*"
        id="fileInputBtn"
        onChange={(e) => {
          onChange(e);
        }}
        ref={fileInput}
        style={{ width: "0px", height: "0px" }}
      />
      {Image ? (
        <PicIMG>
          <img src={picIMG} />
        </PicIMG>
      ) : (
        <IMGButton>
          <IMGButtonText>이미지 찾기</IMGButtonText>
        </IMGButton>
      )}
    </>
  );
}

export default Connect;
