import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class ApiDatabaseService {
  constructor(private readonly entityManager: EntityManager) {}

  async rawSQL(sqlQuery: any) {
    const rawData = await this.entityManager.query(sqlQuery);
    return rawData;
  }

  tableFields(tableName: string) {
    const rawData = this.entityManager.query(`SHOW COLUMNS FROM ${tableName}`);
    return rawData;
  }
}

// const rawData = await manager.query(`SELECT * FROM USERS`);
// `SHOW COLUMNS FROM City`
