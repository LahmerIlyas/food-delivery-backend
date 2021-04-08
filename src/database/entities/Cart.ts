import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';
import { Address } from './Address';
import { PaymentCard } from './PaymentCard';
import { Meal } from './Meal';
import { MealReview } from './MealReview';


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

  @OneToMany(type => CartItem, item => item.cart)
  cart_items: CartItem[];

  @Column({type: 'text', nullable: true})
  promo_code: string;

}

@Entity()
export class CartItem extends BaseEntity {
  @ManyToOne(type => Cart, {nullable: true})
  @JoinColumn({ name: 'cart_id' })
  cart: Cart;

  @Column({name: 'cart_id', nullable: true})
  cart_id: number;

  @ManyToOne(type => Meal, {nullable: true})
  @JoinColumn({ name: 'meal_id' })
  meal: Meal;

  @Column({name: 'meal_id', nullable: true})
  meal_id: number;

  @Column()
  quantity: number;
}