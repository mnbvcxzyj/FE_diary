import React, { useState } from "react";
import "./MainModal.css";
import data from "./data.json";
const MainModal = (props) => {
  const { open } = props;
  const [fileImage, setFileImage] = useState();
  const SaveFile = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
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
                accept="image/*"
                id="fileInputImg"
                onChange={(e) => {
                  SaveFile(e);
                }}
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
