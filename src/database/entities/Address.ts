import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';


@Entity()
export class Address extends BaseEntity {
  @Column({type: 'text'})
  street_name: string;

  @Column({type: 'text'})
  city: string;

  @Column({type: 'text'})
  state: string;

  @Column({type: 'text'})
  zip_code: string;

  @ManyToOne(type => User, {nullable: true})
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({name: 'user_id', nullable: true})
  user_id: number;
}