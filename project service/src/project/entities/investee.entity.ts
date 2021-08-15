import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Project } from "./project.entity";



@ObjectType()
@Directive('@extends')
@Directive('@key(fields:"_id")')
export class Investee{
    @Field((type)=>ID)
    @Directive('@external')
    _id: string

    @Field((type)=>[Project])
    projects: Project[]
}