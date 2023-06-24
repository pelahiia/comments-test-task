export const commentsFromServer = (): Promise<any> => {
  return fetch('https://dummyjson.com/comments')
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
    });
};

export const deleteComment = (id: number) => {
  return fetch(`https://dummyjson.com/comments/${id}`, {
    method: 'DELETE',
  })
  .then(response => response.json())
};

export const addComment = (commentBody: string) => {
  return fetch('https://dummyjson.com/comments/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      body: commentBody,
      postId: 3,
      userId: 5,
    })
  })
  .then(res => res.json())
}
