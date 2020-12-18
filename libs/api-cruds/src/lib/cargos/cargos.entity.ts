import { BaseMysqlEntity } from '@simples/api-shared';
import { Column, Entity } from 'typeorm';

@Entity('cargos')
export class CargosEntity extends BaseMysqlEntity {
  @Column({ name: 'descricao', unique: true, length: 160 })
  description: string;
}
