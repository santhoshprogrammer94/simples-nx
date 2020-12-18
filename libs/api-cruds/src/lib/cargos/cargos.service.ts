import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

import { CargoEntity } from './cargos.entity';

@Injectable()
export class CargosService extends TypeOrmCrudService<CargoEntity> {
  constructor(@InjectRepository(CargoEntity) thisRepository: Repository<CargoEntity>) {
    super(thisRepository);
  }

  getData(): unknown {
    return { message: 'Welcome to api!' };
  }
}
