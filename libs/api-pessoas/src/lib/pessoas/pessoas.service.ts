import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

import { PessoasEntity } from './pessoas.entity';

@Injectable()
export class PessoasService extends TypeOrmCrudService<PessoasEntity> {
  constructor(
    @InjectRepository(PessoasEntity) thisRepository: Repository<PessoasEntity>
  ) {
    super(thisRepository);
  }

  getData(): unknown {
    return { message: 'Welcome to api!' };
  }
}
