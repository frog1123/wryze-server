import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { PostsService } from '@graphql/posts/posts.service';
import { Post } from '@graphql/posts/post';
import { PostInput } from '@graphql/posts/post.input';

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post])
  async posts() {
    return this.postsService.findAll();
  }

  @Mutation(() => String)
  async createPost(@Args('input') input: PostInput) {
    console.log(input);
    this.postsService.create({
      title: input.title,
      content: input.content,
      author: input.author,
      upvotes: 0,
      downvotes: 0,
      createdAt: new Date().getTime().toString()
    });

    return 'success';
  }
}
