import React, { useState } from "react";
import "./MainModal.css";
import data from "./data.json";
const MainModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open } = props;
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "URL(${data[0].img})",
  });
  function closeModal() {
    props.closeModal();
  }
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"} onClick={closeModal}>
      {open ? (
        <section>
          <div className="modalBody" onClick={(e) => e.stopPropagation()}>
            <div className="changeText">일기장 표지 변경</div>
            <div
              className="diaryImg"
              style={{ backgroundImage: `URL(${data[0].img})` }}
            ></div>
            <footer>
              <label htmlFor="fileInputImg" className="fileInputImg">
                <img src="img/album.png" />
              </label>
              <input
                type="file"
                id="fileInputImg"
                style={{ width: "0px", height: "0px" }}
              />
              <div className="imgText">이미지 불러오기</div>
            </footer>
            {props.children}
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default MainModal;
