import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import {File} from './File';

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

  @ManyToOne(type => File, {nullable: true})
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
}