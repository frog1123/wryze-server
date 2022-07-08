import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Post } from '@graphql/posts/posts.interface';
import { CreatePostDto } from '@graphql/posts/create-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private postModel: Model<Post>) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }
}
