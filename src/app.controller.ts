import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
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
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @HttpCode(201)
  async postFormData(@Body() contactFormDto: ContactFormDataDto) {
    return await this.appService.postFormData(contactFormDto);
  }
}
