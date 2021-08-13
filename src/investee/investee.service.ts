import { Injectable } from '@nestjs/common';
import { CreateInvesteeInput } from './dto/create-investee.input';
import { UpdateInvesteeInput } from './dto/update-investee.input';

@Injectable()
export class InvesteeService {
  create(createInvesteeInput: CreateInvesteeInput) {
    return 'This action adds a new investee';
  }

  findAll() {
    return `This action returns all investee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} investee`;
  }

  update(id: number, updateInvesteeInput: UpdateInvesteeInput) {
    return `This action updates a #${id} investee`;
  }

  remove(id: number) {
    return `This action removes a #${id} investee`;
  }
}
