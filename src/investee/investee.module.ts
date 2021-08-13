import { Module } from '@nestjs/common';
import { InvesteeService } from './investee.service';
import { InvesteeResolver } from './investee.resolver';

@Module({
  providers: [InvesteeResolver, InvesteeService]
})
export class InvesteeModule {}
