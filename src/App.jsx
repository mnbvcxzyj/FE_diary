import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style";
<<<<<<< Updated upstream

const App = () => {
=======
import Header from "./Header";

import Main from "./pages/Main/Main";
import DiaryAdd from "./pages/Diary/DiaryAdd";
import data from "./data.json";
import DiaryPage from "./pages/Diary/DiaryPage";
import { Routes, Route } from "react-router-dom";
import Rem from "./pages/View/rem";

const App = () => {
  const [choosePage, setChoosePage] = useState(1);
  let diaryPageData;
  if (choosePage) {
    diaryPageData = data[choosePage - 1].diary;
  }
  const [calBtn, setCalBtn] = useState();
>>>>>>> Stashed changes
  return (
    <BrowserRouter>
      <GlobalStyle />
<<<<<<< Updated upstream
    </BrowserRouter>
=======
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
              choosePage={choosePage}
            />
          }
        ></Route>
        <Route path={"/diaryadd"} element={<DiaryAdd />}></Route>
        <Route
          path={"/diaryremember"}
          element={
            <Rem
              items={data}
              calBtn={calBtn}
              setCalBtn={setCalBtn}
              setChoosePage={setChoosePage}
            />
          }
        ></Route>
      </Routes>
    </>
>>>>>>> Stashed changes
  );
};

export default App;
