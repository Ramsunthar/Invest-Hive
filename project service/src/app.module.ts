import { Module } from '@nestjs/common';

import { ProjectModule } from './project/project.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from 'app.properties';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { Investee } from './project/entities/investee.entity';

@Module({
  imports: [
    ProjectModule,
    MongooseModule.forRoot(MONGO_CONNECTION),
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      buildSchemaOptions : {
        orphanedTypes: [Investee]
      }
    }),
    
  ],
})
export class AppModule {}
