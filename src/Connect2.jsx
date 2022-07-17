import React from "react";
import styled from "styled-components";
import logoIMG from "./img/logo1.png";
import { useState } from "react";
import picIMG from "./img/Vector.png";
import data from "./data.json";
import Search2 from "./Search2";
import FindImg from "./FindImg";

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
  width: 80px;
  height: 73.33px;
  left: 171px;
  top: 297.67px;
  border-radius: 10px;
`;

const IMGButton1 = styled.div`
  position: absolute;
  width: 80px;
  height: 24px;
  left: 120px;
  top: 380px;
  background: #84cc16;
  border-radius: 10px;
  cursor: pointer;
`;

const IMGButton2 = styled.div`
  position: absolute;
  width: 80px;
  height: 24px;
  left: 220px;
  top: 380px;
  background: #84cc16;
  border-radius: 10px;
  cursor: pointer;
`;

const IMGButtonText1 = styled.div`
  position: absolute;
  width: 50.62px;
  height: 17px;
  left: 14.69px;
  top: 3.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const IMGButtonText2 = styled.div`
  position: absolute;
  width: 62.81px;
  height: 17px;
  left: 8.59px;
  top: 3.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

function Connect2({ same }) {
  const [image, setImage] = useState();
  const [search, setSearch] = useState(false);
  const [change, setChange] = useState(false);

  if (image) {
    same.img = image;
  }
  const onChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      {search ? (
        <Search2 same={same} />
      ) : (
        <>
          <CodePopup>
            <LogoIMG>
              <img src={logoIMG} />
            </LogoIMG>
            <Ment1>연결 되었습니다!</Ment1>
            <Ment2>이제 일기장을 만들고 같이 추억을 기록하세요</Ment2>
            <Ment3>000 님과 처음 일기를 만든 날</Ment3>
            <DayBox>
              <Day>{same.shareDate[0]}</Day>
            </DayBox>
            <label htmlFor="inputImg">
              <PicIMG>
                <img
                  src={image ? image : same.img}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </PicIMG>
            </label>
            <input
              id="inputImg"
              type="file"
              accept="image/*"
              onChange={onChange}
              style={{ width: 0, height: 0 }}
            />
            <IMGButton1
              onClick={() => {
                setSearch(true);
              }}
            >
              <IMGButtonText1>이동 하기</IMGButtonText1>
            </IMGButton1>

            <IMGButton2
              onClick={() => {
                setSearch(true);
              }}
            >
              <IMGButtonText2>그대로 사용</IMGButtonText2>
            </IMGButton2>
          </CodePopup>
        </>
      )}
    </>
  );
}

export default Connect2;
