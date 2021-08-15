import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './resolver/project.resolver';
import { Project, ProjectSchema } from './entities/project.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectRepository } from './repository/Project.repository';
import { InvesteeResolver } from './resolver/investee.resolver';

@Module({
  imports : [
    MongooseModule.forFeature([
      {name: Project.name, schema : ProjectSchema}
    ])
  ],
  providers: [ProjectResolver, ProjectService, ProjectRepository,InvesteeResolver]
})
export class ProjectModule {}
