import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

// graphql
import { HelloModule } from '@graphql/hello/hello.module';

// rest
import { AppController } from '@rest/hello/app.controller';
import { AppService } from '@rest/hello/app.service';

@Module({
  imports: [
    HelloModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'dist/schema.gql'
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
