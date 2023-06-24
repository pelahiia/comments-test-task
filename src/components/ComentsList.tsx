import { Comment } from "./Comment";
import { CommentType } from "../types/Comment";
import { CommentArea } from "./CommentArea";

type Props = {
  comments: CommentType[],
  handleDeleteComment: (event: React.MouseEvent<HTMLDivElement>, postId: number) => void,
  handleRequestComment: (commentBody: string) => Promise<any>,
  setComments: (comments: CommentType[]) => void,
}

export const CommentList: React.FC<Props> = ({ comments, handleDeleteComment, handleRequestComment, setComments }) => {
  return (
    <div className="comment-list">
      {comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          handleDeleteComment={handleDeleteComment}
        />
      ))}
      <CommentArea
        handleRequestComment={handleRequestComment}
        setComments={setComments}
        comments={comments}
      />
    </div>
  )
}