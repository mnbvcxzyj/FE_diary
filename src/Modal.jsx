import React, { useState } from 'react';
import "./modal.css";
//css적용 되는지 확인
import Add from "./Add";
import styled from 'styled-components';


const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <Add></Add>       
        </section>
      ) : null}
    </div>
  );
};

export default Modal;