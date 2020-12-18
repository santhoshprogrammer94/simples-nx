import { BaseMysqlEntity } from '@simples/api-shared';
import { Column, Entity } from 'typeorm';

@Entity('testes')
export class TesteEntity extends BaseMysqlEntity {
  @Column({ name: 'descricao', unique: true, length: 60 })
  description: string;
}
