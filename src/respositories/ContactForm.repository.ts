import { ContactForm } from 'src/entities/ContactForm.entity';
import { Repository } from 'typeorm';

export class ContactFromRepository extends Repository<ContactForm> {}
