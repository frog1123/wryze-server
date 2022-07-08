import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PostInput {
  @Field(() => String)
  readonly title: string;

  @Field({ nullable: true })
  readonly content: string;

  @Field(() => String)
  readonly author: string;
}
