import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Service is up and running!';
  }

  postFormData() {
    return 'Hello World Service is up and running!';
  }
}
