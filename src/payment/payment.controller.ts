import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { PaymentService } from './payment.service';

interface CreatePreferenceRequest {
  id: string;
  title: string;
  quantity: number;
  unitPrice: number;
}

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @GrpcMethod('PaymentService', 'CreatePreference')
  async createPreference(data: CreatePreferenceRequest) {
    const { id, title, quantity, unitPrice } = data;
    return await this.paymentService.createPreference(
      id,
      title,
      quantity,
      unitPrice,
    );
  }
}
