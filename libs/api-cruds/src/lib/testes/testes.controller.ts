import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { TesteEntity } from './teste.entity';
import { TestesService } from './testes.service';

@Crud({
  model: {
    type: TesteEntity,
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
@Controller('testes')
export class TestesController implements CrudController<TesteEntity> {
  constructor(public service: TestesService) {}

  @Get('hello')
  getData(): any {
    return this.service.getData();
  }
}
