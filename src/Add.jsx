import React from 'react';
import styled from 'styled-components';
import logoIMG from './img/logo1.png';
import { Route, useNavigate } from 'react-router-dom';
import { NavLink, Link, Outlet } from "react-router-dom";
import { useState } from 'react';
import MakeInviteCode from './MakeInviteCode';
import AddRoute from './AddRoute';

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
const SelectInvite1 = styled.div`
    position: absolute;
    width: 240px;
    height: 40px;
    left: 91px;
    top: 243px;
    background-color: #F7F7F7;
    color: #77694C;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    :hover {
        box-shadow: 0 4px 2px -2px #77694C;
    }
`;
//박스 쉐도우 px픽그마 확인

const SelectInvite2 = styled.div`
    position: absolute;
    width: 240px;
    height: 40px;
    left: 91px;
    top: 309.5px;
    background-color: #F7F7F7;
    color: #77694C;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    :hover {
        box-shadow: 0 4px 2px -2px #77694C;
    }
`;

const Add = (props) => {

    const navigate = useNavigate(props);
    //창 이동할때 navigate사용
    const state = useState();

    const goInvite = () => {
        navigate("/MakeInviteCode");
    }
    const invite = () => {
        navigate('/WriteInviteCode');
    };

    return (
        <CodePopup>
            <LogoIMG><img src = {logoIMG}/></LogoIMG>
            <Ment1>초대코드를 입력하여 연결해주세요</Ment1>

            <Link to='/MakeInviteCode'>
                <SelectInvite1>초대 하실건가요?</SelectInvite1>
            </Link>

            <Link to='/WriteInviteCode'>
                <SelectInvite2>초대 받으셨나요?</SelectInvite2>
            </Link>

        </CodePopup>
    );
};

export default Add;