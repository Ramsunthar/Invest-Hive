import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateInvesteeDto } from "src/investee/dto/create-investee.Dto";
import { UpdateInvesteeDto } from "src/investee/dto/update-investee.Dto";
import { Investee, InvesteeDocument } from "src/investee/entities/investee.entity";

@Injectable()
export class InvesteeRepository {
    constructor(@InjectModel(Investee.name) private investeeModel: Model<InvesteeDocument>) {}

    async create(createInvesteetDTO : CreateInvesteeDto) : Promise<Investee> {
        let newInvestee = new this.investeeModel(createInvesteetDTO);
        return await newInvestee.save();
    }

    async findAll() : Promise<Investee[]> {
        return await this.investeeModel.find();
    }

    async findById(_id:string) : Promise<Investee> {
        return await this.investeeModel.findById(_id);
    }

    async update (_id:string, updateInvesteetDto: UpdateInvesteeDto) {
        return await this.investeeModel.findByIdAndUpdate(_id, updateInvesteetDto)  
    }

    async remove(_id:string): Promise<Investee> {
        return await this.investeeModel.findByIdAndDelete(_id)
    }

}