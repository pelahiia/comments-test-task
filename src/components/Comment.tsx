import { CommentType } from "../types/Comment"

type Props = {
  comment: CommentType,
  handleDeleteComment: (event: React.MouseEvent<HTMLDivElement>, postId: number) => void,
}

export const Comment: React.FC<Props> = ({ comment, handleDeleteComment }) => {
  const { user, body, id } = comment;

  const createAvatarName = () => {
    return user.username[0].toUpperCase();
  }

  return (
    <div className="comment">
      <div className="comment-user">
        <div className="comment-user-name">
          {createAvatarName()}
        </div>
        <div className="comment-author">{user.username}</div>
      </div>
      <div 
        className="comment-delete"
        onClick={(event) => handleDeleteComment(event, id)}
      >
        ✕
      </div>
      <div className="comment-content">
        <p className="comment-text">{body}</p>
      </div>
    </div>
  )
}