import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
export default Users;
