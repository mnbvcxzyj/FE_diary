import React, { useState } from "react";
import styled from "styled-components";
import DiaryHeadEdit from "./DiaryHeadEdit";
import DiaryTemplate from "./DiaryTemplate";

const DiaryEd = styled.div`
  margin-top: 40px;
  display: flex;
`;

const DiaryEditBox = styled.div`
  background-color: rgb(200 228 153 / 40%);
  border-radius: 15px;
  width: 600px;
  height: 500px;
  display: flex;
  margin-left: 75px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const DiarySection = styled.div`
  padding: 20px;
  width: 520px;
`;

const DiaryInputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const DiaryInputs = styled.input`
  all: unset;
  width: 100%;
  outline: none;
  height: 36px;
  border-bottom: 1px solid #65a30d;
`;

const DiaryShortInputs = styled.input`
  all: unset;
  width: 60%;
  outline: none;
  height: 36px;
  border-bottom: 1px solid #65a30d;
`;

const ImgDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
`;

const DiaryCenter = styled.div`
  display: flex;
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

const FileInput = styled.input`
  width: 0;
  height: 0;
  padding: 0;
`;

const CloseBtn = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url(${require("./img/close.png")});
  background-size: contain;
  &:hover {
    background-image: url(${require("./img/hoverClose.png")});
  }
`;

function DiaryEdit() {
  const [changeImg, setChangeImg] = useState();
  const [clickImg, setClickImg] = useState(false);
  const [imgFile, setImgFile] = useState("");
  const [changeFc, setChangeFc] = useState(false);
  const style = {
    backgroundImage: changeImg
      ? `url(${require(`./img/template/${changeImg}.png`)})`
      : "",
  };
  const onClick = () => {
    setImgFile("");
    setClickImg(false);
  };

  const onChange = (event) => {
    setImgFile(URL.createObjectURL(event.target.files[0]));
    setClickImg(true);
  };
  // 글씨
  const [fcColor, setFcColor] = useState("#000000");
  const onClickContent = () => {
    setChangeFc(true);
  };

  return (
    <DiaryEd>
      <DiaryEditBox style={style}>
        <DiarySection>
          <DiaryHeadEdit />
          <DiaryInputsDiv>
            <DiaryInputs
              maxLength="33"
              placeholder="내용을 입력해주세요"
              onClick={onClickContent}
              style={{ color: fcColor }}
            />
            <DiaryInputs maxLength="33" style={{ color: fcColor }} />
            <DiaryInputs maxLength="33" style={{ color: fcColor }} />
            <DiaryInputs maxLength="33" style={{ color: fcColor }} />
            <DiaryShortInputs maxLength="20" style={{ color: fcColor }} />
            <DiaryShortInputs maxLength="20" style={{ color: fcColor }} />
            <DiaryShortInputs maxLength="20" style={{ color: fcColor }} />
            <DiaryShortInputs maxLength="20" style={{ color: fcColor }} />
            <DiaryShortInputs maxLength="20" style={{ color: fcColor }} />
            <ImgDiv>
              <label htmlFor="imgFile">
                {imgFile ? (
                  <img
                    src={imgFile}
                    width="152px"
                    height="152px"
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <img src={require(`./img/noimage.png`)} width="152px" />
                )}
              </label>
              <FileInput
                id="imgFile"
                type="file"
                accept="image/*"
                onChange={onChange}
              />
              {clickImg ? <CloseBtn onClick={onClick}></CloseBtn> : ""}
            </ImgDiv>
          </DiaryInputsDiv>
        </DiarySection>
        <DiaryCenter>
          <DiaryCircleBox>
            <DiaryCircle />
            <DiaryCircle />
            <DiaryCircle />
            <DiaryCircle />
            <DiaryCircle />
            <DiaryCircle />
            <DiaryCircle />
          </DiaryCircleBox>
        </DiaryCenter>
      </DiaryEditBox>
      <DiaryTemplate
        setChangeImg={setChangeImg}
        changeFc={changeFc}
        fcColor={fcColor}
        setFcColor={setFcColor}
      />
    </DiaryEd>
  );
}

export default DiaryEdit;
