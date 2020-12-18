import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiCoreModule } from '@simples/api-core';

import { TesteEntity } from './teste.entity';
import { TestesController } from './testes.controller';
import { TestesService } from './testes.service';

@Module({
  imports: [ApiCoreModule, TypeOrmModule.forFeature([TesteEntity])],
  controllers: [TestesController],
  providers: [TestesService],
})
export class TestesModule {}
