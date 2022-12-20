import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactFormDataDto } from './dto/ContactFormDataDto';
import { ContactForm } from './entities/ContactForm.entity';
import { MailTrapService } from './mailTrap';
import { ContactFromRepository } from './respositories/ContactForm.repository';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ContactForm)
    private contactFormRepository: ContactFromRepository,
    private mailTrapService: MailTrapService,
  ) {}

  getHello(): string {
    return 'Hello World Service is up and running!';
  }

  async postFormData(data: ContactFormDataDto) {
    try {
      await this.contactFormRepository.save(data);
      await this.mailTrapService.sendEmail(data.email);
      return 'record inserted in DB';
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException();
    }
  }
}
