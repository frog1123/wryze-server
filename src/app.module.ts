require('dotenv').config();

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';

// graphql
import { HelloModule } from '@graphql/hello/hello.module';
import { PostsModule } from '@graphql/posts/posts.module';

// rest
import { AppController } from '@rest/hello/app.controller';
import { AppService } from '@rest/hello/app.service';

@Module({
  imports: [
    HelloModule,
    PostsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'dist/schema.gql'
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL)
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
