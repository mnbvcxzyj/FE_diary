import React, { useState } from "react";
import styled from "styled-components";
import data from "../../data.json";
import { useNavigate } from "react-router-dom";
import MainDiaryBox from "./MainDiaryBox";
import MainMyDiaryBox from "./MainMyDiaryBox";
import Modal from "../Add/Modal";
import Add from "../Add/Add";
const SlogunTitleDiv = styled.div`
  position: absolute;
  width: 240.41px;
  height: 50px;
  left: 67px;
  top: 132px;

  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;

  color: #9b8962;
`;

const SlogunBigDiv = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;

  color: #65a30d;
`;

const SlogunSmallDiv = styled.div`
  position: absolute;
  width: 500.33px;
  height: 50px;
  left: 67px;
  top: 182px;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;

  color: #9b8962;
`;

const DiaryDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 64px;

  position: absolute;
  width: 1152px;
  height: 340px;
  left: 64px;
  top: 270px;
  flex-wrap: wrap;
`;

const DiaryAddBtn = styled.button`
  position: relative;
  width: 60px;
  height: 60px;
  left: 1140px;
  top: 627px;
  /* bottom: 450px; */
  cursor: pointer;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
`;

function Main(props) {
  const { choosePage, setChoosePage } = props;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <SlogunTitleDiv>
        그 날 하루의
        <SlogunBigDiv>&nbsp;가치</SlogunBigDiv>
      </SlogunTitleDiv>
      <SlogunSmallDiv>
        기억하고 싶은 하루를 기억하고 싶은 상대와 기록하세요
      </SlogunSmallDiv>
      <DiaryDiv>
        <MainMyDiaryBox />
        {data.map((list) => (
          <MainDiaryBox list={list} />
        ))}
      </DiaryDiv>
      <DiaryAddBtn onClick={openModal}>
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 35V19M19 19V3M19 19H35M19 19H3"
            stroke="#545454"
            strokeWidth="4.16667"
            strokeLinecap="round"
          />
        </svg>
      </DiaryAddBtn>
      <Modal
        open={showModal}
        closeModal={() => setShowModal(!showModal)}
        header="Modal heading"
        choosePage={choosePage}
        setChoosePage={setChoosePage}
      />
    </>
  );
}

export default Main;
