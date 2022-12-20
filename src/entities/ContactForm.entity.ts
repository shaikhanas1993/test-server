import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

@Entity('contact_form_table')
export class ContactForm {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  @IsNotEmpty()
  firstName: string;

  @Column()
  @IsNotEmpty()
  lastName: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ type: 'text' })
  @IsNotEmpty()
  @MaxLength(500)
  message: string;
}
