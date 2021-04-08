import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import {File} from './File';
import { MealCategory } from './MealCategory';
import { Restaurant } from './Restaurant';
import { MealReview } from './MealReview';
import { User } from './User';

@Entity()
export class Meal extends BaseEntity {
  @Column({type: 'text'})
  name: string;

  @Column({type: 'text'})
  description: string;

  @ManyToOne(type => File, {nullable: true})
  @JoinColumn({ name: 'cover_id' })
  cover: File;

  @Column({name: 'cover_id', nullable: true})
  cover_id: number;

  @Column()
  cost: number;

  @ManyToOne(type => MealCategory)
  @JoinColumn({ name: 'meal_category' })
  meal_category: MealCategory;

  @ManyToOne(type => Restaurant)
  @JoinColumn({ name: 'restaurant' })
  restaurant: Restaurant;

  @OneToMany(type => MealReview, review => review.meal)
  meal_reviews: MealReview[];

  @ManyToMany(() => User, user => user.favorite_meals)
  favorite_users: User[];

}