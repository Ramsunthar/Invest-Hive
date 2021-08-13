import { Test, TestingModule } from '@nestjs/testing';
import { InvesteeResolver } from './investee.resolver';
import { InvesteeService } from './investee.service';

describe('InvesteeResolver', () => {
  let resolver: InvesteeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvesteeResolver, InvesteeService],
    }).compile();

    resolver = module.get<InvesteeResolver>(InvesteeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
