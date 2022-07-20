import React from "react";
import "../../modal.css";
//css적용 되는지 확인
import Add from "./Add";

const Modal = (props) => {
  const { open, choosePage, setChoosePage } = props;

  function closeModal() {
    props.closeModal();
    document.style.overflow = "unset";
  }
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <section
      className={open ? "openModal modal" : "modal"}
      onClick={closeModal}
      style={{ position: "fixed", overflow: "auto", width: "100%" }}
    >
      {open ? (
        <div onClick={(e) => e.stopPropagation()}>
          <Add choosePage={choosePage} setChoosePage={setChoosePage} />{" "}
        </div>
      ) : null}
    </section>
  );
};

export default Modal;
