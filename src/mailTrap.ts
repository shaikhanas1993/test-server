import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailtrapClient } from 'mailtrap';

@Injectable()
export class MailTrapService {
  constructor(private configService: ConfigService) {}
  async sendEmail(recipient_email: string) {
    const TOKEN = this.configService.get<string>('token');
    const SENDER_EMAIL = this.configService.get<string>('domain');

    const RECIPIENT_EMAIL = recipient_email;

    const client = new MailtrapClient({ token: TOKEN });

    const sender = { name: 'Mailtrap Test', email: SENDER_EMAIL };
    try {
      await client.send({
        from: sender,
        to: [{ email: RECIPIENT_EMAIL }],
        subject: 'Registration Complete',
        text: 'Your registration is complete',
      });
    } catch (e) {
      console.error(e);
    }
  }
}
