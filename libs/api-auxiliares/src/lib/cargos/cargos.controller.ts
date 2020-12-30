import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { CargosEntity } from './cargos.entity';
import { CargosService } from './cargos.service';

@Crud({
  model: {
    type: CargosEntity,
  },
  query: {
    limit: 5,
    cache: 2000,
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
})
@Controller('cargos')
export class CargosController implements CrudController<CargosEntity> {
  constructor(public service: CargosService) {}

  @Get('hello')
  getData(): unknown {
    return this.service.getData();
  }
}
