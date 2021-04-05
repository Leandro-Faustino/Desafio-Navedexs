import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import Users from '@modules/users/infra/typeorm/entities/Users';
import Navers from '@modules/navers/infra/typeorm/entities/Navers';
import { Exclude } from 'class-transformer';

@Entity('projects')
export default class Projects {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Exclude()
  user_id: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @ManyToMany(() => Navers, navers => navers.projects)
  navers: Navers[];

  @Column()
  name: string;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;
}
