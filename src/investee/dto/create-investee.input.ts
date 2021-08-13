import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInvesteeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
