import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

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

}
