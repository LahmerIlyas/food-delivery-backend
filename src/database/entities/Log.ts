import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';

@Entity()
export class Log extends BaseEntity {
  @Column({type: 'text', nullable: true})
  operation: string;

  @Column({type: 'text', nullable: true})
  scope: string;

  @Column({type: 'json', nullable: true})
  data: object;

  @ManyToOne(type => User, {nullable: true, onDelete: 'CASCADE'})
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({name: 'user_id', nullable: true})
  user_id: number;
}
