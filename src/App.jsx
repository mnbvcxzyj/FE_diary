import React, { useState } from 'react';
import Add from "./Add.jsx";
import Modal from "./Modal";
import { GlobalStyle } from "./style";
import styled from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Router>
    <React.Fragment>
      <GlobalStyle/>
      <button onClick={openModal}>+버튼 자리(수정 필요)</button>
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
      </Modal>
    </React.Fragment>
    </Router>
  );
}

export default App; 
