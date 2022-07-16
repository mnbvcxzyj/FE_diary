import React, { useState } from "react";
import { GlobalStyle } from "./style";
import Header from "./Header";
import CommentInput from "./CommentInput";
import { CommentBtn } from "./CommentInput";
import commentButton from "./img/CommentButton.png";
import Comment from "./Comment";
import Main from "./Main";
import DiaryAdd from "./DiaryAdd";
import data from "./data.json";

import DiaryPage from "./DiaryPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  // diaryPageData의 type은 객체형식
  // const diaryPageData = data..diary;
  const [choosePage, setChoosePage] = useState();
  let diaryPageData;
  if (choosePage) {
    diaryPageData = data[choosePage - 1].diary;
  }
  console.log(diaryPageData);
  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <Main choosePage={choosePage} setChoosePage={setChoosePage} /> */}
      <Routes>
        <Route
          path={"/"}
          element={
            <Main choosePage={choosePage} setChoosePage={setChoosePage} />
          }
        ></Route>
        <Route
          path={"/diary"}
          element={<DiaryPage diaryPageData={diaryPageData} />}
        ></Route>
        <Route path={"/diaryadd"} element={<DiaryAdd />}></Route>
      </Routes>
    </>
  );
};

export default App;
