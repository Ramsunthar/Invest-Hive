import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Investee } from "../entities/investee.entity";
import { Project } from "../entities/project.entity";
import { ProjectService } from "../project.service";

@Resolver((of) => Investee)
export class InvesteeResolver {
    constructor(private readonly projectService: ProjectService) {}

     @ResolveField((of) => [Project])
     projects(@Parent() investee:Investee) : Promise<Project[]> {//method name should be equal to the name in the entity
         return this.projectService.forInvestee(investee._id);//need to create forInvestee method in the project service
     }
}