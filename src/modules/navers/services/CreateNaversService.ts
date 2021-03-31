// import Users from '@modules/users/infra/typeorm/entities/Users';
// import AppError from '@shared/infra/http/error/AppError';
import AppError from '@shared/infra/http/error/AppError';
import { injectable, inject } from 'tsyringe';
import { getRepository } from 'typeorm';
import { INaversDTO } from '../dtos/INaversDTO';
import INaversRepository from '../infra/repositories/INaversRepository';
import Navers from '../infra/typeorm/entities/Navers';

@injectable()
class CreateNaversService {
  constructor(
    @inject('NaversRepository')
    private naversRepository: INaversRepository,
  ) {}

  public async execute({
    name,
    user_id,
    birthDate,
    admission_date,
    job_role,
    projects,
  }: INaversDTO): Promise<Navers> {
    // fazer verificaçao se usuario existe db
    const existNaver = await getRepository(Navers)
      .createQueryBuilder('navers')
      .where('user_id = :id AND name = :name', { id: user_id, name })
      .getOne();

    console.log(existNaver);
    if (existNaver) {
      throw new AppError('naver already created');
    }
    // criaçao do meu usuario pelo repositorioUser
    const naver = await this.naversRepository.create({
      name,
      user_id,
      birthDate,
      admission_date,
      job_role,
      projects,
    });

    return naver;
  }
}
export default CreateNaversService;
