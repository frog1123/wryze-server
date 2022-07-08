import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreatePostDto {
  @Field(() => String)
  readonly title: string;

  @Field(() => String)
  readonly content: string;

  @Field(() => String)
  readonly author: string;

  @Field(() => Int)
  upvotes: Number;

  @Field(() => Int)
  downvotes: Number;

  @Field(() => String)
  readonly createdAt: String;
}
