import React, { useState } from 'react';
import logo from './img/logo.png';
import kakao from './img/kakaotalk.png';
import google from './img/google.png';
import naver from './img/naver.png';
import './modal.css';
import { Modal, Button } from 'react-bootstrap';

import styled from "styled-components";

export const BgDiv = styled.div`
width: 100%;
height: 2000px;
background-color: rgba(00, 00, 00, 0.5);
`;

export const LoginDiv = styled.div`
position: fixed;
top: 109px;
left: 430px;
border-radius: 10px;
width: 420px;
height : 420px;
background-color: white;
border: 1px solid black;
font-family: "BMDOHYEON";
`;

export const Logo = styled.div`
  position: relative;
  height : 80px;
  width: 80px;
  margin: 16px;
  margin-left: auto;
  margin-right: auto;
`;

export const BigSlogun = styled.div`
  position: relative;
  font-size: 16px;
  text-align: center;
  margin-bottom: 16px;
  color: #84CC16;
  font-family: "BMDOHYEON";
`;

export const SmallSlogun = styled.div`
  position: relative;
  font-size: 12px;
  text-align: center;
  color: #9B8962;
  font-family: "BMDOHYEON";
`;

export const LoginButton = styled.button`
  position: relative;
  display: block;
  margin: 30px;
  text-align: center; 
  width: 280px;
  height : 32px;
  margin-left: auto;
  margin-right: auto;
  background-color: #F7F7F7;
  border: #F7F7F7;
  border-radius: 10px;
  font-size: 10px;
  font-family: "BMDOHYEON";
`;

const Ddiv = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  border-radius: 10px;
`;

const SignInModal = ({ show, onHide, login, setLogin}) => {

  // const [logout, setLogout] = useState(false);

  // function sendData(){
  //   props.setLogin("true");
  // }

    return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <BgDiv onClick={onHide}>
        <LoginDiv onClick={(e)=>e.stopPropagation()}>
          <Logo>
            <img src={logo}
            width='80px'
            height='80px'
            />
          </Logo>
          <BigSlogun>소중한 사람과 함께 하루를 공유하는 일</BigSlogun>
          <SmallSlogun>간편 로그인하고 <br/> 공유형 일기쓰기를 시작하세요</SmallSlogun>
          <LoginButton onClick={()=>{onHide();}}>
            <div onClick={()=>{setLogin(true)}}>
              <img src={kakao}
              width='24px'
              height='24px'
              /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              카카오톡으로 로그인
            </div>
          </LoginButton>
          <LoginButton onClick={()=>{onHide();}}>
            <div onClick={()=>{setLogin(true)}}>
            <img src={naver}
            width='24px'
            height='24px'
            /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            네이버로 로그인
            </div>
          </LoginButton>
          <LoginButton onClick={()=>{onHide();}}>
            <div onClick={()=>{setLogin(true)}}>
            <img src={google}
            width='24px'
            height='24px'
            /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            구글로 로그인
            </div>
          </LoginButton>
         
        </LoginDiv>
      </BgDiv>
    </Modal>
    );
};

export default SignInModal;