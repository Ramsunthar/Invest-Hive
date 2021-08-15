import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { InvesteeRepository } from 'src/repository/investee.repository';
import { CreateInvesteeDto } from './dto/create-investee.Dto';
import { UpdateInvesteeDto } from './dto/update-investee.Dto';
import { Investee } from './entities/investee.entity';

@Injectable()
export class InvesteeService {

  constructor(private investeeRepository: InvesteeRepository) {}


  async create(createInvesteeDto: CreateInvesteeDto): Promise<Investee> {
    return  await this.investeeRepository.create(createInvesteeDto);
  }

  async findAll(): Promise<Investee[]> {
    return await this.investeeRepository.findAll();
  }

  async findOne(id: string): Promise<Investee> {
    return await this.investeeRepository.findById(id);
  }

  async update(id: string, updateInvesteeDto: UpdateInvesteeDto) {
    return await this.investeeRepository.update(id,updateInvesteeDto);
  }

  async remove(id: string) {
    return await this.investeeRepository.remove(id);
  }
}
