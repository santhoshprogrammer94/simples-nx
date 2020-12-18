import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargosModule, TestesModule } from '@simples/api-cruds';
import { ApiDatabaseModule } from '@simples/api-database';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config';
import { DatabaseConfig } from './database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),

    ApiDatabaseModule,

    CargosModule,
    TestesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
