import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from "./style";
import moment from 'moment';
//import DatePicker from "react-datepicker";
//import ReactDatePicker from './ReactDatepicker.css';
//import { ko } from "date-fns/esm/locale";
import Calendar from 'react-calendar';
import CalendarCustom from './CalendarCustom.css';
import { AiOutlineCalendar } from 'react-icons/ai';




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
  border-radius: 5px;
`;

const Pic = styled.div`
    position: absolute;
    width: 320px;
    height: 480px;
    margin-left: 776px;
    margin-top: 156px;

    background: #FFFFFF;
    border-radius: 16px;
`;

const CalendarName = styled.div`
  margin-right; 150px;
`;

const PicContentsTop = styled.div`
 font-size: 15px;
`;

const PicContentsLow = styled.div`
 font-size: 15px;
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
  background-color: #77694C;
  border: 1px solid #77694C;
  border-radius: 5px;
  color: white;
  margin-top: 150px;
  margin-left: 150px;
`;


const Rem = ({ items }) => {
    console.log(items);
    const [value, onChange] = useState(new Date());

    const [startDate, setStartDate] = useState(new Date());

    const getDayName = (date) => {      
        return date.toLocaleDateString('ko-KR', {
        weekday: 'long',
        }).substr(0, 1);
      }
      const createDate = (date) => {
        return new Date(new Date(date.getFullYear()
          , date.getMonth()
          , date.getDate()  
          , 0
          , 0
          , 0));
      }

    const navigate = useNavigate();
        const goWrite = () => {
        navigate('/write');
        };
        const goRem = () => {
        navigate('/');
        };

        const endDate = items.map(item => {
            return item.date
          })

        const thenumber = items.map(item =>{
            return item.thenumber
        })
        
    return (
        
        <>
            <Main>
            <GlobalStyle />
                   
                        <Routes>
                            <Route path='/' element={   
                                <>
                                    <CalendarName>하루의 같이가 모여 만든 가치</CalendarName>
                                    
                                    <Calendar onChange={onChange} value={value} 
                                        calendarType="US" // 요일을 일요일부터 시작하도록 설정
                                        formatDay={(locale, date) => moment(date).format("D")}
                                        onClickDay={(day) => console.log(day) }
                                        tileClassName={({ date, view }) => {
                                            if (endDate.find((x) => x === moment(date).format("DD-MM-YYYY")))
                                             {
                                              return "highlight";
                                            }
                                        }}
                                     />
                                    
                                    <Pic>
                                        <PicContentsTop>이랑 함께</PicContentsTop>
                                        <PicContentsLow>째 작성중</PicContentsLow>
                                        <DiaryClick onClick={goWrite}>   일기 보러가기  </DiaryClick>
                                    </Pic>
                                </>} 
                             />
                            <Route path="/write" element={
                            <DiaryPost>하이
                                <AiOutlineCalendar size="40" color="black" onClick={goRem}>Back</AiOutlineCalendar>
                            </DiaryPost>
                            }/>
                        </Routes>
                    
            </Main>
        </>
    );
};

export default Rem;