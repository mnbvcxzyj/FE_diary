import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./style";
import moment from "moment";
//import DatePicker from "react-datepicker";
//import ReactDatePicker from './ReactDatepicker.css';
//import { ko } from "date-fns/esm/locale";
import Calendar from "react-calendar";
import CalendarCustom from "./CalendarCustom.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import arrowLeft from "./ImgFive/eva_arrow-ios-forward-fill.png";
import arrowRight from "./ImgFive/eva_arrow-ios-forward-fill (1).png";
import calendaricon from "./ImgFive/ant-design_calendar-twotone.png";

const Main = styled.div`
margin: 0px auto;
min-height: 100vh;
width: auto;
color: black;
background-color: #F6FAF1;
@media screen and (max-width: 768px) {
    width: 100%;
`;

const CalendarContents = styled.div`
  position: absolute;
  width: 444px;
  height 480px;
  top: 156px;
  left: 184px;
  border: 2px solid #9B8962;
  border-radius: 10px; 
`;

const Pic = styled.div`
  position: absolute;
  width: 320px;
  height: 480px;
  left: 776px;
  top: 156px;

  background: #ffffff;
  border-radius: 16px;
`;

const CalendarName = styled.div`
  position: absolute;
  width: 261.76px;
  height: 50px;
  left: 184px;
  top: 106px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #9b8962;
`;

const CalendarNameSmallDiv = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;

  color: #65a30d;
`;

const PicContentsTop = styled.div`
  position: absolute;
  width: 72px;
  height: 33px;
  left: 181.5px;
  top: 330px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const PicContentsLow = styled.div`
  position: absolute;
  width: 72px;
  height: 33px;
  left: 181.5px;
  top: 374px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const DiaryPost = styled.div`
    position: absolute;
    width: 444px;
    height 480px;
    margin-top: 200px;
    margin-left: 184px;
    border: 2px solid #9B8962;
    border-radius: 5px;
`;

const DiaryClick = styled.div`
  width: 150px;
  height: 20px;
  background-color: #77694c;
  border: 1px solid #77694c;
  border-radius: 5px;
  color: white;
  margin-top: 150px;
  margin-left: 150px;
  text-align: center;
`;

const NumberIng = styled.div`
  position: absolute;
  width: 26px;
  height: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #77694c;
  flex: none;
  order: 0;
  flex-grow: 0;
  text-align: center;
  justify-content: center;
  aligns-items: center;
`;

const NumDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 5px;
  gap: 10px;

  position: absolute;
  width: 36px;
  height: 24px;
  left: 142px;
  top: 436.5px;

  border-radius: 5px;
`;

const ArrowLeft = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 726px;
  top: 364.5px;
`;

const ArrowRight = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 1096px;
  top: 367px;
`;

const CalendarIcon = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 1194px;
  top: 640px;
`;

const NameBack = styled.div`
  position: absolute;
  width: 100px;
  height: 28px;
  left: 66.5px;
  top: 332.5px;

  background: #f7f7f7;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
`;

const DdayBack = styled.div`
  position: absolute;
  width: 100px;
  height: 28px;
  left: 66.5px;
  top: 376.5px;

  background: #f7f7f7;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
`;

const NameText = styled.div`
  position: absolute;
  width: 48px;
  height: 33px;
  left: 93.5px;
  top: 330px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
`;

const Rem = ({ items }) => {
  const [value, onChange] = useState(new Date());
  let dataFile = [];
  let dateCollection = [];
  items.map((pg) => dateCollection.push(pg.shareDate));
  console.log(dateCollection);

  const navigate = useNavigate();
  const goWrite = () => {
    navigate("/write");
  };
  const goRem = () => {
    navigate("/");
  };

  const [postNum, setPostNum] = useState(0);
  console.log(dataFile[postNum]);
  let dayCunt = {};
  dateCollection.map((li) => {
    li.map((realDate) => {
      if (dayCunt[realDate]) {
        dayCunt[realDate] = dayCunt[realDate] + 1;
      } else {
        dayCunt[realDate] = 1;
      }
    });
  });
  console.log(dayCunt);
  let dateSame = {};
  //사진 불러오기
  console.log(items);
  items.map((list) => {
    if (list.shareDate.includes(moment(value).format("YYYY-MM-DD"))) {
      dataFile.push(list);
    }
  });
  console.log(dataFile);
  // 날짜
  let diffDay;
  if (dataFile[postNum]) {
    const masTime = new Date(dataFile[postNum].shareDate[0]);
    const todayTime = new Date();
    const diff = Math.abs(todayTime - masTime);
    diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  }
  return (
    <>
      <Main>
        <GlobalStyle />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <CalendarName>
                  하루의
                  <CalendarNameSmallDiv>&nbsp;같이</CalendarNameSmallDiv>가 모여
                  만든
                  <CalendarNameSmallDiv>&nbsp;가치</CalendarNameSmallDiv>
                </CalendarName>

                <Calendar
                  onChange={onChange}
                  value={value}
                  calendarType="US" // 요일을 일요일부터 시작하도록 설정
                  formatDay={(locale, date) => moment(date).format("D")}
                  // onClickDay={(day) => console.log(day)}
                  tileClassName={({ date, view }) => {
                    let val;
                    if (
                      Object.keys(dayCunt).find(
                        (x) => x === moment(date).format("YYYY-MM-DD")
                      )
                    ) {
                      val = dayCunt[moment(date).format("YYYY-MM-DD")];
                      return `highlight${val}`;
                    }
                  }}
                />
                <div>
                  {dataFile[postNum] ? (
                    <>
                      <ArrowLeft>
                        <img
                          className="left"
                          src={arrowLeft}
                          onClick={() => {
                            setPostNum((num) => (num > 0 ? num - 1 : 0));
                          }}
                        />
                      </ArrowLeft>
                      <Pic onClick={goWrite}>
                        <img
                          src={dataFile[postNum].img}
                          style={{
                            width: "320px",
                            height: "292px",
                            borderRadius: "16px",
                          }}
                        />
                        <NameBack> {dataFile[postNum].diary_name}</NameBack>
                        <PicContentsTop>이랑 함께</PicContentsTop>
                        <DdayBack> D + {diffDay} </DdayBack>
                        <PicContentsLow>째 작성중</PicContentsLow>

                        <NumDiv>
                          <NumberIng>
                            {postNum + 1}/{dataFile.length}
                          </NumberIng>
                        </NumDiv>
                      </Pic>
                      <ArrowRight>
                        <img
                          src={arrowRight}
                          onClick={() => {
                            setPostNum((num) =>
                              num < dataFile.length - 1
                                ? num + 1
                                : dataFile.length - 1
                            );
                          }}
                        />
                      </ArrowRight>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </>
            }
          />
          <Route
            path="/write"
            element={
              <CalendarIcon>
                <img
                  src={calendaricon}
                  size="40"
                  color="black"
                  onClick={goRem}
                />
              </CalendarIcon>
            }
          />
        </Routes>
      </Main>
    </>
  );
};

export default Rem;
