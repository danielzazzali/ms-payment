import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, INestMicroservice } from '@nestjs/common';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

describe('main.ts', () => {
  let app: INestApplication;
  let microservice: INestMicroservice;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    microservice = app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.GRPC,
      options: {
        package: 'payment',
        protoPath: 'src/payment/payment.proto',
        url: 'localhost:5000',
      },
    });
  });

  it('should start the application', async () => {
    await app.init();
    expect(app).toBeDefined();
  });

  it('should connect to the microservice', async () => {
    await app.startAllMicroservices();
    expect(microservice).toBeDefined();
  });

  afterEach(async () => {
    await app.close();
  });
});