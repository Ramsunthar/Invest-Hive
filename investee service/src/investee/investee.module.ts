import { Module } from '@nestjs/common';
import { InvesteeService } from './investee.service';
import { InvesteeResolver } from './investee.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Investee, InvesteeSchema } from './entities/investee.entity';
import { InvesteeRepository } from 'src/repository/investee.repository';

@Module({
  imports : [
    MongooseModule.forFeature([
      {name: Investee.name, schema : InvesteeSchema}
    ])
  ],
  providers: [InvesteeResolver, InvesteeService,InvesteeRepository]
})
export class InvesteeModule {}
