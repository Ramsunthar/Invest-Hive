import { CreateProjectDto } from './create-project.Dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @Field()
  name: string
  @Field()
  details: string
  @Field()
  type : string
  @Field()
  investeeId: string

}
