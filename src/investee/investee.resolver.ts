import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvesteeService } from './investee.service';
import { Investee } from './entities/investee.entity';
import { CreateInvesteeInput } from './dto/create-investee.input';
import { UpdateInvesteeInput } from './dto/update-investee.input';

@Resolver(() => Investee)
export class InvesteeResolver {
  constructor(private readonly investeeService: InvesteeService) {}

  @Mutation(() => Investee)
  createInvestee(@Args('createInvesteeInput') createInvesteeInput: CreateInvesteeInput) {
    return this.investeeService.create(createInvesteeInput);
  }

  @Query(() => [Investee], { name: 'investee' })
  findAll() {
    return this.investeeService.findAll();
  }

  @Query(() => Investee, { name: 'investee' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.investeeService.findOne(id);
  }

  @Mutation(() => Investee)
  updateInvestee(@Args('updateInvesteeInput') updateInvesteeInput: UpdateInvesteeInput) {
    return this.investeeService.update(updateInvesteeInput.id, updateInvesteeInput);
  }

  @Mutation(() => Investee)
  removeInvestee(@Args('id', { type: () => Int }) id: number) {
    return this.investeeService.remove(id);
  }
}
