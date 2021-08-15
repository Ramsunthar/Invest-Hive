import { Resolver, Query, Mutation, Args, Int, ResolveReference } from '@nestjs/graphql';
import { InvesteeService } from './investee.service';
import { Investee } from './entities/investee.entity';
import { CreateInvesteeDto } from './dto/create-investee.Dto';
import { UpdateInvesteeDto } from './dto/update-investee.Dto';

@Resolver(() => Investee)
export class InvesteeResolver {
  constructor(private readonly investeeService: InvesteeService) {}

  @Mutation(() => Investee)
  createInvestee(@Args('createInvestee') createInvesteeDto: CreateInvesteeDto) {
    return this.investeeService.create(createInvesteeDto);
  }

  @Query(() => [Investee], { name: 'getAllInvestee' })
  findAll() {
    return this.investeeService.findAll();
  }

  @Query(() => Investee, { name: 'findInvestee' })
  findOne(@Args('id') id: string) {
    return this.investeeService.findOne(id);
  }

  @Mutation(() => Investee)
  updateInvestee(@Args('updateInvestee') investee: UpdateInvesteeDto,@Args('id') id:string) {
    return this.investeeService.update(id, investee);
  }

  @Mutation(() => Investee)
  removeInvestee(@Args('id') id: string) {
    return this.investeeService.remove(id);
  }

  @ResolveReference()//graphql federation to identify
  resolveReference(ref: {__typename: string,id:string}) {
    return this.investeeService.findOne(ref.id);
  }
}
