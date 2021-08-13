import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Investee {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
