import { CreateDateColumn, UpdateDateColumn, BaseEntity as Entity, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity extends Entity{
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
