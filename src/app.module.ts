import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from 'orm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactForm } from './entities/ContactForm.entity';
import { MailTrapService } from './mailTrap';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...ormconfig,
      }),
    }),
    TypeOrmModule.forFeature([ContactForm]),
  ],
  controllers: [AppController],
  providers: [AppService, MailTrapService],
})
export class AppModule {}
