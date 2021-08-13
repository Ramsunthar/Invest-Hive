import { Module } from '@nestjs/common';

import { ProjectModule } from './project/project.module';
import { InvesteeModule } from './investee/investee.module';

@Module({
  imports: [ProjectModule, InvesteeModule],
})
export class AppModule {}
