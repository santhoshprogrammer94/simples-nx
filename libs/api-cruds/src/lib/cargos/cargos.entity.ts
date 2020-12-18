
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('E001')
export class CargoEntity  {
  @PrimaryGeneratedColumn()
  IDE001: number;

  @Column({unique: true, length: 60})
  NOME: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  CREATED: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  UPDATED: Date;

  @Column({ default: 'N', length: 1})
  DELETED: string;

  @Column({ default: 'A', length: 1 })
  STS: string;

}
