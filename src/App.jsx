import React, {useState} from 'react';
import { GlobalStyle } from "./style";
import Header from './Header';
import CommentInput from './CommentInput';
import { CommentBtn } from './CommentInput';
import commentButton from './img/CommentButton.png';
import Comment from './Comment';

const App = () => {
  const [commentOn, setCommentOn] = useState(false);

  
  return (
    <>
    {/* <CommentInput
        show={commentOn} 
        onHide={()=>setCommentOn(false)}
      />
    <GlobalStyle/>
    <Header/>     
    <div>
      <CommentBtn onClick={()=>setCommentOn(true)}>
        <img src={commentButton}/>
      </CommentBtn>
    </div> */}
    <Header/>
    {/*<Comment/>*/}
    </>
  );
};

export default App;  