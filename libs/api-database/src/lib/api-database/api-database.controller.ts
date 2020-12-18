import { Controller, Get, Logger, Param, Query } from '@nestjs/common';

import { ApiDatabaseService } from './api-database.service';
import { get } from 'http';

@Controller('api-database')
export class ApiDatabaseController {
  constructor(private apiDatabaseService: ApiDatabaseService) {}

  @Get('raw-sql')
  async rawSql(@Query() query): Promise<any[]> {
    return this.apiDatabaseService.rawSQL(query.querySQL);
  }

  @Get('table-fields')
  async tableFields(@Query() query): Promise<any[]> {
    return this.apiDatabaseService.tableFields(query.tableName);
  }
}


// http://localhost:3333/api/api-database/raw-sql?querySQL=select%20*%20from%20G026
// http://localhost:3333/api/api-database/table-fields?tableName=G034
