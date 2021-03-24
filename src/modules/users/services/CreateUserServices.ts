import Users from '@modules/users/infra/typeorm/entities/Users';
// import AppError from '@shared/infra/http/error/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { injectable, inject } from 'tsyringe';

interface IRequest {
  email: string;
  password: string;
}
@injectable()
class CreateUserServices {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ email, password }: IRequest): Promise<Users> {
    // verificar se o usuario existe
    // const checkUserExists = await this.usersRepository.findByEmail(email);

    /* if (checkUserExists) {
      throw new AppError(' Email address already used.');
    } */
    // se nao existir usuario faz criptografia password
    // const hashedPassoword = await this.hashProvider.generateHash(password);

    // criaçao do meu usuario pelo repositorioUser
    const user = await this.usersRepository.create({
      email,
      password,
    });

    await this.usersRepository.save(user);
    return user;
  }
}
export default CreateUserServices;
