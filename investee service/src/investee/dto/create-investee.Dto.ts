import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInvesteeDto {
  @Field()
  name : string
  @Field()
  email: string
  @Field()
  username: string
  @Field()
  password: string
}
