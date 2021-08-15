import { CreateInvesteeDto } from './create-investee.Dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvesteeDto extends PartialType(CreateInvesteeDto) {
  @Field()
  name : string
  @Field()
  email: string
  @Field()
  username: string
  @Field()
  password: string
}
