import { useState, useEffect } from "react"
import { CommentType } from "../types/Comment";

type Props = {
  handleRequestComment: (commentBody: string) => Promise<CommentType>,
  setComments: (comment: CommentType[]) => void,
  comments: CommentType[],
}

export const CommentArea: React.FC<Props> = ({ handleRequestComment, setComments, comments }) => {
  const [commentBody, setCommentBody] = useState('');

  const handleChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentBody(event.target.value);
  };

  const handleAddComment = () => {
    handleRequestComment(commentBody)
      .then((res) => {
        setComments([...comments, res]);
      });
    setCommentBody('');
  };

  useEffect(() => {
    const savedCommentBody = localStorage.getItem('commentBody');
    if (savedCommentBody) {
      setCommentBody(savedCommentBody);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('commentBody', commentBody);
  }, [commentBody]);

  return (
    <div className="comment-area">
      <textarea 
        name="" 
        id=""
        className="comment-area-textarea"
        value={commentBody}
        onChange={handleChangeTextarea}
        placeholder='Write your comment here'
      >
      </textarea>
      <button 
        className="comment-area-button"
        onClick={handleAddComment}
      >
        Send
      </button>
    </div>
  )
}