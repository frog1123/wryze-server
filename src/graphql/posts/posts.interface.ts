import { Document } from 'mongoose';

export interface Post extends Document {
  title: String;
  content: String;
  readonly author: string;
  upvotes: Number;
  downvotes: Number;
  readonly createdAt: String;
}
