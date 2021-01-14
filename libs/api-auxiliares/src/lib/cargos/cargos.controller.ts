import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { CargosEntity } from './cargos.entity';
import { CargosService } from './cargos.service';

@Crud({
  model: {
    type: CargosEntity,
  },

  query: {
    limit: 20,
    cache: 1000,
    maxLimit: 1000,
    alwaysPaginate: true,
    sort: [{ field: 'id', order: 'DESC' }],
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
