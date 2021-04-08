import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import {File} from './File';
import { Address } from './Address';
import { PaymentCard } from './PaymentCard';
import { MealReview } from './MealReview';
import { Meal } from './Meal';
import { Cart } from './Cart';

export enum UserRole {
  USER = "utilisateur",
  ADMIN = "admin",
}

@Entity()
export class User extends BaseEntity {
  @Column({type: 'text'})
  name: string;

  @Column({type: 'text', unique: true})
  email: string;

  @Column({type: 'text'})
  hashed_password: string;

  @Column({type: 'text', nullable: true})
  token: string;

  @Column({type: 'text', nullable: true})
  refresh_token: string;

  @Column({type: 'text', nullable: true, unique: true})
  google_id: string;

  @Column({type: 'text', nullable: true, unique: true})
  apple_id: string;

  @Column({type: 'text', nullable: true, unique: true})
  facebook_id: string;

  @ManyToOne(type => File, {nullable: true, cascade: true})
  @JoinColumn({ name: 'avatar_id' })
  avatar: File;

  @Column({name: 'avatar_id', nullable: true})
  avatar_id: number;

  @Column({type: 'text', nullable: true})
  phone_number: string;

  @Column({ type: "enum",enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Column({type: 'timestamptz', nullable: true})
  last_activity: Date;

  @Column({ default: true })
  enable_promotional_emails: boolean;

  @Column({ default: true })
  enable_monthly_newsletter: boolean;

  @Column({ default: true })
  enable_feedback_collection: boolean;

  @Column({ default: true })
  enable_discount_notifications: boolean;

  @OneToMany(type => Address, address => address.user)
  addresses: Address[];

  @OneToMany(type => PaymentCard, card => card.user)
  payment_cards: PaymentCard[];

  @OneToMany(type => MealReview, review => review.user)
  meal_reviews: MealReview[];

  @ManyToMany(() => Meal, meal => meal.favorite_users, {
    cascade: true
  })
  @JoinTable()
  favorite_meals: Meal[];

  @OneToMany(type => Cart, cart => cart.user)
  carts: Cart[];
}