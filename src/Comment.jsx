import CommentEditor from './CommnetEditor';
import CommentList from './CommentList';
import React, {useState, useRef} from 'react';
import { GlobalStyle } from "./style";

const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0)

  const onCreate = (author, content) => {
    const newItem = {
      author, 
      content,
      id : dataId.current,
    };
    dataId.current += 1;
    setData([ ...data, newItem]);
  };

  
  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <CommentEditor onCreate={onCreate} />
      <CommentList commentList={data}></CommentList>
    </div>
    </>
  );
};    

export default App; 