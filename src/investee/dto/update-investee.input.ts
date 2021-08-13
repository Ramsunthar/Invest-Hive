import { CreateInvesteeInput } from './create-investee.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvesteeInput extends PartialType(CreateInvesteeInput) {
  @Field(() => Int)
  id: number;
}
