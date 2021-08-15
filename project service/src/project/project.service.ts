import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.Dto';
import { UpdateProjectDto } from './dto/update-project.Dto';
import { Project } from './entities/project.entity';
import { ProjectRepository } from './repository/Project.repository';



@Injectable()
export class ProjectService {

  constructor(private projectRepository: ProjectRepository) {}


  async create(createProjectDto: CreateProjectDto) : Promise<Project> {
    return  await this.projectRepository.create(createProjectDto);
  }

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.findAll();
  }

  async findOne(id: string): Promise<Project> {
    return await this.projectRepository.findById(id);
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    return await this.projectRepository.update(id,updateProjectDto);
  }

  async remove(id: string) {
    return await this.projectRepository.remove(id);
  }

  async forInvestee(id:string)   {
    return this.projectRepository.findInvestee(id);
  }
}
