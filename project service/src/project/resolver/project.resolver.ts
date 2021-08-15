import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ProjectService } from '../project.service';
import { Project } from '../entities/project.entity';
import { CreateProjectDto } from '../dto/create-project.Dto';
import { UpdateProjectDto } from '../dto/update-project.Dto';
import { Investee } from '../entities/investee.entity';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project)
  createProject(@Args('project') project: CreateProjectDto) {
    return this.projectService.create(project);
  }

  @Query(() => [Project], { name: 'getAllProjects' })
  findAll() {
    return this.projectService.findAll();
  }

  @Query(() => Project, { name: 'FindProjectById' })
  findOne(@Args('id') _id: string) {
    return this.projectService.findOne(_id);
  }

  @Mutation(() => Project)
  updateProject(@Args('project') project: UpdateProjectDto, @Args('id') id:string) {
    return this.projectService.update(id, project);
  }

  @Mutation(() => Project)
  removeProject(@Args('id', ) id: string) {
    return this.projectService.remove(id);
  }

  @ResolveField((of) => Investee)
  investee(@Parent() project:Project) {
    return {__typename:"Investee",id: project.investeeId}
  }
}
