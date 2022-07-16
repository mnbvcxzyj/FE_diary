import React, { useCallback, useState } from 'react';
import CommentUpLoad from './img/commentUpLoad.png';
import Enter from './img/Enter.png'
import commentButton from './img/CommentButton.png';
import styled from "styled-components";

export const CommentBtn = styled.div`
position: fixed;
top: 640px;
left: 1081px;
cursor: pointer;
`;

export const CommentButton = styled.div`
width:99px;
height:40px;
position: fixed;
top: 321px;
left: 40px;
`;

export const CommentDiv = styled.div`
width:1209px;
height:316px;
position: fixed;
top: 363px;
left: 40px;
background-color: white;
border-radius: 13px;
`;

export const CommentWrote = styled.div`
width:1209px;
height:150px;
overflow: auto;
`;

export const EnterImg = styled.div`
display: block;
float:left;
width:24px;
height:24px;
position: fixed;
top: 532px;
left: 61px;
`;

export const CommnetSubmit = styled.div`
display: inline-block;
float:right;
position: fixed;
top: 560px;
left: 1200px;
cursor: pointer;
`;

export const InputNames = styled.div`
border: 1px solid #9B8962;
color: white;
background-color: #9B8962;
width:73px;
height:24px;
border-radius: 9px;
position: fixed;
top: 521px;
left: 95px;
text-align: center;
`;

export const CommentWriter = styled.div`
border: 1px solid #9B8962;
color: white;
background-color: #9B8962;
width:73px;
height:24px;
border-radius: 9px;
text-align: center;
position: relative;
margin-left: 24px;
margin-top: 20px;
`;

export const CommentWriter1 = styled.div`
border: 1px solid #9B8962;
color: #9B8962;
background-color: white;
width:73px;
height:24px;
border-radius: 9px;
text-align: center;
position: relative;
margin-left: 24px;
margin-top: 43px;
`;

export const InputText = styled.textarea`
all: unset;
border: 2px solid #9B8962;
width:1137px;
height:94px;
border-radius: 12px;
background-color: white;
position: fixed;
top: 545px;
left: 96px;
`;

export const CommentTextWriter = styled.div`
border-radius: 10px;
border: 1px solid #9B8962;
position: relative;
margin-left: 24px;
width: 1140px;
padding-left:3px;
padding-right:3px;
min-height:24px;
`;


const CommentInput = ({ onInsert }) => {
    const [value, setValue] = useState({
        content: ''
    });

    const onSubmit = useCallback(
        e => {
            onInsert(value.content);
            setValue({
                content: ''
            });

            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
      <>
      <CommentButton>
        <img src={commentButton}
        />
      </CommentButton>
      <CommentDiv>
        <form className="CommentInsert" onSubmit={onSubmit}>
            <EnterImg>
                <div>
                <img src={Enter}
                    width='24px'
                    height='24px'
                />
                </div>
            </EnterImg>
            <InputText/>
                <CommnetSubmit type="submit">
                    <img src={CommentUpLoad}
                    width='19px'
                    height='19px'
                    />
                </CommnetSubmit>
        </form>
      </CommentDiv>
      </>
    )
}

export default CommentInput;
