import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

import { TesteEntity } from './teste.entity';

@Injectable()
export class TestesService extends TypeOrmCrudService<TesteEntity> {
  constructor(@InjectRepository(TesteEntity) thisRepository: Repository<TesteEntity>) {
    super(thisRepository);
  }

  getData(): unknown {
    return { message: 'Welcome to api!' };
  }
}
