import { ObjectType, Field, Int, Directive } from '@nestjs/graphql';
import { Prop, SchemaFactory,Schema } from '@nestjs/mongoose';
import { Investee } from './investee.entity';


export type ProjectDocument = Project & Document;

@ObjectType()
@Schema()
@Directive('@key(fields:"_id")')
export class Project {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // _id number
  @Field()
  _id: string
  @Field()
  @Prop()
  name: string
  @Field()
  @Prop()
  details: string
  @Field()
  @Prop()
  type : string
  @Field(()=>Investee)
  investee: Investee

  @Field()
  @Prop()
  investeeId: string

 
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

