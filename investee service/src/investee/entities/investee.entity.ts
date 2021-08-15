import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Prop, SchemaFactory,Schema } from '@nestjs/mongoose';


export type InvesteeDocument = Investee & Document;

@ObjectType()
@Schema()
@Directive('@key(fields:"_id")')
export class Investee {
  // @Field((type)=>ID)
  @Field((type)=>ID)
  _id: string
  @Field()
  @Prop()
  name : string
  @Field()
  @Prop()
  email: string
  @Field()
  @Prop()
  username: string
  @Field()
  @Prop()
  password: string

}

export const InvesteeSchema = SchemaFactory.createForClass(Investee);
