import CommentItem from "./CommentItem";
import {
  CommentWriter,
  CommentWriter1,
  CommentTextWriter,
} from "./CommentInput";

const CommentList = ({ commentList }) => {
  console.log(commentList);
  return (
    <div>
      {/*더미데이터...?*/}
      <>
        <CommentWriter1>사용자1</CommentWriter1>
        <CommentTextWriter> 안녕!!</CommentTextWriter>

        <CommentWriter>사용자2</CommentWriter>
        <CommentTextWriter>침대 최고야</CommentTextWriter>
      </>
      {commentList.map((it) => (
        <CommentItem key={it.id} {...it} />
      ))}
    </div>
  );
};

CommentList.defaultProps = {
  commentList: [],
};

export default CommentList;
