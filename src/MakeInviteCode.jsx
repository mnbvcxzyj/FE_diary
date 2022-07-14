import React from "react";
import Add from './Add';
import Modal from './Modal';
import data from './data.json';
import styled from 'styled-components';
import {getData} from './data.json';
//data 함수도 하나 만들음

const CodePopup = styled.div`
    position: absolute;
    width: 420px;
    height: 420px;
    left: 430px;
    top: 104px;
    background-color: #F6FAF1;
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
    display: flex;
    align-items: center;
    text-align: center;
    color: #9B8962;
`;

const InviteCode = styled.div`
    position: absolute;
    width: 240px;
    height: 40px;
    left: 88.12px;
    top: 250.75px;
    background: #F7F7F7;
    border-radius: 10px;
`;

const AutoButton = styled.div`
    position: absolute;
    width: 100px;
    height: 32px;
    left: 158.12px;
    top: 310px;
    background: #77694C;
    border-radius: 10px;
`;

function MakeInviteCode() {
    <CodePopup>
        <Ment1>내 초대코드 생성하기</Ment1>
        <InviteCode>ddds</InviteCode>
        <AutoButton>자동생성</AutoButton>
    </CodePopup>
};

export default MakeInviteCode;