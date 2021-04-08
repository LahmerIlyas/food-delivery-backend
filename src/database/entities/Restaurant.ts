import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import {File} from './File';
import { Meal } from './Meal';

@Entity()
export class Restaurant extends BaseEntity {
  @Column({type: 'text'})
  name: string;

  @Column({type: 'text'})
  description: string;

  @ManyToOne(type => File, {nullable: true})
  @JoinColumn({ name: 'logo_id' })
  logo: File;

  @Column({name: 'logo_id', nullable: true})
  logo_id: number;

  @ManyToOne(type => File, {nullable: true})
  @JoinColumn({ name: 'cover_id' })
  cover: File;

  @Column({name: 'cover_id', nullable: true})
  cover_id: number;

  @Column({type: 'text', nullable: true})
  address: string;

  @Column({
    type: 'geometry',
    nullable: true,
    spatialFeatureType: 'Point',
    srid: 4326
  })
  @Index({
    spatial: true
  })
  location: any;

  @Column({type: 'text'})
  phone_number: string;

  @Column()
  delivery_cost: number;

  @Column()
  delivery_duration: number;

  @OneToMany(type => Meal, meal => meal.restaurant)
  meals: Meal[];
}