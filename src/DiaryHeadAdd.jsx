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
  margin-left: 15px;
  display: flex;
  cursor: pointer;
`;

const MusicInput = styled.input`
  width: 0;
  height: 0;
`;

const MusicValue = styled.div`
  padding: 4px 10px;
  background: #e4ffb8;
  border-radius: 10px;
`;

const MusicLabel = styled.label`
  display: flex;
  align-items: center;
`;

const DiaryTitle = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 2px;
  &:focus-within {
    background: #e4ffb8;
    border-radius: 10px;
  }
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

const DetailInput = styled.input`
  background: #e4ffb8;
  border-radius: 10px;
  width: 208px;
  height: 21px;
  border: none;
  outline: none;
  margin-left: 15px;
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

function DiaryHeadAdd({ userData }) {
  //날짜
  const td = new Date();
  const today = new Date(td.getTime() - td.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
  const [selectDate, setSelectDate] = useState(today);
  const onChange = (event) => {
    setSelectDate(event.target.value);
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
    setShowEm(false);
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
    setShow(false);
  };
  const [hover, setHover] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };
  const clickMusicClose = () => {
    setShowDetail(true);
  };
  const [musicName, setMusicName] = useState("");
  const onChangeMusic = (event) => {
    setMusicName(event.target.files[0].name);
  };

  return (
    <DiaryHeader>
      <DiaryInfo>
        <InfoDate>
          <DateInput type="date" value={selectDate} onChange={onChange} />
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
        {showDetail ? (
          <DetailInput placeholder="상세설명" />
        ) : (
          <InfoMusic onMouseOver={onHover} onMouseOut={onLeave}>
            <MusicLabel htmlFor="musicfile">
              <IconImg src={song} />
            </MusicLabel>
            <MusicInput
              id="musicfile"
              type="file"
              accept="audio/*"
              onChange={onChangeMusic}
            />
            {musicName ? <MusicValue>{musicName}</MusicValue> : ""}

            {hover ? (
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={clickMusicClose}
              >
                <circle cx="5" cy="5" r="5" fill="#D9D9D9" />
                <path
                  d="M4.50367 4.82C4.35034 4.61333 4.17701 4.40333 3.98367 4.19C3.79701 3.97667 3.64034 3.81333 3.51367 3.7C3.46701 3.66 3.41034 3.61333 3.34367 3.56C3.28367 3.50667 3.22367 3.45333 3.16367 3.4C3.11034 3.34 3.06701 3.28667 3.03367 3.24C3.00034 3.18667 2.98701 3.14 2.99367 3.1C3.00034 3.06 3.03701 3.03 3.10367 3.01C3.17701 2.99 3.25701 2.98 3.34367 2.98C3.43034 2.98 3.51367 2.98667 3.59367 3C3.67367 3.00667 3.73034 3.01667 3.76367 3.03C3.83701 3.05667 3.92367 3.11 4.02367 3.19C4.12367 3.27 4.22701 3.36333 4.33367 3.47C4.44701 3.57667 4.55701 3.69333 4.66367 3.82C4.77701 3.94667 4.87701 4.07 4.96367 4.19C5.08367 4.01667 5.19034 3.85667 5.28367 3.71C5.38367 3.56333 5.49367 3.40333 5.61367 3.23C5.66034 3.15667 5.74034 3.07333 5.85367 2.98C5.96701 2.88667 6.09034 2.80333 6.22367 2.73C6.36367 2.65667 6.49701 2.60333 6.62367 2.57C6.75701 2.53 6.87034 2.53 6.96367 2.57C7.01034 2.60333 7.01701 2.65333 6.98367 2.72C6.95034 2.78 6.90034 2.84667 6.83367 2.92C6.77367 2.99333 6.71034 3.06667 6.64367 3.14C6.57701 3.20667 6.53367 3.25667 6.51367 3.29C6.36701 3.51 6.21034 3.75667 6.04367 4.03C5.88367 4.29667 5.70034 4.59 5.49367 4.91C5.76034 5.21 6.00367 5.51333 6.22367 5.82C6.44367 6.12667 6.66701 6.43667 6.89367 6.75C6.93367 6.79667 6.97367 6.85 7.01367 6.91C7.06034 6.97 7.10034 7.03 7.13367 7.09C7.16701 7.15 7.19034 7.20667 7.20367 7.26C7.22367 7.31333 7.22367 7.35333 7.20367 7.38C7.17034 7.41333 7.11367 7.43 7.03367 7.43C6.96034 7.43 6.87701 7.41667 6.78367 7.39C6.69034 7.36333 6.59701 7.32 6.50367 7.26C6.41034 7.20667 6.33034 7.14 6.26367 7.06C6.13034 6.89333 5.95701 6.68 5.74367 6.42C5.53034 6.16 5.29367 5.87 5.03367 5.55C4.94034 5.67667 4.85034 5.80667 4.76367 5.94C4.67701 6.07333 4.59367 6.2 4.51367 6.32C4.43367 6.44 4.36034 6.55 4.29367 6.65C4.22701 6.74333 4.17034 6.82 4.12367 6.88C4.09034 6.92667 4.01701 6.98333 3.90367 7.05C3.79701 7.12333 3.67701 7.18667 3.54367 7.24C3.41701 7.3 3.29034 7.33333 3.16367 7.34C3.03701 7.35333 2.93701 7.32333 2.86367 7.25C2.83701 7.22333 2.83367 7.19 2.85367 7.15C2.87367 7.11 2.90367 7.06333 2.94367 7.01C2.99034 6.96333 3.03701 6.91333 3.08367 6.86C3.13701 6.80667 3.18367 6.75667 3.22367 6.71C3.33701 6.57 3.45034 6.41667 3.56367 6.25C3.67701 6.07667 3.78701 5.90667 3.89367 5.74C4.00701 5.56667 4.11367 5.4 4.21367 5.24C4.32034 5.08 4.41701 4.94 4.50367 4.82Z"
                  fill="black"
                />
              </svg>
            ) : (
              ""
            )}
          </InfoMusic>
        )}
      </DiaryInfo>
      <DiaryTitle>
        <TitleText>제목</TitleText>
        <TitleInput placeholder="제목을 입력해주세요(28자 이내)" />
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

export default DiaryHeadAdd;
