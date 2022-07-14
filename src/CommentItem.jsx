const CommentItem = ({author, content, created_date, emotion, id}) => {
    return (
        <div className="DiaryItem">
            <div className="info">
                <span>
                    {author}
                </span>
                <br/>
            </div>
            <div className="content">{content}<br/><hr/></div>
        <div></div>
        </div>
    );
};

export default CommentItem;