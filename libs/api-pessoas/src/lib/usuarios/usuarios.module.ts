import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiCoreModule } from '@simples/api-core';

import { PessoasModule } from '../pessoas/pessoas.module';
import { UsuariosController } from './usuarios.controller';
import { UsuariosEntity } from './usuarios.entity';
import { UsuariosService } from './usuarios.service';

@Module({
  imports: [
    ApiCoreModule,
    TypeOrmModule.forFeature([UsuariosEntity]),
    forwardRef(() => PessoasModule),
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
