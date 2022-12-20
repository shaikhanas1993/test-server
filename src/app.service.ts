import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactFormDataDto } from './dto/ContactFormDataDto';
import { ContactForm } from './entities/ContactForm.entity';
import { ContactFromRepository } from './respositories/ContactForm.repository';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ContactForm)
    private contactFormRepository: ContactFromRepository,
  ) {}

  getHello(): string {
    return 'Hello World Service is up and running!';
  }

  async postFormData(data: ContactFormDataDto) {
    return await this.contactFormRepository.save(data);
  }
}
