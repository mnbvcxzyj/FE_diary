import {useRef, useState} from "react";

const CommentEditor = ({onCreate}) => {

    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author:"", 
        content:"",
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if(state.author.length < 1){
            authorInput.current.focus();
            return;
        }

        if(state.content.length < 1){
            contentInput.current.focus();
            alert("작성된 내용이 없습니다. ")
            return;
        }

        onCreate(state.author, state.content, state.emotion);
        alert("댓글이 작성되었습니다.")
    }

    return(
        <div className = "CommentEditor">
        <div>
            <input
                ref={authorInput}
                name="author" 
                type="text"
                value={state.author} 
                onChange={handleChangeState}
            />
        </div>
        <div>
            <textarea
                ref={contentInput}
                name="content"
                type="text"
                value={state.content} 
                onChange={handleChangeState}
            />
        </div>
        <div>
            <button onClick={handleSubmit}>추가하기</button>
        </div>
    </div>
    );
};
export default CommentEditor;