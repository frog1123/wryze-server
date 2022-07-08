import { Module } from '@nestjs/common';
import { PostsResolver } from '@graphql/posts/posts.resolver';
import { MongooseModule } from '@nestjs/mongoose';

import { PostSchema } from '@graphql/posts/posts.schema';
import { PostsService } from './posts.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])],
  providers: [PostsResolver, PostsService]
})
export class PostsModule {}
