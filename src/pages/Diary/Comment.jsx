import CommentEditor from "./CommentEditor";
import CommentList from "./CommentList";
import React, { useState, useRef } from "react";
import { CommentDiv, CommentWrote } from "./CommentInput";

const Comment = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (content) => {
    const newItem = {
      content,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([...data, newItem]);
  };

  return (
    <>
      <div>
        <CommentDiv>
          <CommentEditor onCreate={onCreate} />
          <CommentWrote>
            <CommentList commentList={data} />
          </CommentWrote>
        </CommentDiv>
      </div>
    </>
  );
};

export default Comment;
