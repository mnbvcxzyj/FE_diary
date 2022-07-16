import React, { useState } from "react";
import styled from "styled-components";
import DiaryImg from "./DiaryImg";
import DiaryNonImg from "./DiaryNonImg";
import { useNavigate } from "react-router-dom";

const DiaryRecord = styled.div`
  width: 1200px;
  margin-top: 130px;
  margin-left: 40px;
  position: relative;
`;

const DiaryBox = styled.div`
  width: 1200px;
  height: 500px;
  background-color: #c8e499;
  border-radius: 15px;
  display: flex;
`;

const OppositePage = styled.section`
  display: flex;
  padding-right: 20px;
  background-size: cover;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-right: 1px solid #4d7c0f;
`;

const MyPage = styled.section`
  display: flex;
  padding-left: 20px;
  background-size: cover;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const DiaryCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f4ffe2;
`;

const DiaryCircleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const DiaryRightBtn = styled.div`
  position: absolute;
  top: 42.5%;
  right: -35px;
  cursor: pointer;
`;

const DiaryLeftBtn = styled.div`
  position: absolute;
  top: 42.5%;
  left: -35px;
  cursor: pointer;
`;

const DiaryFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const DiaryComment = styled.div`
  border-radius: 13px;
  color: #f4ffe2;
  margin-right: 12px;
  cursor: pointer;
`;

const DiaryEdit = styled.div`
  cursor: pointer;
  height: 42px;
`;

const DiaryPage = ({ diaryPageData }) => {
  const oppositeData = diaryPageData.opposite;
  const userData = diaryPageData.user;
  const oppositeDataLast = diaryPageData.opposite.length;
  const [currentPage, setCurrentPage] = useState(0);
  const myData = userData[currentPage];
  const opData = oppositeData[currentPage];
  const onClickLeft = () => {
    setCurrentPage((pg) => (currentPage > 0 ? pg - 1 : 0));
  };
  const onClickRight = () => {
    setCurrentPage((pg) =>
      currentPage < oppositeDataLast - 1 ? pg + 1 : oppositeDataLast - 1
    );
  };
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/diaryadd");
  };
  return (
    <DiaryRecord>
      <DiaryBox>
        {/* 상대방 일기 */}
        <OppositePage
          style={{
            backgroundImage: opData.template
              ? `url(${require(`./img/template/template${String(
                  opData.template
                ).padStart(2, 0)}.png`)})`
              : "",
          }}
        >
          {opData.img ? (
            <DiaryImg writtenData={opData} />
          ) : (
            <DiaryNonImg writtenData={opData} />
          )}
          <DiaryCircleBox>
            {[0, 1, 2, 3, 4, 5, 6].map((num) => (
              <DiaryCircle key={num} />
            ))}
          </DiaryCircleBox>
        </OppositePage>

        {/* <DiaryBar> */}
        {/* 내 일기 */}
        <MyPage
          style={{
            backgroundImage: myData.template
              ? `url(${require(`./img/template/template${String(
                  myData.template
                ).padStart(2, 0)}.png`)})`
              : "",
          }}
        >
          <DiaryCircleBox>
            {[0, 1, 2, 3, 4, 5, 6].map((num) => (
              <DiaryCircle key={num} />
            ))}
          </DiaryCircleBox>
          {myData.img ? (
            <DiaryImg writtenData={myData} />
          ) : (
            <DiaryNonImg writtenData={myData} />
          )}
        </MyPage>
      </DiaryBox>
      <DiaryLeftBtn onClick={onClickLeft}>
        <svg
          width="25"
          height="40"
          viewBox="0 0 25 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.74423 23.6029C-0.299937 21.6359 -0.299939 18.3641 1.74423 16.3971L16.5331 2.1665C19.7096 -0.89011 25 1.36108 25 5.76938L25 34.2306C25 38.6389 19.7096 40.8901 16.5331 37.8335L1.74423 23.6029Z"
            fill={currentPage ? "#BAA373" : "#E0D6BF"}
          />
        </svg>
      </DiaryLeftBtn>
      <DiaryRightBtn onClick={onClickRight}>
        <svg
          width="25"
          height="40"
          viewBox="0 0 25 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.2558 16.3971C25.2999 18.3641 25.2999 21.6359 23.2558 23.6029L8.46688 37.8335C5.29036 40.8901 0 38.6389 0 34.2306L0 5.76937C0 1.36107 5.29036 -0.890114 8.46688 2.16649L23.2558 16.3971Z"
            fill={currentPage === oppositeDataLast - 1 ? "#E0D6BF" : "#BAA373"}
          />
        </svg>
      </DiaryRightBtn>
      <DiaryFooter>
        <DiaryComment>
          <svg
            width="46"
            height="41"
            viewBox="0 0 46 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.0517578 0.269043V27.6164H7.96666V35.5286L20.3015 27.6164H38.4542V0.269043H0.0517578ZM40.2609 6.28052V9.72178H41.6105V29.2241H34.9726V34.4371L27.2727 29.4983L26.8479 29.2241H21.0435L15.68 32.6654H25.8344L35.763 39.0317L38.4138 40.7309V32.6654H45.0518V6.28052H40.2609Z"
              fill="#77694C"
            />
          </svg>
        </DiaryComment>
        <DiaryEdit onClick={onClick}>
          <svg
            width="48"
            height="45"
            viewBox="0 0 48 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.10645 31.6595V39.8297H13.7573L35.3843 19.4042L41.8724 13.2765L33.2216 5.10632L26.7335 11.234L5.10645 31.6595Z"
              stroke="#9B8962"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M35.3842 19.4041L26.7334 11.2339"
              stroke="#9B8962"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="1.5"
              y="1.5"
              width="45"
              height="41.9362"
              rx="11.5"
              stroke="#BAA373"
              strokeWidth="3"
            />
          </svg>
        </DiaryEdit>
      </DiaryFooter>
    </DiaryRecord>
  );
};

export default DiaryPage;
