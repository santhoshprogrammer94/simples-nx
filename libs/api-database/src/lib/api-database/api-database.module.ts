import { Module } from '@nestjs/common';
import { ApiDatabaseController } from './api-database.controller';
import { ApiDatabaseService } from './api-database.service';

@Module({
  controllers: [ApiDatabaseController],
  providers: [ApiDatabaseService],
  exports: [],
})
export class ApiDatabaseModule {}
