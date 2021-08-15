import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProjectDto } from "../dto/create-project.Dto";
import { UpdateProjectDto } from "../dto/update-project.Dto";
import { Project, ProjectDocument } from "../entities/project.entity";

@Injectable()
export class ProjectRepository {
    constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {}

    async create(createProjectDTO : CreateProjectDto) : Promise<Project> {
        let newProject = new this.projectModel(createProjectDTO);
        return await newProject.save();
    }

    async findAll() : Promise<Project[]> {
        return await this.projectModel.find();
    }

    async findById(_id:string) : Promise<Project> {
        return await this.projectModel.findById(_id);
    }

    async update (_id:string, updateProjectDto: UpdateProjectDto) {
        return await this.projectModel.findByIdAndUpdate(_id, updateProjectDto)  
    }

    async remove(_id:string): Promise<Project> {
        return await this.projectModel.findByIdAndDelete(_id)
    }

    async findInvestee(_id:string) {
        return await this.projectModel.find({'investeeId':_id})
    }

}