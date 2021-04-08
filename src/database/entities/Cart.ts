import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';
import { Address } from './Address';
import { PaymentCard } from './PaymentCard';


@Entity()
export class Cart extends BaseEntity {
  @ManyToOne(type => User, {nullable: true})
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({name: 'user_id', nullable: true})
  user_id: number;

  @ManyToOne(type => Address, {nullable: true})
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @Column({name: 'address_id', nullable: true})
  address_id: number;

  @ManyToOne(type => PaymentCard, {nullable: true})
  @JoinColumn({ name: 'payment_card_id' })
  payment_card: PaymentCard;

  @Column({name: 'payment_card_id', nullable: true})
  payment_card_id: number;

}