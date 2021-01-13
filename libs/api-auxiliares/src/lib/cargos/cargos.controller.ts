import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { CargosEntity } from './cargos.entity';
import { CargosService } from './cargos.service';

@Crud({
  model: {
    type: CargosEntity,
  },

  query: {
    limit: 35,
    // cache: 2000,
    // alwaysPaginate: true,
    maxLimit: 1000,
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

/*

   alwaysPaginate: true,
    limit: 10,
    sort: [
      { field: 'id', order: 'DESC' },
    ],

*/
