import { Module } from '@nestjs/common';
import { HelloResolver } from '@graphql/hello/hello.resolver';

@Module({
  providers: [HelloResolver]
})
export class HelloModule {}
