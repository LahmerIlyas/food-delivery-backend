import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';
import { Meal } from './Meal';

@Entity()
export class MealReview extends BaseEntity {
  @Column()
  stars: number;

  @ManyToOne(type => User, {nullable: true})
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({name: 'user_id', nullable: true})
  user_id: number;


  @ManyToOne(type => Meal, {nullable: true})
  @JoinColumn({ name: 'meal_id' })
  meal: Meal;

  @Column({name: 'meal_id', nullable: true})
  meal_id: number;

}