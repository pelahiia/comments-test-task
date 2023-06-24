import { useEffect, useState } from 'react';
import { CommentList } from './components/ComentsList';
import './styles/main.scss';
import { addComment, commentsFromServer } from './api/comments';
import { CommentType } from './types/Comment';

export const App: React.FC = () => {
  const [comments, setComments] = useState<CommentType[]>([]);

  const fetchComments = () => {
    commentsFromServer()
    .then(data => {
      const commentData: CommentType[] = data.comments.map((comment: any) => ({
        id: comment.id,
        body: comment.body,
        postId: comment.postId,
        user: comment.user
      }));
      setComments(commentData);
    });
  }

  useEffect(() => {
    fetchComments()
  }, []);

  const handleDeleteComment = (event: React.MouseEvent<HTMLDivElement>, id: number) => {
    // if the API had an opportunity to actually use DELETE method, I would do it the following way:
    // deleteComment(id) // this function is located in api folder
    //   .then(() => {
    //     fetchComments();
    //   })
    event.stopPropagation();
    setComments(prev => prev.filter(item => item.id !== id));
  };

  const handleRequestComment = (commentBody: string) => {
    return addComment(commentBody);
  }

  return (
    <div className="app">
      <CommentList 
        comments={comments}
        handleDeleteComment={handleDeleteComment}
        handleRequestComment={handleRequestComment}
        setComments={setComments}
      />
    </div>
  )
}

export default App
