import React from "react";
import "./MainModal.css";

const MainModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <div className="changeText">일기장 표지 변경</div>
          <header>{header}</header>
          <main>{props.children}</main>
          <footer>
            <img className="albumImg" src="img/album.png" />
            <div className="imgText">이미지 불러오기</div>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default MainModal;
