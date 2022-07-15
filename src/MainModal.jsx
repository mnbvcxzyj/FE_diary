import React, { useState, useRef } from "react";
import "./MainModal.css";
import data from "./data.json";

const MainModal = (props) => {
  const { open, diaryImage } = props;
  const [Image, setImage] = useState();

  const fileInput = useRef(null);

  const onChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  function closeModal() {
    props.closeModal();
  }
  return (
    <div className={open ? "openModal modal" : "modal"} onClick={closeModal}>
      {open ? (
        <section>
          <div className="modalBody" onClick={(e) => e.stopPropagation()}>
            <div className="changeText">일기장 표지 변경</div>

            <div
              className="diaryImg"
              style={{ backgroundImage: `URL(${diaryImage})` }}
            ></div>
            <footer>
              <label htmlFor="fileInputImg" className="fileInputImg">
                <img src="img/album.png" />
              </label>

              <input
                type="file"
                accept="image/*"
                id="fileInputImg"
                onChange={onChange}
                ref={fileInput}
                style={{ width: "0px", height: "0px" }}
              />
              {Image ? (
                <button
                  className="changeBtn"
                  onClick={() => fileInput.current.click()}
                >
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
