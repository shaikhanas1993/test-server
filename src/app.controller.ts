import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ContactFormDataDto } from './dto/ContactFormDataDto';
import { Response } from 'express';

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
  async postFormData(
    @Body() contactFormDto: ContactFormDataDto,
    @Res() response: Response,
  ) {
    const req = await this.appService.postFormData(contactFormDto);
    return response
      .status(req.code == '201' ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST)
      .send(req.code == '201' ? 'success' : 'internal server error');
  }
}
