import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';


@Entity()
export class PaymentCard extends BaseEntity {
  @Column({type: 'text'})
  card_holder: string;

  @Column({type: 'text'})
  card_number: string;

  @Column({type: 'text'})
  card_cvv: string;

  @ManyToOne(type => User, {nullable: true})
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({name: 'user_id', nullable: true})
  user_id: number;
}