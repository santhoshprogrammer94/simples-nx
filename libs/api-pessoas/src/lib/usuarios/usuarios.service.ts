import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

import { UsuariosEntity } from './usuarios.entity';

@Injectable()
export class UsuariosService extends TypeOrmCrudService<UsuariosEntity> {
  constructor(
    @InjectRepository(UsuariosEntity) thisRepository: Repository<UsuariosEntity>
  ) {
    super(thisRepository);
  }

  getData(): unknown {
    return { message: 'Welcome to api!' };
  }
}
