import React, { useState } from "react";
import styled from "styled-components";
import logoIMG from "./img/logo1.png";
import picIMG from "./img/Vector.png";
import Search from "./Search";
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
  width: 40px;
  height: 40px;
  top: 306.82;
  bottom: 74.11px;
  right: 190px;
  left: 190px;
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

const todayTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month =
    now.getMonth() + 1 > 9 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
  const date = now.getDate() + 1 > 9 ? now.getDate() : "0" + now.getDate();

  return month + "." + date + "." + year;
};

function Connect() {
  const [image, setImage] = useState();
  const [findIMG, setFindIMG] = useState(false);
  const [search, setSearch] = useState(false);

  const onChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      {search ? (
        <Search image={image} />
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
              <Day>{todayTime()}</Day>
            </DayBox>
            <PicIMG>
              <img
                src={picIMG}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </PicIMG>
            <IMGButton
              onClick={() => {
                setFindIMG(true);
              }}
            >
              <IMGButtonText>이미지 찾기</IMGButtonText>
            </IMGButton>
          </CodePopup>
          {findIMG ? (
            <FindImg />
          ) : (
            <CodePopup>
              <LogoIMG>
                <img src={logoIMG} />
              </LogoIMG>
              <Ment1>연결 되었습니다!</Ment1>
              <Ment2>이제 일기장을 만들고 같이 추억을 기록하세요</Ment2>
              <Ment3>000 님과 처음 일기를 만든 날</Ment3>
              <DayBox>
                <Day>{todayTime()}</Day>
              </DayBox>
              <label htmlFor="inputImg">
                <PicIMG>
                  <img
                    src={image ? image : picIMG}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
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
              <IMGButton
                onClick={() => {
                  setSearch(true);
                }}
              >
                <IMGButtonText>이동하기</IMGButtonText>
              </IMGButton>
            </CodePopup>
          )}
        </>
      )}
    </>
  );
}

export default Connect;
