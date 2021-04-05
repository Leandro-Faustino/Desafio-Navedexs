import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Exclude } from 'class-transformer';
import Users from '@modules/users/infra/typeorm/entities/Users';
import Projects from '@modules/projects/infra/typeorm/entities/Projects';

@Entity('navers')
export default class Navers {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Exclude()
  user_id: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @Column()
  name: string;

  @ManyToMany(() => Projects, projects => projects.navers, {
    cascade: true,
  })
  @JoinTable()
  projects: Projects[];

  @Column()
  birthDate: Date;

  @Column()
  admission_date: Date;

  @Column()
  job_role: string;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;
}
