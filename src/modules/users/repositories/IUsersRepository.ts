import Users from '@modules/users/infra/typeorm/entities/Users';
import ICreateUsersDTO from '@modules/users/dtos/ICreateUsersDTO';

export default interface IUsersRepository {
  // findByEmail(email: string): Promise<Users | undefined>;
  create(data: ICreateUsersDTO): Promise<Users>;
  save(user: Users): Promise<Users>;
}
