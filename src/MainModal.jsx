import React, { useState, useRef } from "react";
import "./MainModal.css";

const MainModal = (props) => {
  const { open, diaryImage, Image, setImage } = props;

  const fileInput = useRef(null);

  const onChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  function closeModal() {
    props.closeModal();
    document.style.overflow = "unset";
  }
  return (
    <div
      className={open ? "openModal modal" : "modal"}
      onClick={closeModal}
      style={{ position: "fixed", overflow: "auto", width: "100%" }}
    >
      {open ? (
        <section onClick={(e) => e.stopPropagation()}>
          <div className="modalBody">
            <div className="changeText">일기장 표지 변경</div>

            <div
              className="diaryImg"
              style={{
                backgroundImage: Image ? `URL(${Image})` : `URL(${diaryImage})`,
              }}
            />
            <footer>
              <label htmlFor="fileInputImg" className="fileInputImg">
                <img src="img/album.png" />
              </label>
              <input
                type="file"
                accept="image/*"
                id="fileInputImg"
                onChange={(e) => {
                  onChange(e);
                }}
                ref={fileInput}
                style={{ width: "0px", height: "0px" }}
              />
              {Image ? (
                <button className="changeBtn" onClick={closeModal}>
                  <div className="changeBtnText">변경 완료</div>
                </button>
              ) : (
                <div className="imgText">이미지 불러오기</div>
              )}
            </footer>
            {props.children}
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default MainModal;
