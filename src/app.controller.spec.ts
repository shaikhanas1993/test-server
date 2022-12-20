import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailTrapService } from './mailTrap';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        MailTrapService,
        ConfigService,
        { provide: 'ContactFormRepository', useFactory: jest.fn() },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe(
        'Hello World Service is up and running!',
      );
    });

    it('should return success', async () => {
      const data = {
        firstName: 'cc',
        lastName: 'v',
        email: 'as@gmail.com',
        message: 'xx',
      };
      jest
        .spyOn(appService, 'postFormData')
        .mockImplementationOnce(() => Promise.resolve('record inserted in DB'));
      expect(await appController.postFormData(data)).toBe(
        'record inserted in DB',
      );
    });
  });
});
