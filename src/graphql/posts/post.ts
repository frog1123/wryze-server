import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => String)
  readonly title: string;

  @Field({ nullable: true })
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
