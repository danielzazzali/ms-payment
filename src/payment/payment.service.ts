import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MercadoPagoConfig, Preference } from 'mercadopago';

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(PaymentService.name);
  private client: MercadoPagoConfig;

  constructor(private configService: ConfigService) {
    this.client = new MercadoPagoConfig({
      accessToken: this.configService.get<string>('MERCADOPAGO_ACCESS_TOKEN'),
    });
  }

  async createPreference(
    id: string,
    title: string,
    quantity: number,
    unitPrice: number,
  ) {
    try {
      const preference = new Preference(this.client);

      const response = await preference.create({
        body: {
          items: [
            {
              id: id,
              title: title,
              quantity: quantity,
              unit_price: unitPrice,
            },
          ],
        },
      });

      this.logger.log('Preference created successfully', response);
      return response;
    } catch (error) {
      this.logger.error('Error creating preference', error);
      throw error;
    }
  }
}
