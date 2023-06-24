import { User } from './User';

export interface CommentType {
  id: number;
  body: string;
  postId: number;
  user: User;
}