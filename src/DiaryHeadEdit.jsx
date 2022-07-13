import React, { useState } from "react";
import styled from "styled-components";
import song from "./img/song.png";

const DiaryHeader = styled.div`
  height: 87px;
  background: #f4ffe2;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  position: relative;
`;

const DiaryInfo = styled.div`
  display: flex;
  border-bottom: 2px solid #d1b883;
  padding: 10px 0;
  align-items: center;
`;
const InfoDate = styled.div`
  border-right: 2px solid #d1b883;
  color: #9b8962;
  padding-right: 15px;
`;

const DateInput = styled.input`
  all: unset;
`;

const InfoIcon = styled.div`
  border-right: 2px solid #d1b883;
  padding: 0 20px;
  display: flex;
`;

const InfoMusic = styled.div`
  padding-left: 15px;
  display: flex;
`;
const DiaryTitle = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0;
`;

const TitleText = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #77694c;
`;

const TitleInput = styled.input`
  all: unset;
  width: 89%;
`;

const IconImgDiv = styled.div`
  width: 57px;
  border-bottom: 1px solid #65a30d;
`;

const IconImg = styled.img`
  height: 20px;
  cursor: pointer;
`;

const WeatherIconMore = styled.div`
  width: 320px;
  height: 222px;
  right: 32px;
  top: 42px;
  position: absolute;
  background: #ebffc8;
  border-radius: 13px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 18px;
  box-sizing: border-box;
  align-items: center;
  z-index: 1;
`;

const EmotionIconMore = styled.div`
  width: 320px;
  height: 222px;
  position: absolute;
  background: #ebffc8;
  border-radius: 13px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 18px;
  box-sizing: border-box;
  align-items: center;
  top: 42px;
  right: -20px;
  z-index: 1;
`;

const IconContent = styled.div`
  display: flex;
  width: 50%;
`;

const IconDes = styled.div`
  background: #f8ffed;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 10px;
  height: 22px;
  box-sizing: border-box;
`;

const emotion = [
  { id: "happy", desKr: "기분 좋음" },
  { id: "lol", desKr: "깜짝 놀람" },
  { id: "sad", desKr: "기분 안좋음" },
  { id: "exercise", desKr: "운동함" },
  { id: "soso", desKr: "그저 그럼" },
  { id: "present", desKr: "선물 받은 듯함" },
  { id: "music", desKr: "음악 힐링" },
  { id: "dizzy", desKr: "어지러움" },
  { id: "tea", desKr: "티타임 힐링" },
  { id: "love", desKr: "사랑 가득" },
];

const weather = [
  { id: "cloudy", desKr: "구름낀 날" },
  { id: "lightening", desKr: "번개" },
  { id: "snowy", desKr: "눈 펑펑" },
  { id: "rainy", desKr: "비 주륵주륵" },
  { id: "thunderstorm", desKr: "뇌우" },
  { id: "windy", desKr: "바람 휘잉" },
  { id: "fog", desKr: "안개" },
  { id: "snow", desKr: "눈 온 날" },
  { id: "moon", desKr: "달 예쁜 날" },
  { id: "virus", desKr: "바이러스" },
  { id: "star", desKr: "하늘에 별" },
  { id: "clean", desKr: "청명한 하늘" },
  { id: "sunny", desKr: "해 쨍쩅" },
];

function DiaryHeadEdit() {
  //날짜
  const d = new Date();
  const today = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
  const [reportDate, setReportDate] = useState(today);
  const onChange = (event) => {
    setReportDate(event.target.value);
  };
  //아이콘
  const [saveWeather, setSaveWeather] = useState("sunny");
  const [show, setShow] = useState(false);
  const [saveEmotion, setSaveEmotion] = useState("happy");
  const [showEm, setShowEm] = useState(false);
  const onClick = (event) => {
    setSaveWeather(event.target.parentElement.parentElement.id);
    const color =
      event.target.parentElement.parentElement.parentElement.children;
    for (let index = 0; index < color.length; index++) {
      color[index].style.backgroundColor = "";
    }
    event.target.parentElement.parentElement.style.backgroundColor =
      "rgba(140, 215, 17, 0.4)";
  };
  const onClickShow = () => {
    setShow(!show);
  };

  const onClickEm = (event) => {
    setSaveEmotion(event.target.parentElement.parentElement.id);
    const color =
      event.target.parentElement.parentElement.parentElement.children;
    for (let index = 0; index < color.length; index++) {
      color[index].style.backgroundColor = "";
    }
    event.target.parentElement.parentElement.style.backgroundColor =
      "rgba(140, 215, 17, 0.4)";
  };
  const onClickShowEm = () => {
    setShowEm(!showEm);
  };

  return (
    <DiaryHeader>
      <DiaryInfo>
        <InfoDate>
          <DateInput type="date" value={reportDate} onChange={onChange} />
        </InfoDate>
        <InfoIcon>
          <IconImg
            src={require(`./img/weather/${saveWeather}.png`)}
            onClick={onClickShow}
          />
        </InfoIcon>
        <InfoIcon>
          <IconImg
            src={require(`./img/emotion/${saveEmotion}.png`)}
            onClick={onClickShowEm}
          />
        </InfoIcon>
        <InfoMusic>
          <IconImg src={song} />
        </InfoMusic>
      </DiaryInfo>
      <DiaryTitle>
        <TitleText>제목</TitleText>
        <TitleInput />
      </DiaryTitle>
      {show ? (
        <WeatherIconMore>
          {weather.map((list) => (
            <IconContent key={list.id} id={list.id}>
              <IconImgDiv>
                <IconImg
                  src={require(`./img/weather/${list.id}.png`)}
                  onClick={onClick}
                />
              </IconImgDiv>
              <IconDes>{list.desKr}</IconDes>
            </IconContent>
          ))}
        </WeatherIconMore>
      ) : (
        ""
      )}
      {showEm ? (
        <EmotionIconMore>
          {emotion.map((list) => (
            <IconContent key={list.id} id={list.id}>
              <IconImgDiv>
                <IconImg
                  src={require(`./img/emotion/${list.id}.png`)}
                  onClick={onClickEm}
                />
              </IconImgDiv>
              <IconDes>{list.desKr}</IconDes>
            </IconContent>
          ))}
        </EmotionIconMore>
      ) : (
        ""
      )}
    </DiaryHeader>
  );
}

export default DiaryHeadEdit;
