import React, { useState } from "react";
import styled from "styled-components";
import Next from "./Next";

const CodePopup = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  left: 430px;
  top: 104px;
  background-color: #ffffff;
  border-radius: 10px;
`;

const PicDiv = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  left: 90px;
  top: 24px;
  background: #ffffff;
  border-radius: 10px;
`;

const ImgDiv = styled.div`
  position: absolute;
  width: 240px;
  height: 220px;
  left: 0px;
  top: 0px;
  border-radius: 10px 10px 0px 0px;
  backdround: ;
`;

const LetterDiv = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  left: 90px;
  top: 24px;
  background: #ffffff;
  border-radius: 10px;
`;

const NameDiv = styled.div`
  position: absolute;
  width: 100px;
  height: 28px;
  left: 30px;
  top: 243px;
  background: #f7f7f7;
  border-radius: 5px;
`;

const Name = styled.div`
  height: 33px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
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
  align-items: center;
  justify-content: center;
`;

const IMGButtonText = styled.div`
  position: absolute;
  width: 103.25px;
  height: 17px;
  left: 30px;
  top: 7.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  align: center;
  color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const With = styled.div`
  position: absolute;
  width: 72px;
  height: 33px;
  left: 145px;
  top: 240.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const Write = styled.div`
  position: absolute;
  width: 72px;
  height: 33px;
  left: 145px;
  top: 284.5px;
  font-style: normal;
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
  background: #f7f7f7;
  border-radius: 5px;
`;

const DDay = styled.div`
  height: 33px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Search({ image }) {
  const [next, setNext] = useState(false);
  return (
    <>
      {next ? (
        <Next />
      ) : (
        <CodePopup>
          <PicDiv>
            <ImgDiv>
              <img
                src={image ? image : ""}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </ImgDiv>
            <NameDiv>
              <Name>
                <input type="text" size="10" />
              </Name>
            </NameDiv>
            <With>이랑 함께</With>
            <DayDiv>
              <DDay>D+0</DDay>
            </DayDiv>
            <Write>째 작성</Write>
          </PicDiv>
          <IMGButton
            onClick={() => {
              setNext(true);
            }}
          >
            <IMGButtonText>같이 쓰러 가기</IMGButtonText>
          </IMGButton>
        </CodePopup>
      )}
    </>
  );
}

export default Search;
