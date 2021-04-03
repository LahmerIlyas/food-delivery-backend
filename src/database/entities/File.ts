import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';

@Entity()
export class File extends BaseEntity{
  @Column({nullable: true})
  path: string;

  @Column({nullable: true})
  name: string;

  @Column({nullable: true})
  alt: string;

  @Column({nullable: true})
  size: number;

  @Column({nullable: true})
  mime_type: string;

  @ManyToOne(type => User, {nullable: true, onDelete: 'CASCADE'})
  @JoinColumn({ name: 'owner_id' })
  owner: User;

  @Column({name: 'owner_id', nullable: true})
  owner_id: number;

}
