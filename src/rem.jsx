import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarContents = styled.div`
  position: absolute;
  width: 444px;
  height 480px;
  margin-top: 156px;
  margin-left: 184px;
  border: 2px solid #9B8962;
  border-radius: 5px;
`;


const CalendarName = styled.div`
  margin-right; 150px;
`;

const Rem = () => {
    const [value, onChange] = useState(new Date());

    return (
        <>
            <CalendarName>하루의 같이가 모여 만든 가치</CalendarName>
            <CalendarContents>
                <Calendar
                  onChange={onChange}
                  value={value}
                />
            </CalendarContents>
        </>
    );
};

export default Rem;