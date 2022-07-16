import React, { useState } from "react";
import styled from "styled-components";
import DiaryHeadAdd from "./DiaryHeadAdd";
import DiaryTemplate from "./DiaryTemplate";

const DiaryPlus = styled.div`
  margin-top: 130px;
  display: flex;
  width: 1280px;
`;

const DiaryAddBox = styled.section`
  background-color: rgb(200 228 153 / 40%);
  border-radius: 15px;
  width: 600px;
  height: 500px;
  display: flex;
  margin-left: 75px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const DiaryAddDetail = styled.div`
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

const AddBtn = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url(${require("./img/add.png")});
  background-size: contain;
  &:hover {
    background-image: url(${require("./img/hoverAdd.png")});
  }
`;

const DeleteBtn = styled.div`
  background-image: url(${require("./img/closeBtn.png")});
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-size: cover;
`;

function DiaryAdd({ userData }) {
  const [changeImg, setChangeImg] = useState();
  const [clickImg, setClickImg] = useState(false);
  const [imgFile, setImgFile] = useState(require("./img/noimage.png"));
  const [changeFc, setChangeFc] = useState(false);
  const style = {
    backgroundImage: changeImg
      ? `url(${require(`./img/template/${changeImg}.png`)})`
      : "",
  };
  const onClick = () => {
    setImgFile(require("./img/noimage.png"));
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
    <DiaryPlus>
      <DiaryAddBox style={style}>
        <DiaryAddDetail>
          <DiaryHeadAdd userData={userData} />
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
              <img
                src={imgFile}
                width="152px"
                height="152px"
                style={{ objectFit: "contain" }}
              />

              {clickImg ? (
                <DeleteBtn onClick={onClick}></DeleteBtn>
              ) : (
                <>
                  <label htmlFor="imgFile">
                    <AddBtn />
                  </label>
                  <FileInput
                    id="imgFile"
                    type="file"
                    accept="image/*"
                    onChange={onChange}
                  />
                </>
              )}
            </ImgDiv>
          </DiaryInputsDiv>
        </DiaryAddDetail>
        <DiaryCircleBox>
          {[0, 1, 2, 3, 4, 5, 6].map((num) => (
            <DiaryCircle key={num} />
          ))}
        </DiaryCircleBox>
      </DiaryAddBox>
      <DiaryTemplate
        setChangeImg={setChangeImg}
        changeFc={changeFc}
        fcColor={fcColor}
        setFcColor={setFcColor}
      />
    </DiaryPlus>
  );
}

export default DiaryAdd;
