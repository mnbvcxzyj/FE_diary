import CommentItem from "./CommentItem";

const CommentList = ({commentList}) => {
    return (
        <div className='CommentList'>
            <div className="CommentBlock">
                {commentList.map((it) => (
                    <CommentItem key={it.id} {...it}/>
                ))}
            </div>
            <div></div>
        </div>
    );
};

CommentList.defaultProps = {
    commentList: [],
};

export default CommentList;