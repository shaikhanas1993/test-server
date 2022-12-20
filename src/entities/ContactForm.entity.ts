import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

@Entity('contact_form_table')
export class ContactForm {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  @IsNotEmpty()
  @MaxLength(25)
  firstName: string;

  @Column()
  @IsNotEmpty()
  @MaxLength(25)
  lastName: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(50)
  email: string;

  @Column({ type: 'text' })
  @IsNotEmpty()
  @MaxLength(500)
  message: string;
}
