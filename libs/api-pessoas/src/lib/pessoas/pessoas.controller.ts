import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { PessoasEntity } from './pessoas.entity';
import { PessoasService } from './pessoas.service';

@Crud({
  model: {
    type: PessoasEntity,
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
@Controller('pessoas')
export class PessoasController implements CrudController<PessoasEntity> {
  constructor(public service: PessoasService) {}

  @Get('hello')
  getData(): unknown {
    return this.service.getData();
  }
}
