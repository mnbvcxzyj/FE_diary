import {
  LoginDiv,
  Logo,
  BigSlogun,
  SmallSlogun,
  LoginButton,
  BgDiv,
} from "./LoginStyle";
import logo from "./img/logo.png";
import kakao from "./img/kakaotalk.png";
import google from "./img/google.png";
import naver from "./img/naver.png";
import React from "react";
import "./modal.css";

const Modal = (props) => {
  const { open, close } = props;

  return (
    <>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <BgDiv>
            <LoginDiv>
              <Logo>
                <img src={logo} width="80px" height="80px" />
              </Logo>
              <BigSlogun>소중한 사람과 함께 하루를 공유하는 일</BigSlogun>
              <SmallSlogun>
                간편 로그인하고 <br /> 공유형 일기쓰기를 시작하세요
              </SmallSlogun>
              <LoginButton>
                <img src={kakao} width="24px" height="24px" /> 카카오톡으로
                로그인
              </LoginButton>
              <LoginButton>
                <img src={naver} width="24px" height="24px" /> 네이버로 로그인
              </LoginButton>
              <LoginButton>
                <img src={google} width="24px" height="24px" /> 구글로 로그인
              </LoginButton>
            </LoginDiv>
          </BgDiv>
        ) : null}
      </div>
    </>
  );
};

export default Modal;
