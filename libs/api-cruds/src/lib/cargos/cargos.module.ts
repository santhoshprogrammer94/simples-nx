import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiCoreModule } from '@simples/api-core';

import { CargosController } from './cargos.controller';
import { CargoEntity } from './cargos.entity';
import { CargosService } from './cargos.service';

@Module({
  imports: [ApiCoreModule, TypeOrmModule.forFeature([CargoEntity])],
  controllers: [CargosController],
  providers: [CargosService],
  exports: [TypeOrmModule],
})
export class CargosModule {}
