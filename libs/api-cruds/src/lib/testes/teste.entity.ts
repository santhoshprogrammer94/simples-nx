import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { BaseMysqlEntity } from "@simples/api-shared";

@Entity('testes')
export class TesteEntity extends BaseMysqlEntity {
  @Column({ name: 'description', unique: true, length: 60 })
  description: string;
}
// @Entity('testes')
// export class TesteEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ name: 'description', unique: true, length: 60 })
//   description: string;

//   @Column({ name: 'dt_created', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   dtCreated: Date;

//   @Column({ name: 'dt_updated', type: 'timestamp' })
//   dtUpdated: Date;

//   @Column({ name: 'dt_deleted', type: 'timestamp' })
//   dtDeleted: Date;

//   @Column({ name: 'deleted', nullable: false, default: false }) deleted: boolean;
//   @Column({ name: 'active', nullable: false, default: true }) active: boolean;
// }
