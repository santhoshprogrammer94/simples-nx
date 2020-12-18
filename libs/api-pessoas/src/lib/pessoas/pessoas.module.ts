import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiCoreModule } from '@simples/api-core';

import { PessoasController } from './pessoas.controller';
import { PessoasEntity } from './pessoas.entity';
import { PessoasService } from './pessoas.service';

@Module({
  imports: [ApiCoreModule, TypeOrmModule.forFeature([PessoasEntity])],
  controllers: [PessoasController],
  providers: [PessoasService],
})
export class PessoasModule {}
