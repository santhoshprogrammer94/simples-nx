import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { UsuariosEntity } from './usuarios.entity';
import { UsuariosService } from './usuarios.service';

@Crud({
  model: {
    type: UsuariosEntity,
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
@Controller('usuarios')
export class UsuariosController implements CrudController<UsuariosEntity> {
  constructor(public service: UsuariosService) {}

  @Get('hello')
  getData(): unknown {
    return this.service.getData();
  }
}
