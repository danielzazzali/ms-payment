import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { PaymentModule } from './payment/payment.module';
import { ConfigModule } from '@nestjs/config';

describe('AppModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

});
