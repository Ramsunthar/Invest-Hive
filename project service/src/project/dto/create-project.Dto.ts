import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectDto{
  @Field()
  name: string
  @Field()
  details: string
  @Field()
  type : string
  @Field()
  investeeId: string

}
