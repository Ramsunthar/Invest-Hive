import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from 'app.properties';
import { join } from 'path';

import { InvesteeModule } from './investee/investee.module';

@Module({
  imports: [InvesteeModule,
    MongooseModule.forRoot(MONGO_CONNECTION),
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),],

})
export class AppModule {}
