import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinColumn,
} from 'typeorm';

import Users from '@modules/users/infra/typeorm/entities/Users';
import Navers from '@modules/navers/infra/typeorm/entities/Navers';

@Entity('projects')
export default class Projects {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  users_id: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'users_id' })
  users: Users;

  @ManyToMany(() => Navers, navers => navers.projects)
  navers: Navers[];

  @Column()
  name: string;
}
