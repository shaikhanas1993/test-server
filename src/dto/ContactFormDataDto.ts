import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class ContactFormDataDto {
  @IsNotEmpty()
  @ApiProperty()
  @MaxLength(25)
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(25)
  lastName: string;

  @ApiProperty()
  @IsEmail()
  @MaxLength(50)
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(500)
  message: string;
}
