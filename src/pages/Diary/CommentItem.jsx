import { CommentWriter, CommentTextWriter } from "./CommentInput";

const CommentItem = ({ content }) => {
  return (
    <div className="CommentItem">
      <CommentWriter>사용자2</CommentWriter>
      <CommentTextWriter>{content}</CommentTextWriter>
    </div>
  );
};

export default CommentItem;
