import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { CargosService } from './cargos.service';
import { CargoEntity } from './cargos.entity';

@Crud({
  model: {
    type: CargoEntity,
  },
  query: {
    limit: 5,
    cache: 2000,
  },
  params: {
    id: {
      field: 'IDE001',
      type: 'number',
      primary: true,
    },
  },
})
@Controller('cargos')
export class CargosController implements CrudController<CargoEntity> {
  constructor(public service: CargosService) {}

  @Get('hello')
  getData(): any {
    return this.service.getData();
  }
}
