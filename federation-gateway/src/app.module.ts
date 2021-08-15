import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';


@Module({
  imports: [GraphQLGatewayModule.forRoot({
    server:{
      cors: true
    },
    gateway:{
      serviceList:[
        {name: "projects", url: "http://localhost:3000/graphql"},
        {name: "investees", url: "http://localhost:3001/graphql"}
      ]
    }
  })],

})
export class AppModule {}
