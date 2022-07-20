import React from "react";
import styled from "styled-components";
import { useState } from "react";
import SignUpModal from "./pages/Login/SignUpModal";
import SignInModal from "./pages/Login/SignInModal";
import { useNavigate, NavLink } from "react-router-dom";

const HeaderDiv = styled.div`
  position: absolute;
  width: 1280px;
  height: 82px;
  left: 0px;
  top: 0px;
  font-family: "BMDOHYEON";
  background-color: white;
`;

const LogoImg = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 24px;
  top: 1px;
  cursor: pointer;
`;

const TitleLogoDiv = styled.div`
  position: absolute;
  width: 77px;
  height: 60px;
  left: 117.5px;
  top: 11px;
`;

const TitleBig = styled.span`
  font-size: 24px;
  line-height: 29.52px;
  font-weight: 400px;
  color: #84cc16;
`;

const TitleSmall = styled.span`
  font-size: 16px;
  line-height: 16px;
  font-weight: 19.68px;
  color: #baa373;
`;

const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 200px;
  gap: 200px;

  position: absolute;
  width: 716.48px;
  height: 82px;
  left: 281.76px;
  top: 0px;
`;

const MemoryDiv = styled.div`
  position: absolute;
  width: 46.48px;
  height: 62px;
  left: 470px;
  top: 10px;
  font-weight: 400;
  font-size: 24px;
  line-height: 29.52px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MemberDiv = styled.div`
  position: absolute;
  left: 1110.92px;
  right: 21px;
  top: 17px;
  bottom: 41px;
  width: 148.08px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #9b8962;
`;

const SignButton = styled.span``;

const LoginDiv = styled.span`
  cursor: pointer;
`;
const SignUpDiv = styled.span`
  cursor: pointer;
`;

const LogOutDiv = styled.span`
  cursor: pointer;
`;

function Header() {
  const [SignUpModalOn, setSignUpModalOn] = useState(false);
  const [SignInModalOn, setSignInModalOn] = useState(false);

  const navigate = useNavigate();

  const [logOut, setLogout] = useState(false);
  const [login, setLogin] = useState(false);

  const activeStyle = {
    width: "70px",
    height: "62px",
    left: "200px",
    top: "10px",
    fontWeight: "400",
    fontSize: "24px",
    lineHeight: "29.52px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    color: "#84CC16",
    textDecoration: "none",
  };

  const nonActiveStyle = {
    width: "70px",
    height: "62px",
    left: "200px",
    top: "10px",
    fontWeight: "400",
    fontSize: "24px",
    lineHeight: "29.52px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    color: "#9B8962",
    textDecoration: "none",
  };
  return (
    <>
      {/* 회원가입 */}
      <SignUpModal
        show={SignUpModalOn}
        onHide={() => setSignUpModalOn(false)}
        login={login}
        setLogin={setLogin}
      />
      {/* 로그인 */}
      <SignInModal
        show={SignInModalOn}
        onHide={() => setSignInModalOn(false)}
        login={login}
        setLogin={setLogin}
      />
      <HeaderDiv>
        <LogoImg src="img/logo.png" onClick={() => navigate("/")} />
        <TitleLogoDiv>
          <TitleBig>같이</TitleBig>
          <TitleSmall>의</TitleSmall>
          <TitleBig> 가치</TitleBig>
        </TitleLogoDiv>
        <MenuDiv>
          <NavLink
            to={"/diary"}
            style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
          >
            일기장
          </NavLink>
          <NavLink
            to={"/diaryremember"}
            style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
          >
            <MemoryDiv>추억</MemoryDiv>
          </NavLink>
        </MenuDiv>
        <MemberDiv>
          {login ? (
            <LogOutDiv
              onClick={() => {
                setLogin(false);
              }}
            >
              로그아웃
            </LogOutDiv>
          ) : (
            <SignButton>
              <LoginDiv
                onClick={() => {
                  setSignInModalOn(true);
                  setLogin = { setLogin };
                }}
              >
                로그인
              </LoginDiv>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <SignUpDiv
                onClick={() => {
                  setSignUpModalOn(true);
                  setLogin = { setLogin };
                }}
              >
                회원가입
              </SignUpDiv>
            </SignButton>
          )}
        </MemberDiv>
      </HeaderDiv>
    </>
  );
}

export default Header;
