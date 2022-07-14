import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DiaryPlateBox = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: flex-end;
`;

const DiaryPlateTitle = styled.div`
  background-color: #ffffff;
  border-radius: 13px;
  width: 118px;
  text-align: center;
  padding: 10px;
`;

const DiaryPlate = styled.div`
  width: 564px;
  height: 450px;
  background: #ffffff;
  border-radius: 13px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`;

const TemplateTitle = styled.div``;
const TitleText = styled.span`
  background: #baa373;
  border-radius: 5px;
  color: #ffffff;
  padding: 2px 10px;
`;

const TempImglist = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
`;

const TempImg = styled.img`
  width: 94px;
  height: 67px;
  object-fit: cover;
  cursor: pointer;
`;

const DiarySave = styled.div`
  float: right;
  cursor: pointer;
`;

const SaveTitle = styled.span`
  background: #9ca3af;
  border-radius: 5px;
  padding: 2px 10px;
  color: #ffffff;
  &:hover {
    background: #84cc16;
  }
`;

const ChangeFontColor = styled.div`
  position: absolute;
  right: 148px;
  bottom: 114px;
`;

const FontColor = styled.div`
  display: flex;
  margin-top: 35px;
`;
const SelectColorWhite = styled.div`
  width: 36px;
  height: 36px;
  background: #ffffff;
  border: 0.3px solid #000000;
  border-radius: 50%;
  margin-right: 20px;
`;

const SelectColorBlack = styled.div`
  width: 36px;
  height: 36px;
  background: black;
  border: 0.3px solid #000000;
  border-radius: 50%;
`;

const templateOriginImg = [
  "template01",
  "template02",
  "template03",
  "template04",
  "template05",
  "template06",
  "template07",
  "template08",
];

const templateChristmasImg = ["template09", "template10"];
function DiaryTemplate({ setChangeImg, changeFc, fcColor, setFcColor }) {
  const tempRef = useRef([]);
  const onClick = (event) => {
    let erase = false;
    setChangeImg(event.target.id);
    if (event.target.style.border) {
      erase = true;
    }
    for (let index = 0; index < 10; index++) {
      tempRef.current[
        `template${String(index + 1).padStart(2, 0)}`
      ].style.border = "";
    }
    if (erase) {
      event.target.style.border = "";
      setChangeImg("");
    } else {
      event.target.style.border = "5px solid #8CCF25";
    }
  };
  const navigate = useNavigate();
  const saveBtn = () => {
    navigate("../");
  };

  const onClickFc = (event) => {
    setFcColor(event.target.id);
    for (
      let index = 0;
      index < event.target.parentElement.children.length;
      index++
    ) {
      event.target.parentElement.children[index].style.border = "";
    }
    event.target.style.border = "3px solid #84CC16";
  };
  return (
    <DiaryPlateBox>
      <DiaryPlateTitle>일기장 템플릿</DiaryPlateTitle>
      <DiaryPlate>
        <TemplateTitle>
          <TitleText>기본</TitleText>
        </TemplateTitle>
        <TempImglist>
          {templateOriginImg.map((list, index) => (
            <TempImg
              key={list}
              id={list}
              src={require(`./img/template/${list}.png`)}
              ref={(temp) => (tempRef.current[list] = temp)}
              onClick={onClick}
            />
          ))}
        </TempImglist>
        <TemplateTitle>
          <TitleText>크리스마스 ver</TitleText>
        </TemplateTitle>
        <TempImglist>
          {templateChristmasImg.map((list) => (
            <TempImg
              id={list}
              key={list}
              src={require(`./img/template/${list}.png`)}
              ref={(temp) => (tempRef.current[list] = temp)}
              onClick={onClick}
            />
          ))}
        </TempImglist>
        {changeFc ? (
          <ChangeFontColor>
            <TemplateTitle>
              <TitleText>글씨의 색상</TitleText>
            </TemplateTitle>
            <FontColor>
              <SelectColorWhite
                id="#FFFFFF"
                onClick={onClickFc}
              ></SelectColorWhite>
              <SelectColorBlack
                id="#000000"
                onClick={onClickFc}
                style={{ border: "3px solid #84CC16" }}
              ></SelectColorBlack>
            </FontColor>
          </ChangeFontColor>
        ) : (
          ""
        )}

        <DiarySave>
          <SaveTitle onClick={saveBtn}>저장하기</SaveTitle>
        </DiarySave>
      </DiaryPlate>
    </DiaryPlateBox>
  );
}

export default DiaryTemplate;
