import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ContactFormDataDto } from './dto/ContactFormDataDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/post-form')
  postFormData(@Body() contactFormDto: ContactFormDataDto) {
    return this.appService.postFormData(contactFormDto);
  }
}
