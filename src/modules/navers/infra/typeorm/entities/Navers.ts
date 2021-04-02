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
import Users from '@modules/users/infra/typeorm/entities/Users';
import Projects from '@modules/projects/infra/typeorm/entities/Projects';

@Entity('navers')
export default class Navers {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @Column()
  name: string;

  @ManyToOne(() => Projects, navers => Navers, { eager: true })
  @JoinColumn()
  projects: Projects[];

  @Column()
  birthDate: Date;

  @Column()
  admission_date: Date;

  @Column()
  job_role: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
