import { Test, TestingModule } from '@nestjs/testing';
import { PaymentModule } from './payment.module';
import { PaymentService } from './payment.service';

describe('PaymentModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [PaymentModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should provide PaymentService', () => {
    const service = module.get<PaymentService>(PaymentService);
    expect(service).toBeDefined();
  });
});
