import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Project {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // _id: number
  @Field()
  @Prop()
  name: string
  @Field()
  @Prop()
  details: string
  @Field()
  @Prop()
  type : string

  //relationship
}
