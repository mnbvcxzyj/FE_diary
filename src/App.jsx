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
  // const diaryPageData = data..diary;
  const [choosePage, setChoosePage] = useState(1);
  let diaryPageData;
  if (choosePage) {
    diaryPageData = data[choosePage - 1].diary;
  }

  return (
    <>
      <GlobalStyle />
      <Header />

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
