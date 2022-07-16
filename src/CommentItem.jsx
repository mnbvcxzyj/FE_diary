import {
  CommentButton,
  CommentDiv,
  EnterImg,
  InputNames,
  InputText,
  CommnetSubmit,
  CommentWrote,
  CommentWriter,
  CommentTextWriter,
  CommentWriter1,
} from "./CommentInput";
import CommentUpLoad from "./img/commentUpLoad.png";
import Enter from "./img/Enter.png";
import commentButton from "./img/CommentButton.png";

const CommentItem = ({ content }) => {
  return (
    <div className="CommentItem">
      <CommentWriter>사용자2</CommentWriter>
      <CommentTextWriter>{content}</CommentTextWriter>
    </div>
  );
};

export default CommentItem;
