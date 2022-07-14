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

const CommentButton = styled.div`
width:99px;
height:40px;
position: fixed;
top: 321px;
left: 40px;
`;

const CommentDiv = styled.div`
width:1209px;
height:316px;
position: fixed;
top: 363px;
left: 40px;
background-color: white;
border-radius: 13px;
`;

const EnterImg = styled.div`
display: block;
float:left;
width:24px;
height:24px;
position: fixed;
top: 532px;
left: 61px;
`;

const CommnetSubmit = styled.div`
display: inline-block;
float:right;
position: fixed;
top: 560px;
left: 1200px;
`;

const InputNames = styled.div`
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

const InputText = styled.input`
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

const CommentInput = ({ onInsert }) => {
    const [value, setValue] = useState({
        name: '',
        content: ''
    });
    
    const onChangeName = useCallback(
        (e) => {
            setValue({
                name: e.target.value,
                content: value.content,
            });
        },
        [value]
    );

    const onChange = useCallback(
        (e) => {
            setValue(e.target.value)
        },
        [value]
    )

    const onSubmit = useCallback(
        e => {
            onInsert(value.name, value.content);
            setValue({
                name: '',
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
            <InputNames 
            value={value.name}
            onChange={onChangeName}
            >사용자2</InputNames>
            {/* <input classNames="inputNames"
                placeholder="이름"
                
                
            />
            사용자2
            </InputNames> */}
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
