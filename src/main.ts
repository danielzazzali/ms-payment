import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.GRPC,
    options: {
      package: 'payment',
      protoPath: 'src/payment/payment.proto',
      url: 'localhost:50053',
    },
  };

  app.connectMicroservice(microserviceOptions);

  await app.startAllMicroservices();
}
bootstrap();
