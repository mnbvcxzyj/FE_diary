import {useRef, useState} from "react";
import { 
    CommentButton,
    CommentDiv,
    EnterImg,
    InputNames,
    InputText,
    CommnetSubmit,
    CommentWrote,
} from './CommentInput';
import CommentUpLoad from './img/commentUpLoad.png';
import Enter from './img/Enter.png'
import commentButton from './img/CommentButton.png';

const CommentEditor = ({onCreate}) => {
    const contentInput = useRef();
    const [state, setState] = useState({
        content: "",
    }); 

    const handleChangeState = (e) => {
        setState({
            ...state,
            "content": e.target.value,
    });
    };

    const handleSubmit = () => {
        onCreate(state.content);
    };

    return(
        <div className = "CommentEditor">
        <CommentButton>
            <img src={commentButton}
            />
        </CommentButton>
        <CommentDiv>
        <CommentWrote>
        {/* <>
        <div className="CommentItem">
            <div className="info">
                <CommentWriter1>사용자1</CommentWriter1>
            </div>
            <CommentTextWriter> 안녕!!</CommentTextWriter>
        <div></div>
        </div>
        <div className="CommentItem">
            <div className="info">
                <CommentWriter>사용자2</CommentWriter>
            </div>
            <CommentTextWriter>침대 최고야</CommentTextWriter>
        <div></div>
        </div>
        </> */}
        </CommentWrote>
        <div>
            <EnterImg>
                <div>
                <img src={Enter}
                    width='24px'
                    height='24px'
                    />
                </div>
            </EnterImg>
            <InputNames
            >사용자2</InputNames>
            <InputText
                ref={contentInput}
                name="content"
                type="text" 
                onChange={handleChangeState}
            />
        </div>
        <div>
            <button onClick={handleSubmit}>
            <CommnetSubmit>
                    <img src={CommentUpLoad}
                    width='19px'
                    height='19px'
                    />
            </CommnetSubmit>
            </button>
        </div>
        </CommentDiv>
    </div>
    );
};
export default CommentEditor;