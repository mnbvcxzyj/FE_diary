import React, { useState } from "react";
import { GlobalStyle } from "./style";
import Header from "./Header";

import Main from "./pages/Main/Main";
import DiaryAdd from "./pages/Diary/DiaryAdd";
import data from "./data.json";
import Comment from "./pages/Diary/Comment";
import DiaryPage from "./pages/Diary/DiaryPage";
import { Routes, Route } from "react-router-dom";
import Rem from "./pages/View/rem";

const App = () => {
  // const diaryPageData = data..diary;
  const [choosePage, setChoosePage] = useState(1);
  let diaryPageData;
  if (choosePage) {
    diaryPageData = data[choosePage - 1].diary;
  }
  const [calBtn, setCalBtn] = useState();
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
          element={
            <DiaryPage
              diaryPageData={diaryPageData}
              calBtn={calBtn}
              setCalBtn={setCalBtn}
            />
          }
        ></Route>
        <Route path={"/diaryadd"} element={<DiaryAdd />}></Route>
        <Route
          path={"/diaryremember"}
          element={<Rem items={data} calBtn={calBtn} setCalBtn={setCalBtn} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
