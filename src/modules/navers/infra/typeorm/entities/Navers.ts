import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import Users from '@modules/users/infra/typeorm/entities/Users';
import Projects from '@modules/projects/infra/typeorm/entities/Projects';

@Entity('navers')
export default class Navers {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  users_id: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'users_id' })
  users: Users;

  @Column()
  name: string;

  @ManyToMany(() => Projects, projects => projects.navers)
  @JoinTable()
  projects: Projects[];

  @Column()
  birthDate: Date;

  @Column()
  admission_date: Date;

  @Column()
  job_role: string;
}
