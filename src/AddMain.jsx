import React, { useState } from "react";
import Modal from "./Modal";
import Add from "./Add";

function Addmain(props) {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  const { open } = props;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>+버튼 자리(수정 필요)</button>
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
        <Add></Add>
      </Modal>
    </>
  );
}

export default Addmain;
