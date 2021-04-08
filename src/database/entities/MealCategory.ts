import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import {File} from './File';
import { Meal } from './Meal';

@Entity()
export class MealCategory extends BaseEntity {
  @Column({type: 'text'})
  name: string;

  @Column({type: 'text'})
  description: string;

  @ManyToOne(type => File, {nullable: true})
  @JoinColumn({ name: 'logo_id' })
  logo: File;

  @Column({name: 'logo_id', nullable: true})
  logo_id: number;

  @OneToMany(type => Meal, meal => meal.meal_category)
  meals: Meal[];

}