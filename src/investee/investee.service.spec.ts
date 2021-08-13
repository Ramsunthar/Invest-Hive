import { Test, TestingModule } from '@nestjs/testing';
import { InvesteeService } from './investee.service';

describe('InvesteeService', () => {
  let service: InvesteeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvesteeService],
    }).compile();

    service = module.get<InvesteeService>(InvesteeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
