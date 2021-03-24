/* import {
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

/* import User from '@modules/users/infra/typeorm/entities/Users';
import Projects from '@modules/projects/infra/typeorm/entities/Projects';

@Entity('navers')
export default class Navers {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  /* @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToMany(() => Projects)
  @JoinTable()
  projects: Projects[];

  @Column()
  name: string;

  @Column()
  birthdate: Date;

  @Column()
  admission_date: Date;

  @Column()
  job_role: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
} */
